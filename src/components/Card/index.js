import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as MaterialCard,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import { parseISO, format } from 'date-fns';

import styles from './card.module.css';

const Card = ({ status, numbers, date, style }) => {
  const formattedDate = format(parseISO(date), "dd 'de' MMMM', às 'HH:mm'h'");
  return (
    <Grid
      item
      component={MaterialCard}
      xs={12}
      md={3}
      className={cx(styles.card, style)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {status}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={numbers} duration={3.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{formattedDate}</Typography>
        <Typography variant="body2">Numero de {status} por COVID-19</Typography>
      </CardContent>
    </Grid>
  );
};

Card.propTypes = {
  status: PropTypes.string,
  numbers: PropTypes.number,
  date: PropTypes.string,
  style: PropTypes.string,
};

Card.defaultProps = {
  status: '',
  numbers: 0,
  date: '',
  style: '',
};

export default Card;
