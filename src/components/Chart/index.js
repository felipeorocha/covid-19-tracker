import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(item => item.confirmed),
              label: 'Infectados',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(item => item.deaths),
              label: 'Mortos',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: 'rgb(71, 71, 71)',
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: 'rgb(71, 71, 71)',
                },
              },
            ],
          },
          responsive: true,
        }}
      />
    ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infectados', 'Curados', 'Mortos'],
        datasets: [
          {
            label: 'Pessoas',
            backgroundColor: [
              'rgba(233, 236, 20, 0.849)',
              'rgba(60, 255, 0, 0.671)',
              'rgba(255, 0, 0, 0.664)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Numero de casos: ${country}` },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgb(71, 71, 71)',
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgb(71, 71, 71)',
              },
            },
          ],
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

Chart.propTypes = {
  data: PropTypes.shape({
    confirmed: PropTypes.object,
    recovered: PropTypes.object,
    deaths: PropTypes.object,
    lastUpdate: PropTypes.string,
  }),
  country: PropTypes.string,
};

Chart.defaultProps = {
  data: {},
  country: '',
};

export default Chart;