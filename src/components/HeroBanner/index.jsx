import imgOne from "../../assets/bryt-1.webp";
import vidOne from "../../assets/PILOT3.mp4";
import { FaPlay } from "react-icons/fa";
import pizza from "../../assets/pizza.png";

export default function Herobanner() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end justify-start ">
      <video
        className="absolute inset-0 h-full w-full object-cover  "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imgOne}
      >
        <source src={vidOne} type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* <div className="absolute inset-0 " /> */}

      <div className="relative z-10 py-110 px-6  sm:p-16 ">
        <h1 className="text-4xl min-[400px]:text-5xl pb-2 sunset sm:pb-0 sm:text-6xl lg:text-8xl  font-bold font-['Times_New_Roman']">
          BRYTNINGSTID
        </h1>

        {/* font-bold font-['Times_New_Roman'] */}

        <button
          onClick={() => {
            document.getElementById("trailer")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="px-2 py-6   cursor-pointer text-center flex flex-row items-center justify-center gap-4"
        >
          <img
            src={pizza}
            alt="Spill av trailer"
            className=" 
             
            inset-0
            w-15
            h-15
            lg:w-25
            lg:h-25
            object-fill
            z-0
           
          "
          />
          {/* <FaPlay className="text-3xl lg:text-4xl" /> */}
          <h2 className="text-2xl lg:text-3xl sea flex flex-row gap-4 items-center lacquer-regular  ">
            Play
          </h2>
        </button>
      </div>
    </section>
  );
}
