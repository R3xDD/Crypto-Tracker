import React from "react";
import LandingPage from "../components/LandingPage/MainComponent/LandingPage";
import Header from "../components/Common/Header/Header";

function Home() {
  return (
    <div className="container">
      <Header />
      <LandingPage />
    </div>
  );
}

export default Home;