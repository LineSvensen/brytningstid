import Herobanner from "../../components/HeroBanner";
import bg1 from "../../assets/bg-01.webp";
import bg2 from "../../assets/bg-02.webp";
import bg3 from "../../assets/bg-03.webp";

function Section({ bg, title }) {
  return (
    <section
      className="h-screen snap-start bg-cover bg-bottom relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* mørk overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* innhold */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-5xl">{title}</h1>
      </div>

      {/* 👇 SAFE AREA nederst */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      {/* Hero ligger helt normalt øverst */}
      <Herobanner />

      {/* Scroll sections */}
      <Section bg={bg1} title="Section 1" />
      <Section bg={bg2} title="Section 2" />
      <Section bg={bg3} title="Section 3" />
    </div>
  );
}
