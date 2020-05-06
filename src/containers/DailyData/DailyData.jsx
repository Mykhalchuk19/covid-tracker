import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
} from 'recharts';
import { Lines } from 'react-preloaders';

import { commonActions, commonSelectors } from '../../state/сommon';
import { Header, Footer } from '../../components';
import './style.sass';

const changeColor = (value, entry) => {
  const { color } = entry;
  return <span style={{ color }}>{value[0].toUpperCase() + value.slice(1)}</span>;
};

const DailyData = () => {
  const dispatch = useDispatch();
  const dailyData = useSelector(commonSelectors.getDailyData);
  const isLoading = useSelector(commonSelectors.getLoadingSelector);
  useEffect(() => {
    dispatch(commonActions.dailyFetchRequest());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="title">Amount of cases daily</h2>
        <ResponsiveContainer className="daily__line-chart" width="70%" height={450}>
          <AreaChart
            data={dailyData}
            margin={{
              top: 0, right: 40, left: 10, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.95} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="crimson" stopOpacity={0.7} />
                <stop offset="95%" stopColor="crimson" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Legend
              verticalAlign="top"
              iconType="square"
              formatter={changeColor}
              wrapperStyle={{
                paddingBottom: '20px',
              }}
            />
            <XAxis dataKey="reportDate" />
            <YAxis />
            <Tooltip abelFormatter={() => 'Info'} />
            <CartesianGrid strokeDasharray="5 5" />
            <Area type="monotone" dataKey="confirmed" stroke="#8884d8" fill="url(#colorUv)" />
            <Area type="monotone" dataKey="deaths" stroke="crimson" fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <Footer />
      <Lines color="#8884d8" customLoading={isLoading} />
    </>
  )
}

export default DailyData;
