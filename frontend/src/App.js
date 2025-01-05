import React from "react";
import "./App.css";
import world from "./images.jpeg";

function App() {
  return (
    <main className="container">
      <div className="imageSection">
        <img src={world} alt="World scenery" />
      </div>
      <div className="contentSection">
        <h1>EXPLORE THE CULTURE & COLORS</h1>
        <p>
        The world is a treasure trove of mysteries, just waiting to be uncovered! Adventure is calling—it’s time to grab life by the wheels and set off on your next great journey. Discover where others have wandered, map out your dream destinations, and ignite your wanderlust. Join MyTravelJourney to share your adventures, follow fellow explorers, and most importantly, plan your next epic trip. Life’s too short to stay in one place—let the adventure begin! 🌍✨
        </p>
        <div className="buttonGroup">
          <button className="primaryButton">Why I created this project</button>
          <button className="secondaryButton">Learn more about me</button>
        </div>
      </div>
    </main>
  );
}

export default App;
