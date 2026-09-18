import { motion } from "framer-motion";

import bg1 from "../../assets/bgpink.webp";
import imgTrePers from "../../assets/trepers.png";
import bgSky from "../../assets/bgbg.png";

export default function SecOne() {
  return (
    <>
      {/* MOBILE */}
      <motion.section
        className="sm:hidden relative h-60 bg-cover bg-bottom overflow-hidden"
        style={{ backgroundImage: `url(${bgSky})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.6,
        }}
      >
        <motion.div
          className="absolute inset-0 z-10"
          variants={{
            hidden: {
              opacity: 0,
              filter: "blur(10px)",
              WebkitFilter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              WebkitFilter: "blur(0px)",
            },
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src={imgTrePers}
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto"
            variants={{
              hidden: {
                y: 100,
                scale: 1.08,
              },
              visible: {
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </motion.section>

      {/* <motion.img
          src={imgTrePers}
          alt=""
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-auto
            z-10
          "
          initial={{ y: 250 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "0px 0px -100px 0px",
          }}
        /> */}

      {/* SM OG OPPOVER */}
      <section
        className="hidden sm:block min-h-screen bg-fixed bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bg1})` }}
      />

      {/* TEKSTBOKS */}
      <div className="relative z-20 flex justify-center items-center px-4 pb-4 pt-4 md:pt-20 bg-[#EDCBBC]">
        <p className="text-[#483F52] text-center max-w-5xl text-base sm:text-lg p-4 md:pb-20">
          I Brytningstid møter vi 16 år gamle Billie, Angelo og Erik som står
          midt i overgangen mellom barn og voksen. Filmen undersøker hvordan de
          forstår seg selv gjennom de små øyeblikkene der livet skjer før man
          helt klarer å sette ord på det. Brytningtid er et portrett av det å
          være ung - en film om nærhet, vennskap og alt det som gjør
          ungdomstiden både intens og tidløs.
        </p>
      </div>
    </>
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
