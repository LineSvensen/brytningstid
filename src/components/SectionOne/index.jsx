import bg1 from "../../assets/bgpink.webp";
import imgTrePers from "../../assets/photos.png";
import bgSky from "../../assets/bgbg.png";
import bgPapMob from "../../assets/pap-mob.png";
import stuff from "../../assets/stuff.png";
import chain from "../../assets/chain.png";
import sharpie from "../../assets/sharpie.png";
import blackHeart from "../../assets/blackheart.png";
import yellowHeart from "../../assets/yellowheart.png";
import spar from "../../assets/spar.png";

import imgTrePersTo from "../../assets/kopi-bg.webp";
import bgPapir from "../../assets/pap.webp";
import pinkLighter from "../../assets/lighterpink.webp";
import chips from "../../assets/chips.webp";

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
