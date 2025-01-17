import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Herosection from "../../comp/hersection/Herosection";
import "./Home.scss";
import { Button, Dropdown } from "antd";
// about images
import image1 from "../../asstes/Wings-9-1-scaled.webp";
import image2 from "../../asstes/Wings-10-scaled.webp";
import image3 from "../../asstes/Wings-12-scaled.webp";
import { IoAppsOutline } from "react-icons/io5";
import teapot from "../../asstes/teapot.png";
import { IoSearchOutline } from "react-icons/io5";
import kettle from "../../asstes/kitchen.png";
import cup from "../../asstes/coffee-cup.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import gallery1 from "../../asstes/Wings-2-scaled.webp";
import gallery2 from "../../asstes/Wings-3-scaled.webp";
import gallery3 from "../../asstes/Wings-11-scaled.webp";
import gallery4 from "../../asstes/Wings-6-scaled.webp";
import gallery5 from "../../asstes/Wings-7-scaled.webp";
import { Link, useNavigate } from "react-router-dom";
import Button_comp from "../../comp/button_comp/Button_comp";
const Home = ({ setNavigatePage }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const product = [
    {
      category: "coffee",
      name: "A-10 Blend",
      price: "40 - 140ر.ق",
      image: image2,
    },
    {
      category: "coffee",
      name: "A-10 Blend",
      price: "40 - 140ر.ق",
      image: image2,
    },
    {
      category: "coffee",
      name: "A-10 Blend",
      price: "40 - 140ر.ق",
      image: image2,
    }
   
  ];

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);
  
    // Create a GSAP matchMedia context
    const mm = gsap.matchMedia();
  
    // Define animations for screens wider than 500px
    mm.add("(min-width: 501px)", () => {
      // Animate images when `.image_section_parent` comes to the viewport
      gsap.to(".img2", {
        y: -50,
        x: 150,
        opacity: 1,
        scrollTrigger: {
          trigger: ".image_section_parent",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });
  
      gsap.to(".img3", {
        y: -30,
        x: -150,
        opacity: 1,
        scrollTrigger: {
          trigger: ".image_section_parent",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });
  
      gsap.to(".img4", {
        y: -40,
        x: -200,
        opacity: 1,
        scrollTrigger: {
          trigger: ".image_section_parent",
          start: "top 80%",
          end: "top 10%",
          scrub: true,
          markers: false,
        },
      });
  
      gsap.to(".img5", {
        y: -50,
        x: 200,
        opacity: 1,
        scrollTrigger: {
          trigger: ".image_section_parent",
          start: "top 80%",
          end: "top 10%",
          scrub: true,
          markers: false,
        },
      });
    });
  
    // Cleanup function to clear GSAP matchMedia context
    return () => mm.revert();
  }, []);
  

  const navigate = useNavigate();

  // const gotoProduct = () => {
  //     navigate("/product");
  //   setNavigatePage(true);
  // };

  return (
    <>
      <Herosection />

      {/* First Image Section */}
      <div className="img-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container_div"
          viewport={{ once: true }}
        >
          <div className="image">
            <img src={image1} alt="Wings Coffee Roasters" />
          </div>
          <div className="content">
            <h2>WINGS COFFEE ROASTERS (WCR)</h2>
            <p>
              WINGS COFFEE ROASTERS (WCR) is a collection of dedicated
              professionals who share a passion for pushing their technical and
              creative boundaries outside of their everyday career titles and
              the love of coffee to deliver you any coffee you are looking for.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second Image Section */}
      <div className="img-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="container_div cont_div"
          viewport={{ once: true }}
        >
          <div className="image">
            <img src={image2} alt="Specialty Coffee" />
          </div>
          <div className="content">
            <h2>Speciality Coffee</h2>
            <p>
              Whether you are looking for coffee to drink at home or into
              speciality coffee and enjoy extracting coffee in different
              methods, or you have a cafe or restaurant and are looking for
              fresh roasted coffee in a customized way to differentiate your cup
              of coffee from competitors.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Third Image Section */}
      <div className="img-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="container_div"
          viewport={{ once: true }}
        >
          <div className="image">
            <img src={image1} alt="Best Coffee Sourcing" />
          </div>
          <div className="content">
            <h2>We source the best coffee for you</h2>
            <ul>
              <li>Brazil – Natural – Cupping Score 84+</li>
              <li>Rwanda – Fully Washed – Cupping Score 86+</li>
              <li>
                Panama – Natural, Maceration and Fully Washed – Cupping score
                88+ and 90+
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div class="product_list_parent parent">
        <div class="product_list_cont cont">
          <div class="top">
            <div class="left">
              <div class="icon">
                <IoAppsOutline />
              </div>
              <div class="dropdwon">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <Button>Default Sorting</Button>
                </Dropdown>
              </div>
            </div>
            <div class="right">
              <input type="search" placeholder='search'  />
              <span>
                <IoSearchOutline />
              </span>
            </div>
          </div>
          <div class="bottom">
            {product.map((item, index) => (
              <Link class="card" key={index} to="/product" >
                <div class="image">
                  <div
                    class="img  bg-img-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div class="content">
                  <p>{item.category}</p>

                  <h4>{item.name}</h4>

                  <h3 className="price">{item.price}</h3>

                  <Button_comp btn_path="/product" btn_text="Add To Cart"  />

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div class="image_section_parent parent">
        <h2>Gallery</h2>

        <div class="image_section_cont cont">
        <div class="img1 bg-img-cover " style={{backgroundImage:`url(${gallery1})`}} ></div>
          <div class="img2 bg-img-cover " style={{backgroundImage:`url(${gallery2})`}} ></div>
          <div class="img3 bg-img-cover " style={{backgroundImage:`url(${gallery3})`}} ></div>
          <div class="img4 bg-img-cover " style={{backgroundImage:`url(${gallery4})`}} ></div>
          <div class="img5 bg-img-cover " style={{backgroundImage:`url(${gallery5})`}} ></div>
          {/* <img src={image1} className="img6" alt=""/> */}
        </div>
      </div>

      <div class="video_section parent bg-img-cover"></div>

      <div class="qoute_section parent">
        <div class="qoute_section_cont cont">
          <div class="qoute">
            <h2>We are for unique</h2>
       
            <h2>aesthetics</h2>
          </div>

          <div class="para">
            <p>
              We are for the beautiful and the good, 
              to compose and to share.
              <br />
              We are for unique aesthetics.
            </p>
          </div>
          <Button_comp btn_path="/product" btn_text="Add To Cart"  />

        </div>
      </div>
    </>
  );
};

export default Home;
