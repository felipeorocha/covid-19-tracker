import React, { useState, useEffect } from 'react';

import styles from './App.module.css';

import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';

import { fetchData } from './api';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchApiData = async () => {
      setData(await fetchData());
    };

    fetchApiData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      {/* <CountryPicker /> */}
    </div>
  );
};

export default App;
