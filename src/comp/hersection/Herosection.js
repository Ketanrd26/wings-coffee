import React from "react";
import "./Herosection.scss";
import { motion } from "motion/react";
import pouring_coofee from "../../asstes/puring_coffee.png";
import teapot from "../../asstes/teapot_white.webp";
import kettle from "../../asstes/kitchen_white.png";
import cup from "../../asstes/coffee-cup_white.png";
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
          <div class="tea_btn">
                  <span>
                    <img src={teapot} alt="" />
                  </span>
                  <span>Shop Now</span>
                  <div class="animation">
        <img src={kettle} alt="" className="kettle" />
        <img src={cup} alt="" className="cup" />
      </div>
                </div>
        </div>
        <div class="image">
          <img src={pouring_coofee} alt=""/>
        </div>
      </div>
    </>
  );
};

export default Herosection;
