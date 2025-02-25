import React from "react";
import { Routes, Route } from "react-router-dom";
import Casa from "./pages/Casa/Casa";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Casa />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
