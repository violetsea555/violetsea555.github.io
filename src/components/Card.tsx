import { StaticImageData } from "next/image";
import Image from "next/image";
import { ReactElement } from "react";

type CardProps = {
  title?: string;
  href?: string;
  imageWidth?: string;
  imageSrc?: StaticImageData;
  frameSrc?: StaticImageData;
  description: string | ReactElement;
};
export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col p-4  bg-white dark:bg-sky-950 rounded-[14px] shadow-sm w-[65vw]">
      <div className="flex flex-col border-2  border-[#ddf1f7]  bg-white dark:bg-sky-950 rounded-lg p-4 items-center">
        <div className={`max-w-xl ${props.imageWidth ? props.imageWidth : ""}`}>
          {props.imageSrc && (
            <Image
              className="border-2 border-gray-200 rounded-[5px]"
              src={props.imageSrc}
              alt=""
            />
          )}
        </div>
        {props.title && (
          <div className="text-2xl font-heading pt-3">{props.title}</div>
        )}
        <div className="text-center">{props.description}</div>
      </div>
    </div>
  );
}
