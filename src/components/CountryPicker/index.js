import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './country-picker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
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
};

CountryPicker.defaultProps = {
  handleCountryChange: () => {},
};

export default CountryPicker;