import bg2 from "../../assets/bluebg.webp";
import sampleVideo from "../../assets/test-hero.webm";
import stuff from "../../assets/stuff.png";
import chain from "../../assets/chain.png";
import sharpie from "../../assets/sharpie.png";
import blackHeart from "../../assets/blackheart.png";
import yellowHeart from "../../assets/yellowheart.png";
import pinkLighter from "../../assets/lighterpink.png";
import chips from "../../assets/chips.png";
import spar from "../../assets/spar.png";

export default function SecTwo() {
  return (
    <>
      <section
        className="
          relative
          min-h-[100dvh]
           bg-fixed
          bg-bottom
          bg-cover
          flex
          items-center
          justify-center
        "
        style={{ backgroundImage: `url(${bg2})` }}
      >
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

          {/* <img
            src={blackHeart}
            alt=""
            className="
             
            inset-0
            w-30
            h-30
            object-fill
            z-0
           
          "
          /> */}
          {/* <img
            src={pinkLighter}
            alt=""
            className="
             
            inset-0
            w-40
            h-40
            object-fill
            z-0
            
          "
          /> */}
          {/* <img
            src={chain}
            alt=""
            className="
             
            inset-0
            w-50
            h-50
            object-fill
            z-0
            
          "
          /> */}
          {/* <img
            src={sharpie}
            alt=""
            className="
             
            inset-0
            w-50
            h-50
            object-fill
            z-0
            sm:hidden
          "
          /> */}
          {/* <img
            src={chips}
            alt=""
            className="
             
            inset-0
            w-50
            h-50
            object-fill
            z-0
            
          "
          /> */}
          <img
            src={stuff}
            alt=""
            className="
             
            inset-0
            w-100
            h-100
            object-fill
            z-0
            
          "
          />
        </div>

        {/* Fade til svart */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      <section
        id="trailer"
        className="relative bg-black flex justify-center items-center px-4 pb-4 pt-4"
      >
        <div className="flex justify-center items-center px-4 pb-4 pt-4">
          <div className="w-full overflow-hidden rounded-md shadow-lg">
            <video
              className="w-full mt-50 sm:mt-20 h-auto mx-auto aspect-video rounded-sm object-cover max-w-4xl"
              controls
              muted
              loop
              playsInline
            >
              <source src={sampleVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

// import bg2 from "../../assets/bluebg.webp";
// import sampleVideo from "../../assets/test-hero.webm";

// export default function SecTwo() {
//   return (
//     <>
//       <section
//         className="relative min-h-screen bg-fixed bg-bottom bg-cover flex items-center justify-center"
//         style={{ backgroundImage: `url(${bg2})` }}
//       >
//         <h2 className="text-white text-5xl font-bold"></h2>

//         {/* Fade fra blått til svart */}
//         <div
//           className="
//             absolute
//             bottom-0
//             left-0
//             w-full
//             h-96
//             bg-gradient-to-b
//             from-transparent
//             to-black
//             pointer-events-none
//           "
//         />
//       </section>

//       <section
//         id="trailer"
//         className="flex justify-center items-center px-4 pb-4 pt-4 bg-black"
//       >
//         <div className="flex justify-center items-center px-4 pb-4 pt-4 bg-black">
//           <div className="w-full overflow-hidden rounded-md shadow-lg bg-transparent">
//             <video
//               className="w-full mt-50 sm:mt-20 h-auto mx-auto aspect-video rounded-sm object-cover max-w-4xl"
//               controls
//               muted
//               loop
//             >
//               <source src={sampleVideo} type="video/webm" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
