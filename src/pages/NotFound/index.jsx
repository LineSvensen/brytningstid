import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-space-blue text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="line-seed-jp-regular text-5xl lg::text-6xl mb-6">
        Her slutter sporet (?) 
      </h1>

      <p className="text-base sm:text-xl max-w-md mb-10 opacity-80 line-seed-jp-regular">
        Siden du leter etter finnes ikke, eller har blitt flyttet :-O
      </p>

      <Link
        to="/"
        className="
          border border-white lacquer-regular
          px-8 py-3
          text-sm sm:text-base
          tracking-widest  
          transition-all duration-300
          hover:bg-white hover:text-space-blue
        "
      >
        Tilbake til forsiden
      </Link>
    </main>
  );
}
