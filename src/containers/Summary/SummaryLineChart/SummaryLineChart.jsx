import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';

import { dailyActions, dailySelectors } from '../../../state/daily';

const legendCharts = [
  {
    id: 1,
    value: 'Confirmed',
    color: '#8884d8',
  },
  {
    id: 2,
    value: 'Deaths',
    color: 'crimson',
  },
];

const changeColor = (value, entry) => {
  const { color } = entry;
  return <span style={{ color }}>{value[0].toUpperCase() + value.slice(1)}</span>;
};

const SummaryLineChart = () => {
  const dispatch = useDispatch();
  const dailyData = useSelector(dailySelectors.getDailyData);
  useEffect(() => {
    dispatch(dailyActions.summaryFetchDailyRequest());
  }, [dispatch]);
  return (
    <div className="line-chart">
      <AreaChart
        width={1000}
        height={500}
        data={dailyData}
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
        />
        <XAxis dataKey="reportDate" />
        <YAxis />
        <Tooltip abelFormatter={() => 'Info'} />
        <CartesianGrid strokeDasharray="3 3" />
        <Area type="monotone" dataKey="confirmed" stroke="#8884d8" fill="url(#colorUv)" />
        <Area type="monotone" dataKey="deaths" stroke="crimson" fill="url(#colorPv)" />
      </AreaChart>
    </div>
  )
}

export default SummaryLineChart;
