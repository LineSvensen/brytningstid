import imgOne from "../../assets/bryt-1.webp";
import vidOne from "../../assets/PILOT3.mp4";
import { FaPlay } from "react-icons/fa";

export default function Herobanner() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end justify-start">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imgOne}
      >
        <source src={vidOne} type="video/mp4" />
      </video>

      <div className="absolute inset-0 " />

      <div className="relative z-10 py-20 px-6  sm:p-16 text-yellow-400">
        <h1 className=" text-4xl sm:text-6xl lg:text-8xl font-bold font-['Times_New_Roman']">
          BRYTNINGSTID
        </h1>

        <button
          onClick={() => {
            document.getElementById("trailer")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setOpen(false);
          }}
          className="px-2 py-1 text-left cursor-pointer"
        >
          <h2 className="text-2xl lg:text-2xl sm:pt-8 mt-1 flex flex-row gap-4 items-center">
            <FaPlay className="text-3xl lg:text-4xl" />
            Se trailer
          </h2>
        </button>
      </div>
    </section>
  );
}
