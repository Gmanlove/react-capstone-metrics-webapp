import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import '../styles/details.css';

const Details = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFontSize, setIsFontSize] = useState(16);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return (
    <div className="details-container">
      <div className="show-all">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          type="button"
        >
          Options
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
      {isOpen && (
        <div
          aria-hidden="true"
          onClick={() => {
            setIsOpen(false);
          }}
          className="made"
        >
          <div
            aria-hidden="true"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="made-con"
          >
            <span
              onClick={() => {
                setIsOpen(false);
              }}
              aria-hidden="true"
              className="mechie"
            >
              &times;
            </span>
            <div className="modal-top">
              <h3>Options</h3>
            </div>
            <div className="font-container">
              <label htmlFor="font-size">
                Font size
                <select
                  onChange={(e) => {
                    setIsFontSize(Number(e.target.value));
                  }}
                  id="font-size"
                  name="font-size"
                >
                  <option value="">--Please choose an option--</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                </select>

              </label>
            </div>
          </div>
        </div>
      )}

      <div className="display-card">
        <img
          onMouseOver={(e) => {
            e.target.style.animation = 'rotateIn 4s ';
          }}
          onFocus={(e) => {
            e.preventDefault();
          }}
          onMouseOut={(e) => {
            e.target.style.animation = '';
          }}
          onBlur={(e) => {
            e.preventDefault();
          }}
          className="display-icon"
          src={details.icon}
          alt={details.id}
        />

        <h2>{details.name}</h2>
        <table style={{ fontSize: isFontSize }}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{details.name}</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>{details.rank}</td>
            </tr>
            <tr>
              <td>Symbol</td>
              <td>{details.symbol}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
                  details.price,
                )}
              </td>
            </tr>
            <tr>
              <td>Conversion rate to BTC</td>
              <td>
                {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
                  details.priceBtc,
                )}
              </td>
            </tr>
            <tr>
              <td>Daily change for Price</td>
              <td>{details.priceChange1d}</td>
            </tr>
            <tr>
              <td>Hourly change for Price</td>
              <td>{details.priceChange1h}</td>
            </tr>
            <tr>
              <td>Weekly change for Price</td>
              <td>{details.priceChange1w}</td>
            </tr>
            <tr>
              <td>Total Supply</td>
              <td>
                {' '}
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
                  details.totalSupply,
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.number,
    symbol: PropTypes.string,
    price: PropTypes.number,
    priceBtc: PropTypes.number,
    priceChange1d: PropTypes.string,
    priceChange1h: PropTypes.string,
    priceChange1w: PropTypes.string,
    totalSupply: PropTypes.number,
  }).isRequired,
};

export default Details;
