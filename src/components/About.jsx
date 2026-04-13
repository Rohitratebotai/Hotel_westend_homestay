import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./About.css";
import aboutimg from '../assets/img_5.webp';

const About = () => {
  const scrollToRooms = () => {
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Discover Serenity</span>
          <h2 className="section-title">A Peaceful Stay to Remember</h2>
          <p className="section-description">
             West End Home Stay offers a refreshing escape amidst the scenic
            beauty of Mashobra. Surrounded by lush greenery and peaceful hills,
            we bring you a perfect blend of comfort, warmth, and memorable
            experiences.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Your Home Away From Home</h3>
              <p>
                At  West End Home Stay, we welcome you with genuine
                hospitality and a cozy atmosphere. Whether you're here for a
                relaxing getaway or a peaceful retreat, enjoy comfortable
                accommodations, beautiful surroundings, and personalized care
                that makes your stay truly special.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>Comfort</h4>
                  <p>Cozy Rooms</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Guest Support</p>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Peaceful Stay</p>
                </div>
              </div>

              <button className="btn-outline" onClick={scrollToRooms}>
                Explore Rooms
              </button>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={aboutimg} alt=" West End Home Stay Mashobra" />
              <div className="image-badge">
                <FontAwesomeIcon icon={faAward} />
                <span>Warm Hospitality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
