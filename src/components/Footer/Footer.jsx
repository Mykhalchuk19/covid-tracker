import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions, commonSelectors } from '../../state/сommon'

import { formatDate } from '../../utils';
import './style.sass';

const Footer = () => {
  const dispatch = useDispatch();
  const lastUpdate = formatDate(new Date(useSelector(commonSelectors.getLastUpdateSelector)));
  useEffect(() => {
    dispatch(commonActions.updateFetchRequest());
  }, [dispatch])
  return (
    <div className="footer">
      <div className="footer__block">
        <p className="footer__text">All right reserved. Created by Yaroslav Mykhalchuk.</p>
        <p className="footer__text">
          Data from
          {' '}
          <a className="footer__link" href="https://github.com/mathdroid/covid-19-api">Muhammad Mustadi's</a>
          {' '}
          API.
        </p>
      </div>
      <div className="footer__block">
        <p className="footer__text">
          There is no data for the field &quot;Recovered&quot; for some countries and
          places.
        </p>
        <p className="footer__text">
          Last update:
          {' '}
          {lastUpdate}
        </p>
      </div>
    </div>
  )
}

export default Footer;
