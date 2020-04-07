import React, { Component } from 'react';

import styles from './App.module.css';

import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';

import { fetchData } from './api';

class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        {/* <CountryPicker /> */}
      </div>
    );
  }
}

export default App;
