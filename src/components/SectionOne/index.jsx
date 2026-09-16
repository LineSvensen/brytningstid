import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import bg1 from "../../assets/pinkbg.webp";

export default function SecOne() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: bildet beveger seg saktere enn siden
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden"
      >
        <motion.img
          src={bg1}
          alt=""
          style={{ y }}
          className="absolute -top-[15%] left-0 w-full h-[130%] object-cover object-bottom"
        />
      </section>

      <div className="flex justify-center items-center px-4 pb-4 pt-4 md:pt-20 bg-[#EDCBBC]">
        <p className="text-[#483F52] text-center max-w-5xl text-2xl sm:text-4xl p-4 md:pb-20">
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

{
  /* <section
  className="min-h-[100svh] flex flex-col bg-fixed bg-bottom bg-cover"
  style={{ backgroundImage: `url(${bg1})` }}
>

</section>; */
}
