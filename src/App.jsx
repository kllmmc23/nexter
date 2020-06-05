import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Pictures from "./components/Pictures";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Pictures />
      <Content />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
