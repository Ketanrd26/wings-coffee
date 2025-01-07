import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import EntryPage from "./comp/EntryPage/EntryPage";
import { useEffect, useState } from "react";
import Header from "./comp/header/Header"
import Product from "./pages/product/Product";
function App() {
  const [refresh, setRefresh] = useState(false);
  const [navigatePage, setNavigatePage] = useState(false);
  useEffect(() => {
    setTimeout(() => setRefresh(true), 1500);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {!refresh && <EntryPage />}
   {
    refresh &&   <Header/>
   }

{navigatePage && <div class="navigate_parent">

</div>}
        {refresh && (
          <Routes>
            <Route path="/" element={<Home setNavigatePage={setNavigatePage} />} />
            <Route path="/product" element={<Product  />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
