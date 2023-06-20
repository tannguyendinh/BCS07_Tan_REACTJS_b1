import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";

import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
   <Body />
    <Footer />
    
  </div>
);
