import { Link } from "react-router-dom";

export default function Personvern() {
  return (
    <main className="min-h-screen bg-space-blue text-egg px-6 sm:px-12 lg:px-20 py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-['Times_New_Roman'] uppercase text-3xl sm:text-4xl font-bold mt-12 sm:mt-20 mb-6">
          Personvern
        </h1>

        <p className="text-egg/60 text-sm mb-12">
          Sist oppdatert: 29. oktober 2026
        </p>

        <div className="space-y-10 line-seed-jp-thin text-sm sm:text-base leading-8">
          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Om nettsiden
            </h2>
            <p>
              Brytningstid er en nettside som presenterer dokumentarfilmen av
              regissør Jakob Hardeberg. Vi ønsker å ivareta personvernet ditt og
              være åpne om hvordan personopplysninger behandles når du besøker
              nettsiden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Behandlingsansvarlig
            </h2>
            <p>
              [Navn på behandlingsansvarlig] er ansvarlig for behandling av
              personopplysninger knyttet til nettsiden.
            </p>
            <p className="mt-3">Kontakt: [E-postadresse]</p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Hvilke opplysninger behandles?
            </h2>
            <p>
              Nettsiden krever ingen registrering og har ikke kontaktskjema.
            </p>
            <p className="mt-3">
              Ved besøk kan tekniske opplysninger, som IP-adresse, nettlesertype
              og informasjon om forespørsler til nettsiden, behandles av vår
              hostingleverandør for å levere nettsiden og ivareta sikkerhet og
              stabil drift.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Hosting og eksterne tjenester
            </h2>
            <p>
              Nettsiden er hostet hos Vercel, som behandler tekniske
              opplysninger i forbindelse med levering og drift av nettsiden.
            </p>
            <p className="mt-3">
              Enkelte skrifttyper lastes fra Google Fonts. Når disse lastes inn,
              opprettes en forbindelse til Googles servere, og tekniske
              opplysninger som IP-adressen kan overføres.
            </p>
            <p className="mt-3">
              Behandling hos eksterne leverandører kan innebære overføring av
              opplysninger utenfor EØS. Slik behandling skal være omfattet av et
              gyldig overføringsgrunnlag.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Informasjonskapsler og analyse
            </h2>
            <p>
              Brytningstid bruker ikke Google Analytics, Vercel Web Analytics
              eller tilsvarende besøksanalyse.
            </p>
            <p className="mt-3">
              Nettsiden er ikke konfigurert med informasjonskapsler for
              annonsering eller markedsføringssporing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Kontakt via e-post
            </h2>
            <p>
              Dersom du kontakter oss via e-post, behandler vi opplysningene du
              selv sender, for eksempel navn, e-postadresse og innholdet i
              meldingen.
            </p>
            <p className="mt-3">
              Opplysningene brukes til å besvare og følge opp henvendelsen, og
              oppbevares ikke lenger enn nødvendig for dette formålet, med
              mindre loven krever lengre lagring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Rettslig grunnlag og lagring
            </h2>
            <p>
              Behandling av tekniske opplysninger for sikker og stabil drift,
              samt behandling av vanlige henvendelser, bygger normalt på
              berettiget interesse etter personvernforordningen artikkel 6 nr. 1
              bokstav f.
            </p>
            <p className="mt-3">
              Lagringstiden avhenger av formålet, leverandørenes rutiner og
              eventuelle lovpålagte krav. Opplysninger skal ikke oppbevares
              lenger enn nødvendig.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Dine rettigheter
            </h2>
            <p>
              Du kan etter personvernregelverket blant annet ha rett til innsyn,
              retting, sletting, begrensning av behandling og til å protestere
              mot behandling av dine personopplysninger.
            </p>
            <p className="mt-3">
              Du kan kontakte behandlingsansvarlig dersom du har spørsmål eller
              ønsker å bruke dine rettigheter. Du har også rett til å klage til
              Datatilsynet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-['Times_New_Roman'] uppercase font-bold text-sunset-yellow mb-3">
              Endringer
            </h2>
            <p>
              Personvernerklæringen kan oppdateres dersom nettsidens
              funksjonalitet eller behandling av personopplysninger endres.
            </p>
          </section>
          <Link to="/" className="nav-links-style">
            ← Tilbake til forsiden
          </Link>
        </div>
      </div>
    </main>
  );
}
