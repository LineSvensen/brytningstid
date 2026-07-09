import bg3 from "../../assets/bg-03.webp";
import DirSec from "../DirectorSection";

export default function SecThree() {
  return (
    <>
      <section
        className="min-h-screen  bg-fixed bg-bottom bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <h1 className="text-white  text-5xl font-bold">Overskrift 3</h1>
      </section>

      <section className="min-h-screen bg-amber-700 text-white flex flex-col items-center justify-center">
        <DirSec />
      </section>
    </>
  );
}
