import { CiMail } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ContactSec() {
  return (
    <section className="my-8 sm:my-12 flex flex-col items-center justify-center py-2 sm:py-12 font-['Times_New_Roman']">
      <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold uppercase">
        Kontakt
      </h2>

      <p className="mb-8 text-center px-8 text-lg  ">
        Om du har spørsmål, er interessert i samarbeid eller ønsker å ta en
        uformell kaffe
      </p>

      {/* Email */}
      <CiMail className="text-3xl" aria-hidden="true" />

      <a
        href="mailto:jakobsvensen700@gmail.com"
        className="mt-6 inline-flex items-center gap-2 border border-black px-6 py-3 text-lg font-medium transition-colors hover:bg-black hover:text-white"
      >
        jakobsvensen700@gmail.com
        <HiOutlineArrowUpRight aria-hidden="true" />
      </a>

      {/* Phone */}
      <PiPhoneLight className="mt-8 text-3xl" aria-hidden="true" />

      <a
        href="tel:+4746540448"
        className="mt-4 inline-flex items-center  px-6 py-3 text-xl cursor-default"
      >
        +47 465 40 448
      </a>
    </section>
  );
}
