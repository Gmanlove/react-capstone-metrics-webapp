import React from 'react';
import PropTypes from 'prop-types';
import '../styles/currency.css';
import { useNavigate } from 'react-router-dom';

const Currency = ({ crypto, index }) => {
  const navigate = useNavigate();

  const handleMouseOver = (e) => {
    e.target.style.animationName = 'rotateIn'; // Set the animation name
    e.target.style.animationDuration = '1s'; // Set the animation duration
    e.target.style.animationTimingFunction = 'ease-in-out'; // Set the animation timing function
  };

  const handleMouseOut = (e) => {
    e.target.style.animation = ''; // Remove the animation
    e.target.style.opacity = '0.5'; // Set the opacity of the element to 0.5
  };

  return (
    <div
      className="cry"
      id="myCryptoCard"
      style={{
        animation: index % 2 === 0 ? 'backInLeft 2s' : 'backInRight 2s',
        backgroundColor: '',
        borderRadius: '10px',
        padding: '5%',
      }}
      onClick={() => navigate(`/details/${crypto.id}`)}
      aria-hidden="true"
      tabIndex={0}
      title="Click for details"
      role="button"
      aria-label="Details"
    >
      <h2>{crypto.name}</h2>
      <img
        onMouseOver={handleMouseOver}
        onFocus={(e) => e.preventDefault()}
        onMouseOut={handleMouseOut}
        onBlur={(e) => e.preventDefault()}
        className="cry-icon"
        src={crypto.icon}
        alt={crypto.id}
      />
    </div>
  );
};

Currency.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Currency;
