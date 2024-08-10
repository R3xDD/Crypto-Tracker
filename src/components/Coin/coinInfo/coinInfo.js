import React, { useState } from "react";
import "./style.css";
import { MotionConfig, motion } from "framer-motion";
function Info({ title, desc, image }) {
  const shortDesc =
    desc?.slice(0, 300) +
    "<br/><p style='color:var(--grey);cursor:pointer; font-weight:bold; font-weight:bold;'>Read More...</p>";
  const longDesc =
    desc +
    "<br/><p style='color:var(--grey);cursor:pointer; font-weight:bold; ' >Read Less...</p>";

  const [toggle, setToggle] = useState(false);

  return (
    <MotionConfig>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center justify-between gap-8 flex-col md:flex-row  "
      >
          <div className=" block  w-3/4 bg-[#1B1B1B]  my-auto px-6 py-4 rounded-xl   leading-8   tracking-wider text-lg">
            <h1 className="text-4xl my-4 mx-0 font-semibold text-[#40afa0]">
              {title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  desc?.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
              }}
              className="info "
              onClick={() => setToggle(!toggle)}
            />
          </div>
          

        <div className="bg-[#1B1B1B]  my-auto px-6 py-4 rounded-xl    leading-8   tracking-wider text-lg">
            <img src={image} className="h-full w-full" alt="" />
          </div>
      </motion.div>
    </MotionConfig>
  );
}

export default Info;
