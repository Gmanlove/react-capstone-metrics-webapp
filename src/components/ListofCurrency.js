import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosData } from '../redux/current/currentSlice';
import Currency from './Currency';
import Loader from './Loader';

const ListofCurrency = () => {
  const {
    cryptos, isFetched, isLoading, hasError,
  } = useSelector((store) => store.crypto);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(getCryptosData());
    }
  }, [dispatch, isFetched]);

  if (isLoading) return <Loader />;

  if (hasError) {
    return (
      <h2 className="no-coin">
        An error has occurred. Please try again later.
      </h2>
    );
  }

  if (cryptos.length === 0) {
    return <Loader />; // Display a loading spinner instead of "No Crypto was fetched"
  }

  return (
    <div className="bucket">
      <div className="searchBar">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Crypto Coins "
        />
      </div>
      <div className="milen-s">
        {cryptos
          .filter((crypto) => {
            if (search === '') {
              return true; // Return true to include all cryptos when search is empty
            }
            return crypto.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((crypto, index) => (
            <Currency key={crypto.id} crypto={crypto} index={index} />
          ))}
      </div>
    </div>
  );
};

export default ListofCurrency;
