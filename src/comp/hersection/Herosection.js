import React from "react";
import "./Herosection.scss";
import { motion } from "motion/react";
const Herosection = () => {
  return (
    <>
      <div class="herosection_parent parent">
        <div class="herosection_cont cont">
          <div class="headings_list">
            <div className="hero_heading">
              <h2>Wings</h2>
            </div>
            <div className="hero_heading">
              <h2>Coffee</h2>
            </div>
            <div className="hero_heading">
              <h2>Roasters</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
