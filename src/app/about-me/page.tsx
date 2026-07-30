import catCake from "@/assets/catcake.png";
import Image from "next/image";
export default function AboutMe() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full">
        {" "}
        <Image src={catCake} alt="" priority className="object-cover" />
      </main>
    </div>
  );
}
