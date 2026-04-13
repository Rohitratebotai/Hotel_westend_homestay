import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSnowflake,
  faWifi,
  faTv,
  faCar,
  faConciergeBell,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Rooms.css";
import suitroom from '../assets/room1.webp';
import premium from '../assets/room4.jpeg'
import deluxe from '../assets/room5.jpeg'
const Rooms = () => {
  const rooms = [
    {
      id: "suite",
      title: "Suite Room",
      price: "₹7,000",
      image: suitroom,
      description:
        "Spacious and elegant suite with premium amenities and stunning city views.",
      badge: "Best Value",
      amenities: [
        { icon: faSnowflake, label: "AC" },
        { icon: faWifi, label: "Wi-Fi" },
        { icon: faTv, label: "Smart TV" },
        { icon: faCar, label: "Parking" },
      ],
    },
    {
      id: "premium",
      title: "Premium Room",
      price: "₹6,000",
      image: premium,
      description:
        "Modern comfort with luxury finishes and thoughtful amenities.",
      badge: "Popular",
      amenities: [
        { icon: faSnowflake, label: "AC" },
        { icon: faWifi, label: "Wi-Fi" },
        { icon: faTv, label: "Smart TV" },
        { icon: faConciergeBell, label: "Room Service" },
      ],
    },
    {
      id: "deluxe",
      title: "Deluxe Room",
      price: "₹5,000",
      image: deluxe,
      description:
        "Comfortable accommodation with all essential amenities for a pleasant stay.",
      badge: null,
      amenities: [
        { icon: faSnowflake, label: "AC" },
        { icon: faWifi, label: "Wi-Fi" },
        { icon: faTv, label: "TV" },
        { icon: faBath, label: "Private Bath" },
      ],
    },
  ];

  const bookRoom = (roomType) => {
    // Set room type in booking modal
    // const modal = document.getElementById("bookingModal");
    const roomSelect = modal.querySelector('select[name="roomType"]');
    if (roomSelect) {
      roomSelect.value = roomType;
    }
    modal.classList.add("active");
  };

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Accommodation</span>
          <h2 className="section-title">Comfortable Rooms with Scenic Views</h2>
          <p className="section-description">
            Choose from our thoughtfully designed rooms, offering comfort, simplicity,
            and beautiful views of the surrounding hills. Each stay is crafted to give
            you a relaxing and homely experience.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.title} />
                {room.badge && <div className="room-badge">{room.badge}</div>}
              </div>

              <div className="room-content">
                <div className="room-rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>

                {/* <h3 className="room-title">{room.title}</h3> */}
                <p className="room-description">{room.description}</p>

                <div className="room-amenities">
                  {room.amenities.map((amenity, i) => (
                    <span key={i}>
                      <FontAwesomeIcon icon={amenity.icon} />
                      {amenity.label}
                    </span>
                  ))}
                </div>

                {/* <div className="room-footer">
                  <div className="room-price">
                    <span className="price">{room.price}</span>
                    <span className="price-note">per night + GST</span>
                  </div>
                  <button
                    className="btn-book-room"
                    onClick={() => bookRoom(room.id)}
                  >
                    Book Now
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
