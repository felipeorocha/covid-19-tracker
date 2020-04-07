import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './cards.module.css';

const Cards = props =>(
  <div className={styles.container}>
    <Grid container spacing={3} justify="center">
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infectados</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Numero de infectados de COVID-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
);

export default Cards;
