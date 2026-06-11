//EKSEMPEL OPPSETT
//
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ScrollToTop from "./Components/ScrollToTop";
// import Layout from "./Layout";
// import Hjem from "./Pages/Hjem";
// import OmMeg from "./Pages/OmMeg";
// import Diktboker from "./Pages/Diktboker";
// import EnkeltProdukt from "./Pages/Diktboker/EnkeltProdukt";
// import Kontakt from "./Pages/Kontakt";
// import Gjestebok from "./Pages/Gjestebok";
// import Presse from "./Pages/Presse";
// import Handmade from "./Pages/Diktgaver";
// import NotFound from "./Pages/NotFound";
// import Personvern from "./Pages/Personvern";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
