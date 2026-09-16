import bg1 from "../../assets/pinkbg.webp";

export default function SecOne() {
  return (
    <>
      <section
        className="min-h-[100dvh] flex flex-col bg-fixed bg-bottom bg-cover"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {/* <h1 className="text-white text-5xl font-bold">Overskrift 1</h1> */}
      </section>

      <div className="flex justify-center items-center px-4 pb-4 pt-4 md:pt-20 bg-[#EDCBBC] ">
        {/* style={{ backgroundImage: `url(${bg1})` }} */}
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
