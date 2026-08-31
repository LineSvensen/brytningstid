import jhImg from "../../assets/jh-1.png";

export default function DirSec() {
  return (
    <section className="px-8  flex  max-w-4xl  ">
      <div className="flex flex-col  justify-center items-center text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="   ">
            <h2 className="pb-4 text-4xl pt-8 md:pt-0">Om regissøren </h2>
            <h3 className="pb-4 text-xl">Jakob Hardeberg</h3>
            <p className=" pr-8  ">
              Jakob Hardeberg (f.1998) er utdannet dokumentarregissør ved
              TV-skolen på Lillehammer i 2021. Han har siden den gang jobbet som
              dokumentarist og fotograf. Arbeidene hans kretser ofte rundt
              tilhørlighet, sårbarhet og forsoning - der det undersøkes hvordan
              mennesker formes av familie, oppvekst og fellesskap. Med et nært
              og personlig blikk søker han å fortelle historier som åpner for
              gjenkjennelse, refleksjon og større forståelse mellom mennesker.
            </p>
          </div>

          <img src={jhImg} className="w-60 md:w-90  "></img>
        </div>
      </div>
    </section>
  );
}
