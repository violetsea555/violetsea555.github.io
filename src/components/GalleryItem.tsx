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
      <div className="flex flex-col p-2 max-w-lg bg-white dark:bg-gray-800 rounded-[10px] shadow-sm">
        <div className="flex flex-col border-2  border-[#ddf1f7]  bg-white dark:bg-gray-800 rounded-lg p-3 items-center">
          <div className="max-w-md">
            {props.imageSrc && (
              <Image className="rounded-[5px]" src={props.imageSrc} alt="" />
            )}
          </div>
          <div className="text-2xl font-heading pt-3">{props.title}</div>
          <div>{props.description}</div>
        </div>
      </div>
    </a>
  );
}
