import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './country-picker.module.css';

import { fetchCountries } from '../../api';

/* eslint-disable-next-line */
const styled = theme => ({
  root: {
    background: 'blue',
  },
  whiteColor: {
    color: 'white',
  },
});

const CountryPicker = ({ handleCountryChange, classes }) => {
  const [data, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchCountriesApi = async () => {
      setCountriesData(await fetchCountries());
    };

    fetchCountriesApi();
  }, [setCountriesData]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        classes={{
          root: classes.whiteColor,
        }}
        className={styles.inputCountry}
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {data.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

CountryPicker.propTypes = {
  handleCountryChange: PropTypes.func,
  classes: PropTypes.shape({
    whiteColor: PropTypes.object,
  }),
};

CountryPicker.defaultProps = {
  handleCountryChange: () => {},
  classes: {},
};

export default withStyles(styled)(CountryPicker);
