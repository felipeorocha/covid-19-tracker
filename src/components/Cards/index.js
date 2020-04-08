import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Card from '../Card';

import styles from './cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          numbers={confirmed.value}
          style={styles.infected}
          status="Infectados"
          date={lastUpdate}
        />
        <Card
          numbers={recovered.value}
          style={styles.recovered}
          status="Curados"
          date={lastUpdate}
        />
        <Card
          numbers={deaths.value}
          style={styles.deaths}
          status="Mortos"
          date={lastUpdate}
        />
      </Grid>
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.shape({
    confirmed: PropTypes.object,
    recovered: PropTypes.object,
    deaths: PropTypes.object,
    lastUpdate: PropTypes.string,
  }),
};

Cards.defaultProps = {
  data: {},
};

export default Cards;