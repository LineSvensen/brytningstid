import bg3 from "../../assets/bg-03.webp";
import DirSec from "../DirectorSection";
import ContactSec from "../ContactSection";

export default function SecThree() {
  return (
    <>
      <section
        className="min-h-screen  bg-fixed bg-bottom bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <h2 className="text-white  text-5xl font-bold"></h2>
      </section>

      <section className="min-h-screen  bg-olive-200 text-black flex flex-col items-center justify-center">
        <DirSec />
      </section>
      <section className="min-h-[300px] bg-olive-100 text-black flex flex-col items-center justify-center">
        <ContactSec />
      </section>
    </>
  );
}
