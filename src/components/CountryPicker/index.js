import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './country-picker.module.css';

import { fetchCountries } from '../../api';

/* eslint-disable-next-line */
const styled = theme => ({
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
      <Select
        defaultValue="Global"
        classes={{
          root: classes.whiteColor,
        }}
        className={styles.inputCountry}
        onChange={e => handleCountryChange(e.target.value)}
      >
        <MenuItem value="Global">Global</MenuItem>
        {data.map(country => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
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
