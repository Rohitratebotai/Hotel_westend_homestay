import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faClock,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Dining.css";
import img from '../assets/img_3.webp'

const Dining = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="dining" className="dining">
      <div className="container">
        <div className="dining-content">
          <div className="dining-text">
            <span className="section-subtitle">Culinary Excellence</span>
            <h2 className="section-title">Exquisite Dining Experience</h2>
            <p>
              Indulge in a culinary journey with our multi-cuisine restaurant
              offering the finest local and international dishes prepared by
              expert chefs.
            </p>

            <div className="dining-features">
              <div className="feature">
                <FontAwesomeIcon icon={faUtensils} />
                <span>Multi-Cuisine Menu</span>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faClock} />
                <span>All Day Dining</span>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faWineGlass} />
                <span>Premium Beverages</span>
              </div>
            </div>

            <button className="btn-outline" onClick={scrollToContact}>
              Make Reservation
            </button>
          </div>

          <div className="dining-image">
            <img src={img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
