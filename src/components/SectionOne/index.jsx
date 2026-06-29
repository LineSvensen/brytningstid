import bg1 from "../../assets/pinkbg.webp";
import sampleVideo from "../../assets/test-hero.webm";

export default function SecOne() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col bg-fixed bg-center bg-cover   items-center justify-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <h1 className="text-white text-5xl font-bold">Overskrift 1</h1>
      </section>

      <div className="flex justify-center items-center p-6 bg-black min-h-screen">
        <div className="w-full   overflow-hidden rounded-md shadow-lg bg-black">
          {/* 2. Bind the imported variable to the src attribute */}
          <video
            className="w-full h-auto aspect-video object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
