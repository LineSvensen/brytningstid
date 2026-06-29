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

      <div className="relative z-10 py-20 px-6  sm:p-16 text-white">
        <h1 className=" text-4xl sm:text-6xl lg:text-8xl font-bold">
          Brytningstid
        </h1>
        <h2 className="text-2xl lg:text-5xl font-bold sm:pt-8 mt-4 flex flex-row gap-4 items-center">
          <FaPlay className="text-3xl lg:text-6xl" />
          Se trailer
        </h2>
      </div>
    </section>
  );
}
