import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faConciergeBell,
  faClock,
  faDumbbell,
  faFire,
  faCar,
  faMountain,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Facilities.css";

const Facilities = () => {
  const facilities = [
    {
      icon: faWifi,
      title: "Free Wi-Fi",
      description:
        "Stay connected with reliable internet access available throughout the property.",
    },
    {
      icon: faConciergeBell,
      title: "Homely Meals",
      description:
        "Enjoy freshly prepared home-style meals made with care and local flavors.",
    },
    {
      icon: faClock,
      title: "Guest Assistance",
      description:
        "Friendly support available to ensure a comfortable and hassle-free stay.",
    },
    {
      icon: faMountain,
      title: "Scenic Views",
      description:
        "Wake up to beautiful views of lush greenery and peaceful hills of Mashobra.",
    },
    {
      icon: faCar,
      title: "Parking",
      description:
        "Convenient and secure parking space available for guests.",
    },
    {
      icon: faFire,
      title: "Cozy Ambience",
      description:
        "Relax in a warm and peaceful environment, perfect for a refreshing getaway.",
    },
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Premium Amenities</span>
          <h2 className="section-title">World-Class Facilities</h2>
          <p className="section-description">
            Enjoy our comprehensive range of facilities designed to make your
            stay comfortable and memorable.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FontAwesomeIcon icon={facility.icon} />
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
