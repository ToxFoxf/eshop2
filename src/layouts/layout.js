import React from "react";
import Footer from "../components/Footer/footer";
import "./layout.css"

const Layout =({children}) => {
    return(
        <div className="layout">
               <div className="content">{children} </div>
                <Footer/>
        </div>
    )
}

export default Layout