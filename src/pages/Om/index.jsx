import { Link } from "react-router-dom";
import jakobImg from "../../assets/jh-1.png";
import jakobImgPris from "../../assets/jakob-hardeberg-award.jpg";

export default function About() {
  return (
    <main className="min-h-screen bg-space-blue text-egg">
      <section
        className="
          min-h-screen
          flex flex-col
          lg:flex-row
          items-center
          justify-center
          gap-12
          lg:gap-20
          px-6
          sm:px-12
          lg:px-20
          py-32
        "
      >
        {/* IMAGE */}
        <div className="w-full max-w-md lg:w-1/2">
          <img
            src={jakobImg}
            alt="Jakob Hardeberg"
            className="
              w-full
              aspect-[3/4]
              object-cover
              rounded-sm bg-egg
            "
          />
        </div>

        {/* TEXT */}
        <div
          className="
            w-full
            max-w-xl
            lg:w-1/2
            flex flex-col
            items-start
            gap-6
          "
        >
          <p className="text-egg uppercase  line-seed-jp-thin  text-base">
            Regissør / Dokumentarfilm
          </p>

          <h1
            className="
              text-sunset-yellow
              text-5xl
              sm:text-6xl
              
              font-bold
              font-['Times_New_Roman']
              leading-tight
              uppercase
            "
          >
            Jakob Hardeberg
          </h1>

          <div className="w-16 h-[2px] bg-sunset-yellow" />

          <p className="text-base sm:text-lg leading-relaxed line-seed-jp-thin">
            Jakob Hardeberg (f. 1998) er utdannet dokumentarregissør fra Den
            norske filmskolen, med tidligere utdanning fra TV-skolen på
            Lillehammer i 2021.
          </p>

          <p className="text-base sm:text-lg leading-relaxed line-seed-jp-thin">
            Gjennom sitt filmskapende arbeid utforsker han temaer som
            tilhørighet, sårbarhet og forsoning. Med en personlig og nær
            tilnærming ønsker han å fortelle historier som skaper rom for
            refleksjon og forståelse.
          </p>
        </div>
      </section>
      {/* SECTION TWO – AWARD */}
      <section className="relative bg-egg text-space-blue overflow-hidden py-20 sm:py-28 lg:py-36">
        <div
          className="
      mx-auto
      max-w-7xl
      px-6 sm:px-12 lg:px-20
      flex flex-col lg:flex-row
      items-center
      gap-12 lg:gap-20
    "
        >
          {/* AWARD IMAGE */}
          <div className="w-full max-w-sm lg:w-2/5 shrink-0">
            <div className="relative">
              <img
                src={jakobImgPris}
                alt="Jakob Hardeberg under Nordic Talents 2026"
                className="
            w-full
            aspect-[4/5]
            object-cover
            rounded-sm
            shadow-xl
          "
              />

              {/* Small decorative label */}
              <div
                className="
            absolute
            -bottom-5
            -right-3
            sm:-right-6
            bg-sunset-yellow
            text-space-blue
            px-5 py-3
            rotate-[-4deg]
            shadow-md
          "
              >
                <span className="font-['Times_New_Roman'] font-bold text-xl sm:text-2xl">
                  WINNER 2026
                </span>
              </div>
            </div>
          </div>

          {/* AWARD TEXT */}
          <div className="w-full lg:w-3/5 flex flex-col items-start gap-6 pt-6 lg:pt-0">
            <p className="uppercase text-sm sm:text-base tracking-[3px] line-seed-jp-regular">
              Nordic Talents / 2026
            </p>

            <h2
              className="
          font-['Times_New_Roman']
          font-bold
          uppercase
          leading-[0.95]
          text-4xl
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
            >
              Nordic Talents
              <span className="block text-sky-blue">Pitch Award</span>
            </h2>

            <div className="w-20 h-[3px] bg-sunset-yellow" />

            {/* JURY QUOTE */}
            <blockquote className="relative max-w-2xl pt-5">
              <span
                aria-hidden="true"
                className="
            absolute
            -top-8
            -left-2
            text-8xl
            font-['Times_New_Roman']
            text-sky-blue/25
            leading-none
          "
              >
                “
              </span>

              <p
                className="
            relative
            z-10
            text-base
            sm:text-lg
            lg:text-xl
            leading-relaxed
            italic
            line-seed-jp-regular
          "
              >
                The winner is a beautifully intimate film about friendship. The
                film is surprising, physical, funny, and wonderfully accidental.
                There is nothing self-conscious, but everything authentic. We
                love the narrowness of its focus. As a feature we believe it can
                develop further, while keeping that focus and purity. We want it
                to grow, not to change. You can’t make up these characters, and
                you didn’t.
              </p>

              <footer className="mt-6 text-sm sm:text-base uppercase tracking-widest font-bold">
                — The Jury
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
