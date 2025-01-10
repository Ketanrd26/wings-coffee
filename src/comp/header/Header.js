import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../asstes/wings_logo.webp";
import { IoSearchOutline } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdCart } from "react-icons/io";
import black_logo from "../../asstes/wings_logo_black.webp";
const Header = () => {
  const navs = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "Our Coffee",
      link_path: "/our-coffee",
    },
    {
      link_name: "Contact us",
      link_path: "/contactus",
    },
    {
      link_name: "Shop",
      link_path: "/myshop",
    },
  ];

  const [searchInput, setSearchInput] = useState(false);

  const [header, setHeader] = useState(false);
  const [mobHeader, setMobHeader] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setHeader(true);
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => window.removeEventListener("scroll", scrollHeader);
  });

  const location = useLocation();

  return (
    <>
      <div
        className={`header_parent ${
          header || location.pathname === "/contactus" || location.pathname === "*" || location.pathname === "/myshop"  || location.pathname === "/cart" ? "active" : ""
        }`}
      >
        <div class="header_cont">
          <div class="right_navs">
            <div class="navs">
              {navs.map((item, index) => (
                <Link key={index} to={item.link_path}>
                  {item.link_name}
                </Link>
              ))}
            </div>

            <div class="mobile_nav" onClick={() => setMobHeader(true)}>
              <span>
                <FaGripLines />
              </span>
              <span>Menu</span>
            </div>
          </div>
          <div class="middle_logo">
            <img src={logo} alt="" />
          </div>
          <div class={searchInput ? "left_section active" : "left_section"}>
            <Link class="cart"  to="/cart" >
              <span>Cart</span>
              <span>
                <IoMdCart />
              </span>
            </Link>

            <div class="search_bar">
              <input
                type="text"
                placeholder="search"
                className={searchInput ? "input active" : "input"}
              />
              <div
                class="search_icon"
                onClick={() => setSearchInput(!searchInput)}
              >
                <span>
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class={
            mobHeader
              ? "mob_header_parent parent active "
              : "mob_header_parent parent"
          }
        >
          <div class="top">
            <div class="right_nav"  onClick={()=>setMobHeader(false)} >
              <span>
                <RxCross2 />
              </span>
              <span>menu</span>
            </div>

            <div class="middle_mob_logo">
              <img src={black_logo} alt="" />
            </div>
          </div>
          <div class="bottom">
            <div class="navs">
            {navs.map((item, index) => (
                <Link key={index}  onClick={()=>setMobHeader(false)}  to={item.link_path}>
                  {item.link_name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
