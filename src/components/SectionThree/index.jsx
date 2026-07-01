import bg3 from "../../assets/bg-03.webp";

export default function SecThree() {
  return (
    <>
      <section
        className="min-h-screen  bg-fixed bg-bottom bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <h1 className="text-white  text-5xl font-bold">Overskrift 3</h1>
      </section>

      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="max-w-2xl text-xl">Innhold 3</p>
      </section>
    </>
  );
}
