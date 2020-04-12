import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '../Card';

import styles from './cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <CircularProgress />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          numbers={confirmed.value}
          styling={styles.infected}
          status="Infectados"
          date={lastUpdate}
        />
        <Card
          numbers={recovered.value}
          styling={styles.recovered}
          status="Curados"
          date={lastUpdate}
        />
        <Card
          numbers={deaths.value}
          styling={styles.deaths}
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
