import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { Lines } from 'react-preloaders';

import { commonActions, commonSelectors } from '../../state/сommon';
import { Header, Footer, Barchart } from '../../components';
import './style.sass';

const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector(commonSelectors.getCountriesSelector);
  const isLoading = useSelector(commonSelectors.getLoadingSelector);
  const country = useSelector(commonSelectors.getCountrySelector);
  useEffect(() => {
    dispatch(commonActions.countriesFetchRequest());
  }, [dispatch])
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="title">Data on cases in the selected country</h2>
        <Select
          className="country__select"
          defaultValue=""
          isSearchable
          onChange={(e) => {
            dispatch(commonActions.countryFetchRequest(e));
          }}
          isDisabled={isLoading}
          isLoading={isLoading}
          options={countries}
        />
        {country.length !== 0 ? (
          <Barchart data={country} />
        )
          : <p className="country__text">Select a country to display statistics</p>}
      </div>
      <Footer />
      <Lines color="#8884d8" customLoading={isLoading} />
    </>
  )
}

export default Country;
