import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
> Header
    - logo
    - nav list  
    - cart
> Body
    - Search 
    - Restaurant List
      - Restaurant Card
      - Image
      - Name
      - Rating
      - Cuisines
> Footer
    - links
    - Copyright

*/


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

