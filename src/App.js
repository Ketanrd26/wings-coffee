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
        {navigatePage && <div className="navigate_parent"></div>}
        {refresh && (
          <Routes>
            <Route
              path="/"
              element={<Home setNavigatePage={setNavigatePage} />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/our-coffee" element={<Our_Coffee />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
