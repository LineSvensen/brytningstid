import { CiMail } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import pen from "../../assets/sharpie.png";
import nokia from "../../assets/nokia.webp";
import letter from "../../assets/letter.webp";

export default function ContactSec() {
  return (
    <section className="my-8 sm:my-12 flex flex-col items-center justify-center py-2 lg:py-16 line-seed-jp-thin lg:pb-16">
      {/* <img src={pen} alt="pen-image" className="w-40 rotate-160 mb-4"></img> */}
      <h2 className="mb-8 text-center text-3xl sm:text-4xl font-bold uppercase  font-['Times_New_Roman']">
        Kontakt
      </h2>

      <p className="mb-12 mt-2 text-center px-8 text-lg lacquer-regular ">
        Om du har spørsmål, er interessert i samarbeid eller ønsker å ta en
        uformell kaffe:
      </p>

      {/* Email */}
      {/* <CiMail className="text-3xl" aria-hidden="true" /> */}
      <img
        src={letter}
        alt="letter-mail-image"
        className="w-16 sm:w-20  mb-4"
      ></img>

      <a
        href="mailto:jakobsvensen700@gmail.com"
        className="mt-6 inline-flex items-center gap-2 border      px-6 py-3 text-lg  transition-colors  hover:bg-sunset-yellow hover:text-space-blue "
      >
        jakobsvensen700@gmail.com
        <HiOutlineArrowUpRight aria-hidden="true" />
      </a>

      {/* Phone */}
      {/* <PiPhoneLight className="mt-8 text-3xl" aria-hidden="true" /> */}
      <img
        src={nokia}
        alt="nokia-phone-image"
        className="w-16 sm:w-20  pt-8 mt-4"
      ></img>

      <a
        href="tel:+4746540448"
        className="mt-1 inline-flex items-center  px-6 py-3 text-xl cursor-default "
      >
        +47 465 40 448
      </a>
    </section>
  );
}
