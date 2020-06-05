import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import Story from "./components/Story";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <app className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story column='pictures' name='PICTURES'/>
      <Story column='content' name='CONTENT' />
      <Homes />
      <Gallery />
      <Footer />
    </app>
  );
};

export default App;
