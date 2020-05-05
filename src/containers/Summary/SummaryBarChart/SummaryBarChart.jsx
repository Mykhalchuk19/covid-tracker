import React, { useEffect } from 'react';
import {
  BarChart, Bar, YAxis, XAxis, Cell, CartesianGrid, Tooltip,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';

import { summaryActions, summarySelectors } from '../../../state/summary';
import './style.sass';

const colors = [{
  id: 1,
  color: '#8884d8',
},
{
  id: 2,
  color: 'mediumseagreen',
},
{
  id: 3,
  color: 'crimson',
}];

const SummaryBarChart = () => {
  const dispatch = useDispatch();
  const dataSummary = useSelector(summarySelectors.getSummarySelector);
  useEffect(() => {
    dispatch(summaryActions.summaryFetchRequest());
  }, [dispatch]);
  return (
    <div className="bar-chart">
      <BarChart width={400} height={300} data={dataSummary}>
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
    </div>
  )
}

export default SummaryBarChart;
