import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { NavSection } from "../components/NavSection";

export function DefaultLayout() {
  return (
    <div className="w-full h-screen bg-white flex items-center flex-col">
      <Header/>
      <NavSection />
      <Outlet />
    </div>
  )
}