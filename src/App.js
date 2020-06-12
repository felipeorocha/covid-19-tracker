import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import { Cards, CountryPicker, Chart, Footer } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

import covidLogo from './assets/covid.png';

const parsed = queryString.parse(window.location.search);

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchApiData = async () => {
      setData(await fetchData(parsed.country));
    };

    fetchApiData();
  }, []);

  const handleCountryChange = async countryParam => {
    setData(await fetchData(countryParam));
    setCountry(countryParam);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={covidLogo} alt="COVID-19" />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data} />
      <Chart data={data} country={country} />
      <Footer />
    </div>
  );
};

export default App;
