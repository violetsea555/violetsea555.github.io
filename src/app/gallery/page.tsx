import GalleryItem from "@/components/GalleryItem";
import townBg from "@/assets/scene/portfolio_town_bg_01.webp";

export default function gallery() {
  return (
    <main>
      <div className="flex m-10 items-center justify-center min-h-screen">
        <GalleryItem
          imageSrc={townBg}
          title={"Scal-Sk8 Website Revamp"}
          href={"#"}
          description={
            "Bringing a pre-mobile era website into the 21st century with a responsive, mobile first interface"
          }
        />
      </div>
    </main>
  );
}
