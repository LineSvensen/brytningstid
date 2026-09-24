import { motion } from "framer-motion";

import bg1 from "../../assets/bgpink.webp";
import imgTrePers from "../../assets/photos.png";
import imgTrePersTo from "../../assets/kopi-bg.jpg";
import bgSky from "../../assets/bgbg.png";
import bgPapir from "../../assets/pap.png";
import bgPapMob from "../../assets/pap-mob.png";
import stuff from "../../assets/stuff.png";
import chain from "../../assets/chain.png";
import sharpie from "../../assets/sharpie.png";
import blackHeart from "../../assets/blackheart.png";
import yellowHeart from "../../assets/yellowheart.png";
import pinkLighter from "../../assets/lighterpink.png";
import chips from "../../assets/chips.png";
import spar from "../../assets/spar.png";

export default function SecOne() {
  return (
    <div className="relative">
      {/* MOBILE */}
      <motion.section
        className="sm:hidden relative h-130 bg-cover bg-bottom overflow-hidden"
        style={{ backgroundImage: `url(${bgSky})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.8,
        }}
      >
        <motion.img
          src={imgTrePers}
          alt=""
          className="
      absolute
      bottom-20
      left-1/2
      -translate-x-1/2
      w-[110%]
      max-w-none
      h-auto
    "
          variants={{
            hidden: {
              y: 180,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.section>

      {/* SM OG OPPOVER */}
      <section
        className="hidden sm:block min-h-screen bg-fixed bg-cover  bg-bottom  "
        style={{ backgroundImage: `url(${imgTrePersTo})` }}
      />

      {/* FLYTENDE PAPIR */}
      <div
        className="
          absolute
          z-30
          left-1/2
          bottom-0
          -translate-x-1/2
          translate-y-1/2

          w-[99%]
          h-[300px]

          sm:w-[98%]
          sm:h-100

          max-w-full
          flex
          justify-center
          items-center
        "
      >
        {/* PAPIR - MOBILE */}
        <img
          src={bgPapMob}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-75
            object-fill
            z-0
            sm:hidden
          "
        />

        {/* PAPIR - SM OG OPPOVER */}
        <img
          src={bgPapir}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-fill
            z-0
            hidden
            sm:block
          "
        />

        <img
          src={pinkLighter}
          alt=""
          className=" hidden sm:block
             
            inset-0
            w-80
            h-80
            object-fill
            z-0
            
          "
        />

        {/* TEKST */}
        <p
          className="
            relative sedgwick-ave-display-regular 
            z-10
            text-[#0F294F]
            text-center
             

            text-base
            leading-6
            px-12

            sm:text-2xl
            sm:leading-normal
            sm:px-6

            md:px-12
            
          "
        >
          I Brytningstid møter vi 16 år gamle Billie, Angelo og Erik som står
          midt i overgangen mellom barn og voksen. Filmen undersøker hvordan de
          forstår seg selv gjennom de små øyeblikkene der livet skjer før man
          helt klarer å sette ord på det. Brytningtid er et portrett av det å
          være ung - en film om nærhet, vennskap og alt det som gjør
          ungdomstiden både intens og tidløs.
        </p>
        <img
          src={chips}
          alt=""
          className=" hidden sm:block
             
            inset-0
            w-90
            h-90
            rotate-90
            object-fill
            z-0
            
          "
        />
      </div>
    </div>
  );
}

// import bg1 from "../../assets/bgpink.webp";
// import bg1Mobile from "../../assets/ping.png";
// import imgTrePers from "../../assets/trepers.png";

// export default function SecOne() {
//   return (
//     <>
//       {/* MOBILE - eget bilde*/}
//       <section className="sm:hidden bg-bottom object-bottom">
//         <img
//           src={imgTrePers}
//           alt=""
//           className="absolute object-bottom w-full h-auto "
//         />
//       </section>

//       {/* SM OG OPPOVER eget bilde */}
//       <section
//         className=" min-h-screen bg-fixed bg-cover bg-bottom"
//         style={{ backgroundImage: `url(${bg1})` }}
//       />

//       <div className="flex justify-center items-center px-4 pb-4 pt-4 md:pt-20 bg-[#EDCBBC] ">
//         {/* style={{ backgroundImage: `url(${bg1})` }} */}
//         <p className="text-[#483F52] text-center max-w-5xl text-2xl sm:text-4xl p-4 md:pb-20">
//           I Brytningstid møter vi 16 år gamle Billie, Angelo og Erik som står
//           midt i overgangen mellom barn og voksen. Filmen undersøker hvordan de
//           forstår seg selv gjennom de små øyeblikkene der livet skjer før man
//           helt klarer å sette ord på det. Brytningtid er et portrett av det å
//           være ung - en film om nærhet, vennskap og alt det som gjør
//           ungdomstiden både intens og tidløs.
//         </p>
//       </div>
//     </>
//   );
// }

{
  /* <section
  className="min-h-[100svh] flex flex-col bg-fixed bg-bottom bg-cover"
  style={{ backgroundImage: `url(${bg1})` }}
>

</section>; */
}
