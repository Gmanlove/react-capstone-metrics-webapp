import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="navigation-left">
        <FontAwesomeIcon
          className="well-in"
          onClick={() => {
            navigate('/');
          }}
          icon={faChevronLeft}
          style={{ color: '#fff' }}
        />
        <span>Year 2023</span>
      </div>
      <h1 style={{ animation: 'jackInTheBox 2s' }}>STATE OF COINS</h1>
      <div className="navigation-right">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </header>
  );
};

export default NavHeader;
