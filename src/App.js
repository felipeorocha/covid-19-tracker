import React, { useState, useEffect } from 'react';

import styles from './App.module.css';

import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';

import { fetchData } from './api';

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
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
