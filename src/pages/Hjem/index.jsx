import Herobanner from "../../components/HeroBanner";

import SecOne from "../../components/SectionOne";
import SecTwo from "../../components/SectionTwo";
import SecThree from "../../components/SectionThree";

// function Section({ bg, title }) {
//   return (
//     <section
//       className="h-screen snap-start bg-cover bg-bottom relative"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       {/* mørk overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* innhold */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <h1 className="text-white text-5xl">{title}</h1>
//       </div>

//       {/* 👇 SAFE AREA nederst */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
//     </section>
//   );
// }

export default function Home() {
  return (
    <div className="">
      {/* Hero ligger helt normalt øverst */}
      <Herobanner />
      <div className="relative z-10">
        <SecOne />
        <div className="absolute bottom-0 left-0 z-20 w-full h-96 bg-gradient-to-b from-transparent to-[#030c1e] pointer-events-none" />
      </div>

      <div className="relative z-20  ">
        <SecTwo />
        <div className="absolute top-0 left-0 z-30 w-full h-96 bg-gradient-to-t from-transparent to-[#030c1e] pointer-events-none" />
        <div className="absolute bottom-0 left-0 z-30 w-full h-96 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </div>

      <div className="relative z-30  ">
        <SecThree />
        <div className="absolute top-0 left-0 z-40 w-full h-96 bg-gradient-to-t from-transparent to-black pointer-events-none" />
      </div>

      {/* <Section bg={bg1} />
      <Section bg={bg2}  />
      <Section bg={bg3}  /> */}
    </div>
  );
}
