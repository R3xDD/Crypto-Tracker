import React from "react";
import LandingPage from "../components/LandingPage/MainComponent/LandingPage";
import Header from "../components/Common/Header/Header";
import { dividerClasses } from "@mui/material";

function Home() {
  return (
    <div>
      <Header />
    <div className="px-4 mx-auto cover md:min-h-[100vh] min-h-[145vh]">
      <LandingPage />
    </div>
    </div>
  );
}

export default Home