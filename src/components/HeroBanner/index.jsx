import imgOne from "../../assets/posterdesktop.webp";
import vidOne from "../../assets/PILOT3.mp4";
import { FaPlay } from "react-icons/fa";
import pizza from "../../assets/pizza.png";
import onePlay from "../../assets/1play.png";
import twoPlay from "../../assets/2play.png";
import vhs from "../../assets/vhs.png";

export default function Herobanner() {
  return (
    <section className="relative h-[720px] sm:min-h-screen overflow-hidden flex items-end justify-start">
      {/* VIDEO */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imgOne}
      >
        <source src={vidOne} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-black/30 pointer-events-none" />

      {/* CONTENT */}
      <div
        className="
    relative z-40
    w-full
    flex flex-col
    items-center
    justify-end
    gap-8
    px-6 pb-40 lg:pl-16

    lg:items-start
     
  "
      >
        <h1
          className="
      text-[40px]
      min-[437px]:text-[52px]
      sm:text-6xl
      lg:text-8xl
      text-sunset-yellow
      font-bold
      font-['Times_New_Roman']
      text-center
      lg:text-left
    "
        >
          BRYTNINGSTID
        </h1>

        {/* VHS BUTTON */}
        <button
          onClick={() => {
            document.getElementById("trailer")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="
      relative
      z-40
      cursor-pointer

      lg:absolute
      lg:bottom-16
      lg:right-10
    "
        >
          <div
            className="
        relative
        w-32
        sm:w-42
        lg:w-50
        transition-transform
        duration-300
        hover:scale-[1.2]
      "
          >
            <img
              src={vhs}
              alt="Spill av trailer"
              className="block w-full h-auto pointer-events-none"
            />

            <h2
              className="
          absolute
          inset-0
          top-[4%]
          flex
          items-center
          justify-center
          text-base
          sm:text-xl
          play-button
          pointer-events-none
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
