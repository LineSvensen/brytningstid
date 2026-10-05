import { Link } from "react-router-dom";
import koderaImg from "../../assets/Kodera-logo-hvit.svg";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-black text-base text-white font-['Times_New_Roman']">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold uppercase text-sunset-yellow"
            >
              Brytningstid
            </Link>

            <p className="mt-4 max-w-xs leading-6 line-seed-jp-thin">
              En dokumentarfilm av Jakob Hardeberg
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="footer-headings">Navigasjon</h2>

            <nav className="mt-4 flex flex-col gap-3">
              <a href="#trailer" className=" footer-links-style">
                Se trailer
              </a>

              <a href="#regissor" className=" footer-links-style">
                Regissøren
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="footer-headings">Kontakt</h2>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:jakobsvensen700@gmail.com"
                className="footer-links-style"
              >
                jakobsvensen700@gmail.com
              </a>

              <a href="tel:+4746540448" className="footer-links-style">
                +47 465 40 448
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 line-seed-jp-thin text-center sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} Brytningstid. Alle rettigheter
              forbeholdt.
            </p>

            {/* Kodera credit */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span>Kodet med ❤︎ av kvinner i</span>

              <a
                href="https://kodera.no"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besøk Kodera"
                className="flex items-center"
              >
                <img
                  src={koderaImg}
                  alt="Kodera"
                  className="h-6 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
