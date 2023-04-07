import React from "react";

// import route and route
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import PropretyDetails from "./pages/PropertyDetails";

function App() {

  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprety/:id" element={<PropretyDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
