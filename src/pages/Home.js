import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { Carousel } from "../components/CardCarousel";
import { getTrips } from "../data/tripInfo";

function Home() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTrips() {
      const tripsData = await getTrips(); 
      setTrips(tripsData);
    }
    fetchTrips();
  }, []);

  const handleTripClick = (id) => {
    navigate(`/trip/${id}/home`);
  };

  return (
    <div className="Home">
      <Link to="/profile" className="profile">
        <img src="https://www.tapback.co/api/avatar/nevelle.webp" alt="Profile" />
      </Link>
      <div className="trip-carousel">
        <h3>Current Trips</h3>
        <Carousel data={trips} onTripClick={handleTripClick} />
        <div className="action-buttons">
          <Link to="/plan-new-trip" className="button">Plan New Trip</Link>
          <Link to="/past-trips" className="button">View Past Trips</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
