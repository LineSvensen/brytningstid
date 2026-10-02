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

// import { motion } from "framer-motion";

export default function SecOne() {
  return (
    <div className="relative">
      {/* DESKTOP (LG OG OPPOVER) */}
      <section
        className="hidden min-h-screen bg-fixed bg-cover bg-bottom lg:block"
        style={{ backgroundImage: `url(${imgTrePersTo})` }}
      />

      {/* FLYTENDE PAPIR */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          z-30
          flex
          -translate-x-1/2
          translate-y-1/2
          items-center
          justify-center

          w-[99%]
          h-[300px]

          sm:w-[95%]
          sm:h-[350px]

          md:w-[90%]
          md:h-[400px]

          lg:w-[98%]
          lg:h-100

          max-w-full
        "
      >
        {/* PAPIR - MOBILE + TABLET ---------------------------------------*/}
        {/* <img
          src={bgPapMob}
          alt=""
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            
            object-fill
            lg:hidden
          "
        /> */}

        {/* PAPIR - DESKTOP */}
        <img
          src={bgPapir}
          alt=""
          className="
            absolute
            inset-0
            z-0
            hidden
            h-full
            w-full
            object-fill
            lg:block
          "
        />

        {/* LIGHTER - DESKTOP */}
        <img
          src={pinkLighter}
          alt=""
          className="
            z-0
            hidden
            h-80
            w-80
            lg:h-60
            lg:w-60
            xl:h-80
            xl:w-80
            shrink-0
            object-fill
            lg:block
          "
        />

        {/* TEKST  - Mobilversjon ligger i SectionTwo */}
        <p
          className="
            relative
            z-10
            text-paper
            text-center
           

            px-8
            text-base
            leading-6

            hidden

            lg:block

            sm:px-16
            sm:text-lg
            sm:leading-7

            md:px-20
            md:text-xl
            md:leading-normal

            lg:px-0
            lg:text-lg

            xl:px-0
          "
        >
          I Brytningstid møter vi 16 år gamle Billie, Angelo og Erik som står
          midt i overgangen mellom barn og voksen. Filmen undersøker hvordan de
          forstår seg selv gjennom de små øyeblikkene der livet skjer før man
          helt klarer å sette ord på det. Brytningtid er et portrett av det å
          være ung - en film om nærhet, vennskap og alt det som gjør
          ungdomstiden både intens og tidløs.
        </p>

        {/* CHIPS - DESKTOP */}
        <img
          src={chips}
          alt=""
          className="
            z-0
            hidden
            h-90
            w-90
            
            lg:h-60
            lg:w-60
            xl:h-90
            xl:w-90
            shrink-0
            rotate-90
            object-fill
            lg:block
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
