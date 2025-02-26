import { Outlet } from "react-router";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";

export const Layout = () => {
  function resize() {
    setWindowSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", () => resize);
    };
  });
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  return (
    <>
      {windowSize < 640 ? <SideBar /> : <NavBar />}
      <Outlet />
    </>
  );
};
