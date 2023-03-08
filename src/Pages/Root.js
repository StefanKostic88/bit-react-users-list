import React from "react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
