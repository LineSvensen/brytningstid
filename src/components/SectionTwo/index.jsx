import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal";
import bg2 from "../../assets/bluebg.webp";
import desktopTrailer from "../../assets/trailer-brytningstid.webm";


import bgSky from "../../assets/bgbg.png";
import imgTrePersTo from "../../assets/kopi-bg.jpg";
import imgTrePers from "../../assets/photos.png";

import stuff from "../../assets/stuff.png";
import chain from "../../assets/chain.png";
import sharpie from "../../assets/sharpie.png";
import blackHeart from "../../assets/blackheart.png";
import yellowHeart from "../../assets/yellowheart.png";
import pinkLighter from "../../assets/lighterpink.png";
import chips from "../../assets/chips.png";
import spar from "../../assets/spar.png";

import trailerPoster from "../../assets/bryt-1.webp";



export default function SecTwo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <section
        className="
    relative 
    
    lg:min-h-[100dvh]
    bg-scroll
    lg:bg-fixed
    bg-bottom
    bg-cover
    flex
    items-center
    justify-center
  "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        

        

        <div className="relative z-10 w-full max-w-60 px-8 pt-30 pb-50 lg:hidden">
          <ScrollReveal
            enableBlur={true}
            blurStrength={5}
            containerClassName="mx-auto max-w-3xl"
            textClassName="mobile-text text-center"
          >
            I Brytningstid møter vi 16 år gamle Billie, Angelo og Erik som står
            midt i overgangen mellom barn og voksen. Filmen undersøker hvordan
            de forstår seg selv gjennom de små øyeblikkene der livet skjer før
            man helt klarer å sette ord på det. Brytningstid er et portrett av
            det å være ung - en film om nærhet, vennskap og alt det som gjør
            ungdomstiden både intens og tidløs.
          </ScrollReveal>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {/* <img
            src={spar}
            alt=""
            className="
             
            inset-0
            w-30
            h-30
            object-fill
            z-0
           
          "
          /> */}

          
        </div>
        {/* Fade til svart */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      

      <section
        id="trailer"
        className="relative flex items-center justify-center bg-black px-4 py-4"
      >
        

        {/* TABLET + DESKTOP */}
        <div className="mt-50 mb-40 sm:mb-0 sm:mt-0 w-full">
          <div
            className="
      relative
      mx-auto
      w-full
      aspect-video
      md:max-w-5xl
      lg:max-w-6xl
      overflow-hidden
       
      group
    "
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              preload="metadata"
              poster={trailerPoster}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={desktopTrailer} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                type="button"
                aria-label="Spill av trailer"
                onClick={() => videoRef.current?.play()}
                className="
          absolute
          inset-0
          z-10
          flex
          items-center
          justify-center
          cursor-pointer
          bg-black/10
          hover:bg-black/20
          transition-all
          duration-300
        "
              >
                <span
                  className="
            flex
            items-center
            justify-center
            w-20 h-20
            sm:w-24 sm:h-24
            rounded-full
            bg-egg/85
            text-black
            transition-transform
            duration-300
            group-hover:scale-110
          "
                >
                  <FaPlay className="text-3xl ml-1" />
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

