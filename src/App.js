import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

import covidLogo from './assets/covid.png';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchApiData = async () => {
      setData(await fetchData());
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
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
