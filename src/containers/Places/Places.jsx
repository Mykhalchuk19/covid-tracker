import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Lines } from 'react-preloaders';

import { commonActions, commonSelectors } from '../../state/сommon';
import { Header, Footer } from '../../components';
import PlaceItem from './PlacesItem/PlacesItem';
import './style.sass';

const Places = () => {
  const dispatch = useDispatch();
  const places = useSelector(commonSelectors.getPlacesSelector);
  const isLoading = useSelector(commonSelectors.getLoadingSelector);
  useEffect(() => {
    dispatch(commonActions.placesFetchRequest())
  }, [dispatch])
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="title">The biggest amount of cases by places</h2>
        <ul className="places__list">
          {places.map((place) => (
            <PlaceItem
              key={place.id}
              placeName={place.placeName}
              confirmed={place.confirmed}
              recovered={place.recovered}
              active={place.active}
              deaths={place.deaths}
            />
          ))}
        </ul>
      </div>
      <Footer />
      <Lines color="#8884d8" customLoading={isLoading} />
    </>
  )
}

export default Places;
