"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  isOpaqueAt,
  isOpaqueAtSync,
  preloadImageData,
} from "@/lib/pixel-hit-test";

type BuildingLinkProps = {
  href: string;
  label: string;
  smokeSrc: StaticImageData;
  buildingSrc: StaticImageData;
  windowsLitSrc?: StaticImageData;
  hitMaskSrc: StaticImageData;
  left?: string;
  top?: string;
  width?: string;
  aspectRatio: string;
};

export default function BuildingLink({
  href,
  label,
  smokeSrc,
  buildingSrc,
  hitMaskSrc,
  windowsLitSrc,
  left,
  top,
  width,
  aspectRatio,
}: BuildingLinkProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isHoveringHit, setIsHoveringHit] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    preloadImageData(buildingSrc.src);
    preloadImageData(smokeSrc.src);
    preloadImageData(hitMaskSrc.src);
  }, [buildingSrc.src, smokeSrc.src, hitMaskSrc.src]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (rafRef.current) return; // already have a check queued this frame
      const { clientX, clientY } = e;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const box = boxRef.current;
        if (!box) return;
        const rect = box.getBoundingClientRect();
        const xRatio = (clientX - rect.left) / rect.width;
        const yRatio = (clientY - rect.top) / rect.height;

        const onHitMask = isOpaqueAtSync(hitMaskSrc.src, xRatio, yRatio);
        const onSmoke = isOpaqueAtSync(smokeSrc.src, xRatio, yRatio);
        setIsHoveringHit(Boolean(onHitMask || onSmoke));
      });
    },
    [hitMaskSrc.src, smokeSrc.src],
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsHoveringHit(false);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.detail === 0) return;
      e.preventDefault();
      const box = boxRef.current;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const xRatio = (e.clientX - rect.left) / rect.width;
      const yRatio = (e.clientY - rect.top) / rect.height;

      Promise.all([
        isOpaqueAt(hitMaskSrc.src, xRatio, yRatio),
        isOpaqueAt(smokeSrc.src, xRatio, yRatio),
      ]).then(([onBuilding, onSmoke]) => {
        if (onBuilding || onSmoke) router.push(href);
      });
    },
    [hitMaskSrc.src, smokeSrc.src, href, router],
  );
  const isPositioned = left !== undefined;

  return (
    <div
      ref={boxRef}
      className={isPositioned ? "absolute" : "relative w-40 mx-auto"}
      style={
        isPositioned ? { left, top, width } : width ? { width } : undefined
      }
    >
      <div
        className="relative w-full pointer-events-none"
        style={{ aspectRatio }}
      >
        {windowsLitSrc && (
          <Image
            src={windowsLitSrc}
            alt=""
            fill
            className="object-contain transition-opacity duration-500"
            style={{ opacity: isHoveringHit ? 0.6 : 0 }}
          />
        )}
        <Image
          src={smokeSrc}
          alt=""
          fill
          className={`object-contain ${isHoveringHit ? "smoke-animating" : ""}`}
        />
        <Image src={buildingSrc} alt="" fill className="object-contain" />
      </div>

      <Link
        href={href}
        aria-label={label}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="absolute inset-0"
        style={{ cursor: isHoveringHit ? "pointer" : "default" }}
      />
    </div>
  );
}
