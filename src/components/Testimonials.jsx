import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our stay at Hotel West End Home Stay was truly relaxing. The rooms were clean and comfortable, and the surrounding hill views were beautiful. The hosts were very warm and welcoming.",
      author: "Rahul Sharma",
      designation: "Leisure Traveler",
    },
    {
      text: "A perfect place to unwind in nature. The peaceful environment and fresh air made our trip memorable. The food felt just like home.",
      author: "Priya Verma",
      designation: "Family Traveler",
    },
    {
      text: "Loved the location and the calm surroundings. It’s away from the crowd but still easily accessible. Highly recommended for a quiet getaway.",
      author: "Amit Kapoor",
      designation: "Couple Traveler",
    },
    {
      text: "Very comfortable stay with great hospitality. The rooms were neat and the overall experience was simple yet satisfying.",
      author: "Sneha Joshi",
      designation: "Solo Traveler",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Guest Reviews</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>

            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].author}</h4>
              <span>{testimonials[currentIndex].designation}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;