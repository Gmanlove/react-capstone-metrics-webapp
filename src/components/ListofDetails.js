import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsData } from '../redux/detail/detailSlice';
import Loader from './Loader';
import Details from './Details';

const ListofDetails = () => {
  const { details, isLoading, hasError } = useSelector((store) => store.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailsData(id));
  }, [dispatch, id]);

  if (!details || details.length === 0) { // Add null/undefined check
    return (
      <h2 data-testid="detailsItem" className="empty-cryptos">
        No Details
      </h2>
    );
  }
  if (isLoading) return <Loader />;
  if (hasError) return <h2 className="empty-cryptos">An error has occurred</h2>;
  return <Details details={details} />;
};

export default ListofDetails;
