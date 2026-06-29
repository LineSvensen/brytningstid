import bg2 from "../../assets/bluebg.webp";

export default function SecTwo() {
  return (
    <>
      <section
        className="min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <h1 className="text-white text-5xl font-bold">Overskrift 2</h1>
      </section>

      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="max-w-2xl text-xl">Innhold 2.</p>
      </section>
    </>
  );
}
