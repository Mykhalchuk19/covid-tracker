import React from 'react';

import { Header } from '../../components';
import SummaryBarChart from '../Summary/SummaryBarChart/SummaryBarChart';
import SummaryLineChart from '../Summary/SummaryLineChart/SummaryLineChart';

const Content = () => (
  <>
    <Header />
    <SummaryBarChart />
    <SummaryLineChart />
  </>
)

export default Content;
