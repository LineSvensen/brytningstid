import dnfBilde from "../../assets/dnf-logo.svg";
import imgLogo1 from "../../assets/inn-logo.png";
import nfLogo from "../../assets/NFTFV_Logo_Positive_AW.svg";

export function SponsSec() {
  return (
    <div className="bg-olive-50 flex flex-col lg:flex-row items-center justify-evenly">
      <div className="flex flex-col items-center pt-16 pb-4 lg:py-20 ">
        <img src={nfLogo} className="h-full w-35 sm:w-45  "></img>
        <p className="text-base sm:text-xl pt-4 w-60 text-center">
          Nordic Talents Pitch Award <b>Winner 2026</b>
        </p>
      </div>
      <img src={dnfBilde} className="h-ull w-50 sm:w-70 pt-12 lg:pt-8 pb-4"></img>
      <img src={imgLogo1} className="h-full w-30 sm:w-45 pt-12 lg:pt-8 pb-12"></img>
    </div>
  );
}
