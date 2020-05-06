import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
  BarChart, Bar, YAxis, XAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Lines } from 'react-preloaders';

import { commonActions, commonSelectors } from '../../state/сommon';
import { colors } from '../../constants';
import { Header, Footer } from '../../components';
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
          <ResponsiveContainer className="country__bar-chart" width="50%" height={400}>
            <BarChart
              data={country}
              margin={{
                top: 10, right: 30, left: 10, bottom: 0,
              }}
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5, 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{ fill: 'transparent' }} itemStyle={{ color: 'lightcoral' }} labelStyle={{ color: 'grey' }} />
              <Bar dataKey="amount" barSize={50}>
                {
                        colors.map((color) => <Cell key={color.id} fill={color.color} />)
                    }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )
          : <p className="country__text">Select a country to display statistics</p>}
      </div>
        <Footer />
      <Lines color="#8884d8" customLoading={isLoading} />
    </>
  )
}

export default Country;
