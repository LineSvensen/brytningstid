import bg2 from "../../assets/bluebg.webp";
import sampleVideo from "../../assets/test-hero.webm";

export default function SecTwo() {
  return (
    <>
      <section
        className="min-h-screen bg-fixed bg-bottom bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <h2 className="text-white text-5xl font-bold"></h2>
      </section>

      <section
        id="trailer"
        className="flex justify-center items-center px-4 pb-4 pt-4   bg-black"
      >
        <div className="flex justify-center items-center px-4 pb-4 pt-4    bg-black   ">
          <div className="w-full   overflow-hidden rounded-md shadow-lg bg-transparent ">
            {/* 2. Bind the imported variable to the src attribute */}
            <video
              className="w-full mt-50 sm:mt-20 h-auto mx-auto aspect-video rounded-sm object-cover max-w-4xl"
              controls
              muted
              loop
            >
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
