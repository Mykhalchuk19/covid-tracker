import React from 'react';
import PropTypes from 'prop-types';

const PlaceItem = ({
  placeName, confirmed, recovered, deaths, active,
}) => (
  <li className="places__item">
    <h4 className="places__name">{placeName}</h4>
    <p className="places__text places__text--confirmed">
      Confirmed:
      {' '}
      {confirmed}
    </p>
    <p className="places__text places__text--recovered">
      Recovered:
      {' '}
      {recovered}
    </p>
    <p className="places__text places__text--active">
      Active:
      {' '}
      {active}
    </p>
    <p className="places__text places__text--deaths">
      Deaths:
      {' '}
      {deaths}
    </p>
  </li>
)

PlaceItem.propTypes = {
  placeName: PropTypes.string.isRequired,
  confirmed: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
}

export default PlaceItem;
