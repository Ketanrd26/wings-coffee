import React, { useEffect, useState } from "react";
import "./Contact_us.scss";
import teapot from "../../asstes/teapot.png";
import kettle from "../../asstes/kitchen.png";
import cup from "../../asstes/coffee-cup.png";
import clip_path from "../../asstes/contac_page_image.webp";
import clip_path2 from "../../asstes/contact_img.webp"
const Contactus = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <>
      <div class="contact_page parent">
        <div class="contact_page_cont cont">
          <div class="form">
            <h2>
              Start your day with <span>coffee</span>
            </h2>
            <form action="">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <textarea type="text" placeholder="your message" />
              <div class="tea_btn">
                <span>
                  <img src={teapot} alt="" />
                </span>
                <span>Contact Us</span>
                <div class="animation">
                  <img src={kettle} alt="" className="kettle" />
                  <img src={cup} alt="" className="cup" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="clip_path">
          <img src={windowWidth > 900 ? clip_path : clip_path2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contactus;
