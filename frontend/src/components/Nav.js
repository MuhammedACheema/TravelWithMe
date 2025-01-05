import React from "react";
import Home from "../App"
function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <a href = "../App.js" >Home</a>
                    <a href = "./Foryou.js">For You</a>
                    <a href = "#">Explore</a>
                    <a href = "#">My Profile</a>
                    <a href = "#">About Us</a>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar