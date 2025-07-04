import React from "react";
import "./body.css";

function Body() {
  return (
    <div className="body_container">
      <div className="line_one"></div>
      <div className="line_two"></div>
      <div className="line_thre"></div>

      <div className="container">
        <div className="detail_container">John Anderson</div>
        <div className="professional">
          <h4>Professional & Clean </h4>
          Experienced photographer dedicated to capturing the beauty of every
          moment through precise composition and natural light. Specializes in
          weddings, portraits, and lifestyle photography.
        </div>
        <div className="creative">
          <h4>Creative & Artistic</h4>
          Visual storyteller turning ordinary moments into timeless art.
          Exploring emotion, light, and color through the lens of creativity.
        </div>
        <div className="event">
          <h4>Event & Portrait Focused</h4>
          Specializing in candid event and portrait photography, I focus on
          capturing authentic expressions and memorable experiences.
        </div>
        <div className="travel">
          <h4>Travel & Nature Photography</h4>
          Wandering the world with a camera in hand chasing sunsets, landscapes,
          and the raw beauty of nature.
        </div>
        <div className="minimal">
          <h4>Minimal & Modern</h4>
          Capturing life in frames clean, bold, and authentic.
        </div>
        <div className="blackwhite">
          <h4>Black & White / Fine Art Photography</h4>
          Focused on the simplicity and depth of black and white photography
          where every shadow has a story.
        </div>
      </div>
    </div>
  );
}

export default Body;
