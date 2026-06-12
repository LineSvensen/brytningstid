import imgOne from "../../assets/bryt-1.webp";
import vidOne from "../../assets/PILOT3.mp4";

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

      <div className="relative z-10   p-16 text-white">
        <h1 className="text-8xl font-bold">Brytningstid</h1>
      </div>
    </section>
  );
}
