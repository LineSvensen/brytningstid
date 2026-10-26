import HeaderNav from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <div className="">
      <ScrollToTop />
      <HeaderNav />
      <main className="">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
