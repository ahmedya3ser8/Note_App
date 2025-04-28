import { Outlet } from "react-router-dom";
import Header from "@components/common/header/Header";
import Footer from "@components/common/footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
