import React from "react";
import TemporaryDrawer from "./Drawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className=" flex  justify-between items-center p-12 sticky top-0 z-[100]  "
      style={{ backgroundColor: "var(--black)" }}
    >
      <h1 className="text-lg md:text-2xl m-0 md:font-bold font-medium">
        R3xDCryptoTracker{" "}
        <span className="" style={{ color: "var(--blue)" }}>
          .
        </span>
      </h1>
      <div className=" links flex   justify-between items-center  gap-4  ">
        <Link to="/">
          <p className="text-lg cursor-pointer transition-all text-[#888] font-bold hover:text-[#fff] ">
            Home
          </p>
        </Link>
        <Link to="/compare">
          <p className="text-lg cursor-pointer     transition-all text-[#888] font-bold hover:text-[#fff] ">
            Compare
          </p>
        </Link>
        <Link to="/watchList">
          <p className="text-lg cursor-pointer  transition-all text-[#888] font-bold hover:text-[#fff] ">
            WatchList
          </p>
        </Link>
        <Link to="/Dashboard">
          <Button
            text={"Dashboard"}
            onCLick={() => console.log("btn clicked")}
            outlined={false}
          />
        </Link>
      </div>
      <div className="drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
