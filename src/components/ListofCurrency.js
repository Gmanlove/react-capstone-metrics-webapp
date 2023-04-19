import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosData } from '../redux/current/currentSlice';
import Currency from './Currency';
import Loader from './Loader';

const ListofCurrency = () => {
  const {
    cryptos, isFetched, isLoading, hasError,
  } = useSelector(
    (store) => store.crypto,
  );
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(getCryptosData());
    }
  }, [dispatch, isFetched]);

  if (cryptos.length === 0) {
    return (
      <h2 data-testid="cryptoItem" className="no-coin">
        An error has occurred. Please try again later.
      </h2>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (hasError) {
    return <h2 className="no-coin">An error has occurred</h2>;
  }

  return (
    <div className="bucket">
      <div className="searchBar">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Coins "
        />
      </div>
      <div className="milen-s">
        {cryptos
          .filter((crypto) => search === '' || crypto.name.toLowerCase().includes(search.toLowerCase()))
          .map((crypto, index) => (
            <Currency key={crypto.id} crypto={crypto} index={index} />
          ))}
      </div>
    </div>
  );
};

export default ListofCurrency;
