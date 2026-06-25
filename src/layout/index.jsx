import HeaderNav from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  console.log("Layout rendered");

  return (
    <div className="">
      <HeaderNav />
      <main className="">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
