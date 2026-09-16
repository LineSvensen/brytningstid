import { useEffect, useRef, useState } from "react";

import bg2 from "../../assets/bluebg.webp";
import sampleVideo from "../../assets/test-hero.webm";

export default function SecTwo() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      // Bildet beveger seg saktere enn scrollingen
      setOffset(rect.top * -0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center"
      >
        {/* PARALLAX-BILDET */}
        <div
          className="absolute -inset-y-24 left-0 right-0 bg-cover bg-bottom will-change-transform"
          style={{
            backgroundImage: `url(${bg2})`,
            transform: `translateY(${offset}px)`,
          }}
        />

        {/* Eventuelt innhold */}
        <div className="relative z-10">
          <h2 className="text-white text-5xl font-bold"></h2>
        </div>

        {/* Fade til svart */}
        <div className="absolute bottom-0 left-0 z-20 w-full h-96 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      {/* TRAILER */}
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
