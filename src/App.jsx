import { Routes, Route } from "react-router-dom";
import Home from "./pages/Hjem";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
