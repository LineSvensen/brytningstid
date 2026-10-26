import jakobImg from "../../assets/jakob-hardeberg-2026.png";
import jakobImgPris from "../../assets/jakob-hardeberg-award.jpg";
import jakobImgPris2 from "../../assets/jakob-hardeberg-award-2.jpg";
import jakobImgPris3 from "../../assets/jakob-hardeberg-award-3.jpg";

export default function About() {
  return (
    <main className="min-h-screen bg-space-blue text-egg">
      {/* =========================================
          SECTION ONE – ABOUT JAKOB
      ========================================= */}

      <section
        className="
    min-h-screen
    flex flex-col
    lg:flex-row
    items-center
    lg:items-end
    justify-center
    gap-12
    lg:gap-20
    px-6
    sm:px-12
    lg:px-20
    pt-32
    pb-0
  "
      >
        {/* IMAGE */}
        <div className="w-3/4 max-w-lg lg:w-1/2 self-center lg:self-end">
          <img
            src={jakobImg}
            alt="Jakob Hardeberg"
            className="
      
      w-full
      h-auto
      object-contain
    hidden sm:block"
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
          <p className="text-egg uppercase line-seed-jp-thin text-base">
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

          <p className="text-base sm:text-lg leading-relaxed line-seed-jp-thin ">
            Jakob Hardeberg (f. 1998) er utdannet dokumentarregissør fra Den
            norske filmskolen, med tidligere utdanning fra TV-skolen på
            Lillehammer i 2021.
          </p>

          <p className="text-base sm:text-lg leading-relaxed line-seed-jp-thin pb-4 sm:pb-20">
            Gjennom sitt filmskapende arbeid utforsker han temaer som
            tilhørighet, sårbarhet og forsoning. Med en personlig og nær
            tilnærming ønsker han å fortelle historier som skaper rom for
            refleksjon og forståelse.
          </p>
          <img
            src={jakobImg}
            alt="Jakob Hardeberg"
            className="
      
      w-full pl-8 pr-8 sm:p-0
      h-auto
      object-contain
    block sm:hidden"
          />
        </div>
      </section>

      {/* =========================================
          SECTION TWO – NORDIC TALENTS AWARD
      ========================================= */}

      <section
        className="
          relative
          bg-egg
          text-space-blue
          overflow-hidden
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            sm:px-12
            lg:px-20
            flex
            flex-col
            lg:flex-row
            items-start
            gap-12
            lg:gap-16
          "
        >
          {/* =====================================
              AWARD TEXT
          ===================================== */}

          <div
            className="
              w-full min-w-0 lg:flex-1 flex flex-col items-start gap-6"
          >
            {/* HEADING */}
            <h2
              className="
                font-['Times_New_Roman']
                font-bold
                uppercase
                text-4xl
                sm:text-5xl
                leading-tight
              "
            >
              Brytningstid vinner Nordic Talents Pitch Prize 2026
            </h2>

            {/* ARTICLE SOURCE */}
            <p className="text-black/50 text-sm italic break-words">
              Utdrag fra:{" "}
              <a
                href="https://www.inn.no/filmskolen/nytt-fra-filmskolen/arets-nordic-talents-priser-gikk-til-filmskolen/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-space-blue transition-colors"
              >
                Den norske filmskolen / Universitetet i Innlandet
              </a>
            </p>

            {/* DECORATIVE LINE */}
            <div className="w-1/4 h-[3px] mb-4 bg-black/25" />

            {/* ARTICLE CONTENT */}
            <div className="w-full flex flex-col gap-6">
              <p
                className="
                  text-base
                  leading-relaxed
                  line-seed-jp-regular
                "
              >
                Dokumentarfilmen <b>Brytningstid</b>, regissert av Jakob
                Hardeberg, har vunnet den prestisjetunge{" "}
                <b>Nordic Talents Pitch Prize 2026</b> under årets Nordic
                Talents i København.
              </p>

              <p className="text-base leading-relaxed line-seed-jp-regular">
                Prisen, som deles ut til lovende filmskapere fra Norden, er en
                viktig anerkjennelse av prosjektets potensial. Med utmerkelsen
                følger 250 000 kroner i utviklingsstøtte, som skal bidra til å
                realisere filmen og løfte historien videre.
              </p>

              <p className="text-base leading-relaxed line-seed-jp-regular">
                Brytningstid utforsker vennskap, identitet, tilhørighet og den
                sårbare overgangen fra ungdom til voksenlivet. Gjennom en nær og
                personlig fortellerstil ønsker filmen å skildre menneskelige
                relasjoner, forandring og utfordringene som oppstår når livet
                tar nye retninger.
              </p>

              <p className="text-base leading-relaxed line-seed-jp-regular">
                Juryen fremhevet prosjektets autentiske karakterer, sterke
                fortellerstemme og særegne perspektiv. Prisen markerer en viktig
                milepæl for Brytningstid og gir prosjektet et verdifullt løft på
                veien mot ferdig film. Vi gleder oss til fortsettelsen!
              </p>
            </div>

            {/* =====================================
                JURY QUOTE
            ===================================== */}

            <blockquote
              className="
                relative
                w-full
                mt-8
                pt-10
                pl-4
                sm:pl-6
                border-l-2
                border-space-blue/20
              "
            >
              {/* QUOTATION MARK */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -top-5
                  left-2
                  text-8xl
                  font-['Times_New_Roman']
                  text-black/20
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

              <p
                className="
                  mt-6
                  text-sm
                  uppercase
                  tracking-widest
                  line-seed-jp-regular
                "
              >
                — The Jury
              </p>
            </blockquote>
          </div>
          {/* =====================================
              AWARD IMAGE GALLERY
          ===================================== */}

          {/* AWARD IMAGE GALLERY */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* IMAGE 1 */}
            <figure>
              <img
                src={jakobImgPris}
                alt="Jakob Hardeberg under Nordic Talents 2026"
                className="w-full h-auto object-cover rounded-sm shadow-xl"
              />
              <figcaption className="text-xs text-black/50 pt-2">
                Foto: Malthe Ivarsson / Nordisk Film og TV fond
              </figcaption>
            </figure>

            {/* IMAGE 2 */}
            <figure>
              <img
                src={jakobImgPris2}
                alt="Nordic Talents 2026"
                className="w-full h-auto object-cover rounded-sm shadow-xl"
              />
              <figcaption className="text-xs text-black/50 pt-2">
                Foto: Malthe Ivarsson / Nordisk Film og TV fond
              </figcaption>
            </figure>

            {/* IMAGE 3 */}
            <figure>
              <img
                src={jakobImgPris3}
                alt="Nordic Talents 2026"
                className="w-full h-auto object-cover rounded-sm shadow-xl"
              />
              <figcaption className="text-xs text-black/50 pt-2">
                Foto: Malthe Ivarsson / Nordisk Film og TV fond
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
