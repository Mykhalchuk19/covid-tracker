import React, { useEffect } from 'react';
import {
  BarChart, Bar, YAxis, XAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Lines } from 'react-preloaders';
import { useDispatch, useSelector } from 'react-redux';

import { commonActions, commonSelectors } from '../../state/сommon';
import { colors } from '../../constants';
import { Header, Footer } from '../../components';
import './style.sass';


const SummaryData = () => {
  const dispatch = useDispatch();
  const dataSummary = useSelector(commonSelectors.getSummarySelector);
  const isLoading = useSelector(commonSelectors.getLoadingSelector);
  useEffect(() => {
    dispatch(commonActions.summaryFetchRequest());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="title">SUMMARY CASES</h2>
        <ResponsiveContainer className="home__bar-chart" width="70%" height={400}>
          <BarChart
            data={dataSummary}
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
      </div>
      <Footer />
      <Lines color="#8884d8" customLoading={isLoading} />
    </>
  )
}

export default SummaryData;
