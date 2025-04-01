// inspired from https://github.com/CodeCompleteYT/react-image-carousel/tree/main

import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./CardCarousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(data);
  }, [data]);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {trips.map((item, index) => {
        return (
          <div
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          >
          <img src={item.imageUrl} alt={item.name || "Trip Image"} />
          <div className="title">{item.name}</div>
          <button 
            className="view-trip"
            onClick={()=>navigate(`/trip/${item.id}/home`)}
          >
            View Trip
          </button>
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {trips.map((item, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};