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
    },
    {
      category: "coffee",
      name: "A-10 Blend",
      price: "40 - 140ر.ق",
      image: image2,
    },
  ];

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animate images when `.image_section_parent` comes to the top 50% of the viewport

    gsap.to(".img2", {
      y: -50,
      x: 150, // Move image up by 50px
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
      x: -150, // Move image up by 30px
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
      x: -200, // Move image up by 30px
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
      x: 200, // Move image up by 30px
      opacity: 1,
      scrollTrigger: {
        trigger: ".image_section_parent",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        markers: false,
      },
    });
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
              <input type="search" />
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

                  <div class="tea_btn">
                    <span>
                      <img src={teapot} alt="" />
                    </span>
                    <span>Add To Cart</span>
                    <div class="animation">
                      <img src={kettle} alt="" className="kettle" />
                      <img src={cup} alt="" className="cup" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div class="image_section_parent parent">
        <h2>Gallery</h2>

        <div class="image_section_cont cont">
          <img src={gallery1} className="img1" alt="" />
          <img src={gallery2} className="img2" alt="" />
          <img src={gallery3} className="img3" alt="" />
          <img src={gallery4} className="img4" alt="" />
          <img src={gallery5} className="img5" alt="" />
          {/* <img src={image1} className="img6" alt=""/> */}
        </div>
      </div>

      <div class="video_section parent bg-img-cover"></div>

      <div class="qoute_section parent">
        <div class="qoute_section_cont cont">
          <div class="qoute">
            <h2>We are for</h2>
            <h2>unique</h2>
            <h2>aesthetics</h2>
          </div>

          <div class="para">
            <p>
              We are for the beautiful and the good, <br />
              to compose and to share.
              <br />
              We are for unique aesthetics.
            </p>
          </div>

          <div class="tea_btn">
            <span>
              <img src={teapot} alt="" />
            </span>
            <span>Know More</span>
            <div class="animation">
              <img src={kettle} alt="" className="kettle" />
              <img src={cup} alt="" className="cup" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
