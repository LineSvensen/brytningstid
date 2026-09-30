
import ScrollReveal from "../ScrollReveal";
import bg2 from "../../assets/bluebg.webp";
import desktopTrailer from "../../assets/test-hero.webm";
import mobileTrailer from "../../assets/mob-trailer.mp4";

import bgSky from "../../assets/bgbg.png";
import imgTrePersTo from "../../assets/kopi-bg.jpg";
import imgTrePers from "../../assets/photos.png";

import stuff from "../../assets/stuff.png";
import chain from "../../assets/chain.png";
import sharpie from "../../assets/sharpie.png";
import blackHeart from "../../assets/blackheart.png";
import yellowHeart from "../../assets/yellowheart.png";
import pinkLighter from "../../assets/lighterpink.png";
import chips from "../../assets/chips.png";
import spar from "../../assets/spar.png";

// import { motion } from "framer-motion";

export default function SecTwo() {
  return (
    <>
      <section
        className="
    relative
    min-h-[130dvh]
    lg:min-h-[100dvh]
    bg-scroll
    lg:bg-fixed
    bg-bottom
    bg-cover
    flex
    items-center
    justify-center
  "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* MOBILE + TABLET (UNDER LG) */}
        {/* <motion.section
          className="relative h-130 overflow-hidden bg-cover bg-bottom lg:hidden"
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
                    bottom-26
                    min-[370px]:bottom-22
                    min-[400px]:bottom-13
                    left-1/2
                    -translate-x-1/2
                    w-[120%]
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
        </motion.section> */}

        <div className="relative z-10 w-full px-8 lg:hidden">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={10}
            blurStrength={10}
            containerClassName="mx-auto max-w-3xl"
            textClassName="mobile-text text-center"
          >
            I Brytningstid møter vi 16 år gamle Billie, Angelo og Erik som står
            midt i overgangen mellom barn og voksen. Filmen undersøker hvordan
            de forstår seg selv gjennom de små øyeblikkene der livet skjer før
            man helt klarer å sette ord på det. Brytningstid er et portrett av
            det å være ung - en film om nærhet, vennskap og alt det som gjør
            ungdomstiden både intens og tidløs.
          </ScrollReveal>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {/* <img
            src={spar}
            alt=""
            className="
             
            inset-0
            w-30
            h-30
            object-fill
            z-0
           
          "
          /> */}

          {/* <img
            src={blackHeart}
            alt=""
            className="
             
            inset-0
            w-30
            h-30
            object-fill
            z-0
           
          "
          /> */}
          {/* <img
            src={pinkLighter}
            alt=""
            className="
             
            inset-0
            w-40
            h-40
            object-fill
            z-0
            
          "
          /> */}
          {/* <img
            src={chain}
            alt=""
            className="
             
            inset-0
            w-50
            h-50
            object-fill
            z-0
            
          "
          /> */}
          {/* <img
            src={sharpie}
            alt=""
            className="
             
            inset-0
            w-50
            h-50
            object-fill
            z-0
            sm:hidden
          "
          /> */}
          {/* <img
            src={chips}
            alt=""
            className="
             
            inset-0
            w-50
            h-50
            object-fill
            z-0
            
          "
          /> */}
        </div>

        {/* Fade til svart */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      <p className="text-white text-center">hey</p>

      <section
        id="trailer"
        className="relative flex items-center justify-center bg-black px-4 py-4"
      >
        {/* MOBILE */}
        <div className="mt-50 w-full sm:hidden">
          <video
            className="
        mx-auto
        aspect-[9/16]
        max-h-[80dvh]
        w-auto
        max-w-full
        rounded-sm
        object-cover
      "
            controls
            playsInline
          >
            <source src={mobileTrailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* TABLET + DESKTOP */}
        <div className="mt-20 hidden w-full sm:block">
          <video
            className="
        mx-auto
        aspect-video
        w-full
        max-w-4xl
        rounded-sm
        object-cover
      "
            controls
            playsInline
          >
            <source src={desktopTrailer} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}

// import bg2 from "../../assets/bluebg.webp";
// import sampleVideo from "../../assets/test-hero.webm";

// export default function SecTwo() {
//   return (
//     <>
//       <section
//         className="relative min-h-screen bg-fixed bg-bottom bg-cover flex items-center justify-center"
//         style={{ backgroundImage: `url(${bg2})` }}
//       >
//         <h2 className="text-white text-5xl font-bold"></h2>

//         {/* Fade fra blått til svart */}
//         <div
//           className="
//             absolute
//             bottom-0
//             left-0
//             w-full
//             h-96
//             bg-gradient-to-b
//             from-transparent
//             to-black
//             pointer-events-none
//           "
//         />
//       </section>

//       <section
//         id="trailer"
//         className="flex justify-center items-center px-4 pb-4 pt-4 bg-black"
//       >
//         <div className="flex justify-center items-center px-4 pb-4 pt-4 bg-black">
//           <div className="w-full overflow-hidden rounded-md shadow-lg bg-transparent">
//             <video
//               className="w-full mt-50 sm:mt-20 h-auto mx-auto aspect-video rounded-sm object-cover max-w-4xl"
//               controls
//               muted
//               loop
//             >
//               <source src={sampleVideo} type="video/webm" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
