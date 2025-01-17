import React, { useRef } from "react";
import "./Product.scss";
import productImage from "../../asstes/Wings-10-scaled.webp";
import { Button, Dropdown } from "antd";
import kettle from "../../asstes/kitchen.png";
import cup from "../../asstes/coffee-cup.png";
import teapot from "../../asstes/teapot.png";
import gsap from "gsap";
const Product = () => {
  const zoomBoxRef = useRef(null);

  const handleMouseMove = (e) => {
    const image = e.currentTarget.querySelector("img");
    const zoomBox = zoomBoxRef.current;

    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const zoomLevel = 2; // Adjust the zoom level here
    zoomBox.style.backgroundImage = `url(${image.src})`;
    zoomBox.style.backgroundSize = `${rect.width * zoomLevel}px ${
      rect.height * zoomLevel
    }px`;
    zoomBox.style.backgroundPosition = `-${x * zoomLevel}px -${
      y * zoomLevel
    }px`;

    zoomBox.style.left = `${e.pageX + 20}px`; // Offset for better visibility
    zoomBox.style.top = `${e.pageY + 20}px`;
    zoomBox.style.display = "block";
  };

  const handleMouseLeave = () => {
    const zoomBox = zoomBoxRef.current;
    zoomBox.style.display = "none";
  };

  const items = [
    {
      key: "1",
      label: "Beans",
    },
    {
      key: "2",
      label: "French Press",
    },
    {
      key: "3",
      label: "Pour Over",
    },
    {
      key: "4",
      label: "Espresso",
    },
    {
      key: "5",
      label: "Turkish",
    },
  ];

  return (
    <>
      <div className="product_parent parent">
        <div className="product_cont cont">
          <div className="left">
            <div
              class="main_image_section"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={productImage} alt="Product" />
            </div>

            <div className="imagelist">
              <img src={productImage} alt="Product Thumbnail" />
              <img src={productImage} alt="Product Thumbnail" />
              <img src={productImage} alt="Product Thumbnail" />
              <img src={productImage} alt="Product Thumbnail" />
            </div>
          </div>
          <div className="right">
            <h4 class="title">A-10 Blend</h4>
            <h2 class="price">40 - 140ر.ق</h2>
            <p>This is the blend for those who like extreme.</p>
            <p>
              A mixture between a Flowery beans – Ethiopia and a Fruity beans –
              Rwanda to create this unique amazing blend.
            </p>

            <div class="dropdown_list">
              <div class="dropdown">
                <h2>Grind Size</h2>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <Button>Choose an optiob</Button>
                </Dropdown>
              </div>
              <div class="dropdown">
                <h2>Weight</h2>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <Button>Choose an optiob</Button>
                </Dropdown>
              </div>
            </div>

           <div class="counting_section">
           <div class="counter">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
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


          </div>
        </div>
        <div ref={zoomBoxRef} className="zoom-box"></div>
      </div>
    </>
  );
};

export default Product;
