import React from "react";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion, MotionConfig } from "framer-motion";
import Button from "../../Common/Button/Button";
import { RWebShare } from "react-web-share";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
const LandingPage = () => {
  const notify = () => toast("App Shared !");

  return (
    <div className="main-flex flex justify-between items-start px-4 py-12 ">
      <div>
        <MotionConfig>
          <motion.h1
            className=" md:text-9xl text-7xl font-extrabold my-5  hover:text-[#111] transition-all stroke"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Track Crypto
          </motion.h1>
        </MotionConfig>
        <MotionConfig>
          <motion.h1
            style={{ color: "var(--blue)" }}
            className="md:text-8xl text-6xl font-extrabold mb-8 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            Real Time
          </motion.h1>
        </MotionConfig>
        <MotionConfig>
          <motion.p
            style={{ color: "var(--grey)" }}
            className="info-text font-semibold  tracking-widest my-2 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Track crypto through a public api in real time. Visit the dashboard
            to do so!{" "}
          </motion.p>
        </MotionConfig>
        <MotionConfig>
          <motion.div
            className="btn-flex flex gap-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.75 }}
          >
            <Link to="/Dashboard">
              <Button text={"Dashboard"} />
            </Link>
            <RWebShare
              data={{
                text: "CryptoDashboard made by Avi Vashishta using React JS.",
                url: "https://crypto-dashboard-jan.netlify.app",
                title: "CryptoTracker.",
              }}
              onClick={notify()}
            >
              <button className="text-white outlined-btn transition-all cursor-pointer text-xl font-semibold rounded-3xl px-4 py-2 bg-[#111] border-solid border-2 border-[#40afa0]  min-w-36 text-center">
                Share
              </button>
              {/* <ToastContainer /> */}
            </RWebShare>
          </motion.div>
        </MotionConfig>
      </div>
      <div className="gradient-div relative w-1/2 ml-auto">
        <img
          src={gradient}
          className="gradient absolute right-[100px] top-0 w-[300px]"
        />
        <motion.img
          src={iphone}
          className="iphone absolute right-[120px] -top-10 w-[400px]"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
