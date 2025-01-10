import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import EntryPage from "./comp/EntryPage/EntryPage";
import { useEffect, useState } from "react";
import Header from "./comp/header/Header";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import Product from "./pages/product/Product";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Our_Coffee from "./pages/our_coffee/Our_Coffee";
import Contactus from "./pages/contact_us/Contactus";
import Error from "./pages/error_page/Error";
import Footer from "../src/comp/footer/Footer"
import PagetoTop from "../src/comp/pagetotop/Pagetotop"
import Shop from "./pages/shop/Shop";
import Our_cart from "../src/pages/cart/Our_cart"

function App() {
  const [refresh, setRefresh] = useState(false);
  const [navigatePage, setNavigatePage] = useState(false);

  useEffect(() => {
    setTimeout(() => setRefresh(true), 1500);
  }, []);

  // useEffect(() => {
  //   const scrollContainer = document.querySelector(".App");
  
  //   if (scrollContainer) {
  //     gsap.registerPlugin(ScrollTrigger);
  
  //     const scroll = new LocomotiveScroll({
  //       el: scrollContainer,
  //       smooth: true,
  //       multiplier: 0.9,
  //     });
  
  //     // Sync Locomotive Scroll with ScrollTrigger
  //     scroll.on("scroll", ScrollTrigger.update);
  
  //     ScrollTrigger.scrollerProxy(scrollContainer, {
  //       scrollTop(value) {
  //         return arguments.length
  //           ? scroll.scrollTo(value, 0, 0)
  //           : scroll.scroll.instance.scroll.y;
  //       },
  //       getBoundingClientRect() {
  //         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  //       },
  //       pinType: scrollContainer.style.transform ? "transform" : "fixed",
  //     });
  
  //     ScrollTrigger.addEventListener("refresh", () => scroll.update());
  //     ScrollTrigger.refresh();
  
  //     // Cleanup on unmount
  //     return () => {
  //       scroll.destroy();
  //       ScrollTrigger.removeEventListener("refresh", () => scroll.update());
  //     };
  //   }
  // }, []);
  
  

  
  return (
    <div className="App"  data-scroll-container >
      <BrowserRouter>

        {!refresh && <EntryPage />}
        {refresh && <Header />}
        <PagetoTop/>
        {navigatePage && <div className="navigate_parent"></div>}
        {refresh && (
          <Routes>
            <Route
              path="/"
              element={<Home setNavigatePage={setNavigatePage} />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/our-coffee" element={<Our_Coffee />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/myshop" element={<Shop />} />
            <Route path="/cart" element={<Our_cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        )}

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
