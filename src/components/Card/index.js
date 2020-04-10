import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as MaterialCard,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import cx from 'classnames';

import { parseISO, format } from 'date-fns';

import styles from './card.module.css';

const Card = ({ status, numbers, date, styling }) => {
  const formattedDate = format(parseISO(date), "dd 'de' MMMM', às 'HH:mm'h'");

  const StyledPrimaryTypography = withStyles({
    root: {
      color: '#b9b9b9',
    },
  })(Typography);

  const StyledSecondaryTypography = withStyles({
    root: {
      color: '#a9a9a9',
    },
  })(Typography);

  const StyledMainTypography = withStyles({
    root: {
      color: 'white',
    },
  })(Typography);

  return (
    <Grid
      item
      xs={12}
      sm={3}
      md={3}
      component={MaterialCard}
      className={cx(styles.card, styling)}
    >
      <CardContent>
        <StyledPrimaryTypography gutterBottom>{status}</StyledPrimaryTypography>
        <StyledMainTypography variant="h5">
          <CountUp start={0} end={numbers} duration={3.5} separator="," />
        </StyledMainTypography>
        <StyledSecondaryTypography>{formattedDate}</StyledSecondaryTypography>
        <StyledPrimaryTypography variant="body2">
          Numero de {status} por COVID-19
        </StyledPrimaryTypography>
      </CardContent>
    </Grid>
  );
};

Card.propTypes = {
  status: PropTypes.string,
  numbers: PropTypes.number,
  date: PropTypes.string,
  styling: PropTypes.string,
};

Card.defaultProps = {
  status: '',
  numbers: 0,
  date: '',
  styling: '',
};

export default Card;
