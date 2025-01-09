import React, { useEffect } from "react";
import "./Herosection.scss";
import { motion } from "motion/react";
import pouring_coofee from "../../asstes/puring_coffee.png";
import teapot from "../../asstes/teapot_white.webp";
import kettle from "../../asstes/kitchen_white.png";
import cup from "../../asstes/coffee-cup_white.png";

import pour_top from "../../asstes/puring_coffee_top.png";
import pour_bottom from "../../asstes/puring_coffee_bottom.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Herosection = () => {

  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      <div class="herosection_parent parent">
       <div class="overlay bg-img-cover">
     
       </div>
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            consectetur sed voluptatibus neque nobis rerum amet obcaecati.
            Eveniet, ipsum perspiciatis.
          </p>
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
          {/* <img src={pouring_coofee} alt="" /> */}
          <img src={pour_top} alt=""   className="img1" />
          <img src={pour_bottom} alt=""  className="img2" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
