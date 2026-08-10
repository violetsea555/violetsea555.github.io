import { StaticImageData } from "next/image";
import Image from "next/image";

type GalleryItemProps = {
  title: string;
  href: string;
  imageSrc?: StaticImageData;
  frameSrc?: StaticImageData;
  description: string;
};
export default function GalleryItem(props: GalleryItemProps) {
  return (
    <a href={props.href}>
      <div className="flex flex-col p-2 bg-white rounded-lg">
        <div className="flex flex-col border-2 border-[#ddf1f7] bg-white rounded-lg p-3 items-center">
          {props.imageSrc && <Image src={props.imageSrc} alt="" />}
          <div className="text-2xl font-heading pt-3">{props.title}</div>
          <div>{props.description}</div>
        </div>
      </div>
    </a>
  );
}
