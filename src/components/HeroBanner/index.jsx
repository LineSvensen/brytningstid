import imgOne from "../../assets/posterdesktop.webp";
import vidOne from "../../assets/PILOT3.mp4";
import { FaPlay } from "react-icons/fa";
import pizza from "../../assets/pizza.png";
import onePlay from "../../assets/1play.png";
import twoPlay from "../../assets/2play.png";
import vhs from "../../assets/vhs.png";

export default function Herobanner() {
  return (
    <section className="relative h-[720px] sm:min-h-screen  overflow-hidden flex items-end justify-start  ">
      <video
        className="absolute inset-0 h-full w-full object-cover   "
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

      <div className="relative z-10  py-40 px-6  sm:p-16 ">
        <h1 className="text-[40px] min-[437px]:text-[52px] lg:pb-2 text-sunset-yellow sm:pb-0 sm:text-6xl lg:text-8xl  font-bold font-['Times_New_Roman']">
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
          className=" lg:pt-6  cursor-pointer text-center flex flex-row items-center justify-center gap-8"
        >
          {/* --------------- tegne knapp */}

          {/* <div className="group relative w-15 h-15 lg:w-25 lg:h-25 cursor-pointer">
            <img
              src={onePlay}
              alt="Spill av trailer"
              className="
              absolute inset-0
              w-full h-full
              object-fill
              transition-opacity duration-200
              group-hover:opacity-0
    "
            />

            <img
              src={twoPlay}
              alt=""
              className="
              absolute inset-0
              w-full h-full
              object-fill
              opacity-0
              transition-opacity duration-200
              group-hover:opacity-100
    "
            />
          </div> */}

          <div className="group relative inline-block cursor-pointer">
            <img
              src={vhs}
              alt="Spill av trailer"
              className="
      w-22 sm:w-28 h-auto
      lg:w-32
      transition-transform duration-300
      group-hover:scale-120
    "
            />

            <h2
              className="
               top-[4%] 
      absolute
      inset-0
      flex items-center justify-center
      text-base sm:text-xl
      play-button
      transition-transform duration-300
      group-hover:scale-120
    "
            >
              PLAY
            </h2>
          </div>
        </button>
      </div>
    </section>
  );
}
