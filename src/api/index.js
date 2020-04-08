import axios from 'axios';

const baseURL = 'https://covid19.mathdro.id/api';

export const fetchData = async country => {
  let urlMount = baseURL;

  if (country && country !== 'Global') {
    urlMount = `${baseURL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(urlMount);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/daily`);

    const normalizedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return normalizedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${baseURL}/countries`);

    return countries.map(country => country.name);
  } catch (err) {
    console.log(err);
  }
};
