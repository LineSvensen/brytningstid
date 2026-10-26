import dnfBilde from "../../assets/dnf-logo.svg";
import imgLogo1 from "../../assets/inn-logo.png";
import nfLogo from "../../assets/NFTFV_Logo_Positive_AW.svg";

import { GiLaurelsTrophy } from "react-icons/gi";

import { GiRibbonMedal } from "react-icons/gi";
{
  /* <GiRibbonMedal /> */
}

export function SponsSec() {
  return (
    <div className="bg-[#fbf9f5] flex flex-col lg:flex-row items-center justify-evenly">
      <div className="flex flex-col items-center pt-16 pb-4 lg:py-20 ">
        <img src={nfLogo} className="h-full w-35 sm:w-45  "></img>
        <p className="text-base flex flex-col items-center justify-center sm:text-base pt-2 sm:pt-6 w-60 text-center">
          Nordic Talents Pitch Award{" "}
          <b className="flex  pl-4 text-lg sm:text-2xl  justify-center">
            Winner 2026 <GiRibbonMedal className="text-4xl sm:text-6xl" />
          </b>
        </p>
      </div>
      <img
        src={dnfBilde}
        className="h-ull w-50 sm:w-70 pt-12 lg:pt-8 pb-4"
      ></img>
      <img src={imgLogo1} className="h-full w-30 sm:w-45 pt-12   pb-12"></img>
    </div>
  );
}
