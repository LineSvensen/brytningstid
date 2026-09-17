import bg1 from "../../assets/bgpink.webp";
import bg1Mobile from "../../assets/ping.png";

export default function SecOne() {
  return (
    <>
      {/* MOBILE - eget bilde*/}
      <section
        className="min-h-screen flex flex-col bg-fixed bg-bottom bg-fill sm:hidden"
        style={{ backgroundImage: `url(${bg1Mobile})` }}
      />

      {/* SM OG OPPOVER eget bilde */}
      <section
        className="hidden sm:block min-h-screen bg-fixed bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bg1})` }}
      />

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

{
  /* <section
  className="min-h-[100svh] flex flex-col bg-fixed bg-bottom bg-cover"
  style={{ backgroundImage: `url(${bg1})` }}
>

</section>; */
}
