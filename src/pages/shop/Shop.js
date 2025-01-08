import React from 'react'
import image2 from "../../asstes/Wings-10-scaled.webp";
import { IoAppsOutline } from "react-icons/io5";
import { Button, Dropdown } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import teapot from "../../asstes/teapot.png";
import kettle from "../../asstes/kitchen.png";
import cup from "../../asstes/coffee-cup.png";
import "./Shop.scss"
const Shop = () => {

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
  return (
    <>
        <div class="product_list_parent shop_product parent">
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
              <input type="search" placeholder='search' />
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
    </>
  )
}

export default Shop
