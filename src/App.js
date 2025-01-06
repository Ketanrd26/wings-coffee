import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import EntryPage from "./comp/EntryPage/EntryPage";
import { useEffect, useState } from "react";
import Header from "./comp/header/Header"
function App() {
  const [refresh, setRefresh] = useState(false);

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
        {refresh && (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
