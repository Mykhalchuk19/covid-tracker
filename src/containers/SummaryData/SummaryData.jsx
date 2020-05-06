import React, { useEffect } from 'react';
import { Lines } from 'react-preloaders';
import { useDispatch, useSelector } from 'react-redux';

import { commonActions, commonSelectors } from '../../state/сommon';
import { Header, Footer, Barchart } from '../../components';


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
        <Barchart data={dataSummary} />
      </div>
      <Footer />
      <Lines color="#8884d8" customLoading={isLoading} />
    </>
  )
}

export default SummaryData;
