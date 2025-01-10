import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import EntryPage from "./comp/EntryPage/EntryPage";
import { useEffect, useState } from "react";
import Header from "./comp/header/Header";

import Product from "./pages/product/Product";

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
