import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';

import { colors } from '../../constants';
import './style.sass';

const Barchart = ({ data }) => (
  <div className="bar-chart">
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 10, right: 0, left: 10, bottom: 0,
        }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5, 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ fill: 'transparent' }} itemStyle={{ color: 'lightcoral' }} labelStyle={{ color: 'grey' }} />
        <Bar dataKey="amount" barSize={50}>
          {colors.map((color) => <Cell key={color.id} fill={color.color} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
)

Barchart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Barchart;
