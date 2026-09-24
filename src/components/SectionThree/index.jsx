import bg3 from "../../assets/bg-03.webp";
import DirSec from "../DirectorSection";
import ContactSec from "../ContactSection";
import { SponsSec } from "../Sponsors";
import stuff from "../../assets/stuff.png";

export default function SecThree() {
  return (
    <>
      <section
        className="min-h-[100dvh]  bg-fixed bg-bottom bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <img
          src={stuff}
          alt=""
          className=" sm:hidden
             
            inset-0
            w-100
            h-100
            object-fill
            z-0
            
          "
        />
        <h2 className="text-white  text-5xl font-bold"></h2>
      </section>

      <section className="min-h-screen  bg-olive-200 text-black flex flex-col items-center justify-center">
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
