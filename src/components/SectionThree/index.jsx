import bg3 from "../../assets/mob-bg-3.webp";
import bg3Desktop from "../../assets/bg-03.webp";
import DirSec from "../DirectorSection";
import ContactSec from "../ContactSection";
import { SponsSec } from "../Sponsors";
import stuff from "../../assets/stuff.webp";

export default function SecThree() {
  return (
    <>
      <section
        className="
    min-h-[100vh]
    bg-bottom
    bg-contain sm:bg-cover
    bg-no-repeat
    bg-position-[center_bottom_60px] sm:bg-position-[center_bottom_0px]
     bg-fixed
    max-sm:bg-[image:var(--mobile-bg)]
    sm:bg-[image:var(--desktop-bg)]
    flex
    items-center
    justify-center
  "
        style={{
          "--mobile-bg": `url(${bg3})`,
          "--desktop-bg": `url(${bg3Desktop})`,
        }}
      >
        <img
          src={stuff}
          alt=""
          className=" sm:hidden mt-100 mb-100
             
            inset-0
            w-100
            h-100
            object-fill
            z-0
            
          "
        />
        <h2 className="text-egg  text-5xl font-bold"></h2>
      </section>

      <section className=" pt-8 lg:pt-0  bg-olive-200 text-black flex flex-col items-center justify-center">
        <DirSec />
      </section>
      <section className="">
        <SponsSec />
      </section>
      <section className="min-h-75 bg-olive-100 text-black flex flex-col items-center justify-center">
        <ContactSec />
      </section>
    </>
  );
}
