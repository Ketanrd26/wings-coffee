import React, { useState } from "react";
import image2 from "../../asstes/Wings-10-scaled.webp";
import { IoAppsOutline } from "react-icons/io5";
import { Button, Dropdown } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { RiStarSFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import "./Shop.scss";
import { Slider } from "@mui/material";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoGrid } from "react-icons/io5";

import Button_comp from "../../comp/button_comp/Button_comp";
import { BiSort } from "react-icons/bi";
import { TbFilters } from "react-icons/tb";
import { FaFirefoxBrowser } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { LuIndianRupee } from "react-icons/lu";
import { HiArrowSmUp } from "react-icons/hi";
import { IoArrowDown } from "react-icons/io5";
import { MdGeneratingTokens } from "react-icons/md";
const Shop = () => {
  const [toggleItem, setToggleItem] = useState({
    verticle: false,
    grid: true,
  });

  const [openSort, setOpenSort] = useState(false);

  const closeAll = () => {
    setToggleItem({
      verticle: false,
      grid: false,
    });
  };

  const handleToggle = (key) => {
    setToggleItem((prevState) => ({
      ...prevState,
      verticle: false, // Reset all
      grid: false,
      [key]: true, // Only set the clicked one to true
    }));
  };

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

  const [value, setValue] = React.useState([100, 6700]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const sortingItem = [
    {
      icon: <FaFirefoxBrowser />,
      title: "Popularity",
    },
    {
      icon: <IoIosStarOutline />,
      title: "Latest",
    },
    {
      icon: <CiDiscount1 />,
      title: "Discount",
    },
    {
      icon: <LuIndianRupee />,
      icon2: <HiArrowSmUp />,
      title: "Price:High to Low",
    },
    {
      icon: <LuIndianRupee />,
      icon2: <IoArrowDown />,
      title: "Price:Low to High",
    },
    {
      icon: <MdGeneratingTokens />,
      title: "Customer Rating",
    },
  ];

  console.log(openSort);
  return (
    <>
      <div class="shop_product parent">
        <div class="shop_list_cont cont">
          <div class="left_section">
            <div class="search_section">
              <h3>Search</h3>
              <div class="form-row">
                <input type="search" placeholder="Search Products" />
                <div class="icon">
                  <IoSearchOutline />
                </div>
              </div>
            </div>

            <div class="top_rated_products">
              <h3>Top Rated Products</h3>

              <div class="list">
                {product.slice(0, 3).map((item, index) => (
                  <div class="product">
                    <div
                      class="image bg-img-cover"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div class="right_content">
                      <h5>{item.name}</h5>
                      <div class="stars">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                      <div class="rate">
                        <h4>{item.price}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="category">
              <h3>Category</h3>
              <div class="cate_list">
                {product.slice(0, 5).map((item, index) => (
                  <div class="list">
                    <input type="checkbox" />
                    <p>{item.category}</p>
                  </div>
                ))}
              </div>
            </div>

            <div class="price">
              <h3>Price</h3>
              <div class="slider">
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={100}
                  max={6700}
                  step={50} // Adjust the step for finer or coarser control
                />
              </div>
              <p>
                <span>{value[0]}</span> - <span>{value[1]}+</span>
              </p>
            </div>
          </div>
          <div class="right_section">
            <div class="sorting_section">
              <div class="selection">
                <div
                  className="verticle"
                  onClick={() => {
                    handleToggle("verticle");
                  }}
                >
                  <TfiMenuAlt />
                </div>

                <div
                  class="grid"
                  onClick={() => {
                    handleToggle("grid");
                  }}
                >
                  <IoGrid />
                </div>
              </div>
              <div class="drop_down">
                <div class="form-row">
                  <span>Sort by :</span>
                  <div class="value">
                    <p>Recommended</p>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>

                <div class="list">
                  <p>Recommended</p>
                  <p>Recommended</p>
                  <p>Recommended</p>
                  <p>Recommended</p>
                </div>
              </div>
            </div>
            <div class="product_list">
              {toggleItem.grid && (
                <>
                  {product.map((item, index) => (
                    <Link class="card" key={index} to="/product">
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
                        <Button_comp
                          btn_path="/product"
                          btn_text="Add To Cart"
                        />
                      </div>
                    </Link>
                  ))}
                </>
              )}
              {toggleItem.verticle && (
                <>
                  {product.map((item, index) => (
                    <Link class="card verticle_card" key={index} to="/product">
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

                        <Button_comp btn_path="/cart" btn_text="Add To Cart" />
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>

          <div class="bottom_mob_nav">
            <p onClick={() => setOpenSort(true)}>
              <span>
                <BiSort />
              </span>
              Sort By
            </p>
            <p>
              <span>
                <TbFilters />
              </span>
              Filter
            </p>
          </div>
        </div>
        {openSort && (
          <div class="sort_section_parent" onClick={() => setOpenSort(false)}>
            <div class="sort_by_section">
              <h3>Sort By</h3>
              <div class="list">
                {sortingItem.map((item, index) => (
                  <p key={index}>
                    <span>
                      {item.icon}
                      {item.icon2}
                    </span>
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        <div class="filter_section_parent" onClick={() => setOpenSort(false)}>
          <div class="top_section">
            <p>Filters</p>
            <p>CLEAR ALL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
