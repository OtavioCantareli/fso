import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  // const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => setCountries(res.data));
  }, []);

  // const onNameChange = (event) => {
  //   setName(event.target.value);
  // };

  const filter = (event) => {
    setFilters(event.target.value);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filters)
    );
    setFilterCountry(filtered);
  };

  const NumberCountries = () => {
    if (filterCountry.length > 1) {
      return (
        filterCountry.map((country) => {
          return (
            <p>{country.name.common}</p>
          )
        })
      )
    } else if (filterCountry.length === 1) {
      return (
        filterCountry.map((country) => {
          return (
            <>
              <p><strong>{country.name.common}</strong></p>
              <p>Capital: {country.capital[0]}</p>
              <p>Region: {country.region}, sub-region: {country.subregion}</p>
              <p>Area: {country.area}</p>
              <p>Flag: {country.flag}</p>
              <p>Languages:
                <ul>
                  {
                    Object.values(country.languages).map((lang) => <li>{lang}</li>)
                  }
                </ul>
              </p>
              <p>Currencies: {' '}
                {
                  Object.values(Object.keys(country.currencies))
                }
              </p>
            </>
          )
        })
      )
    }
  }

  return (
    <div>
      <h2>Countries</h2>
      <form>
        <div>
          find country <input onChange={filter} />
        </div>
      </form>
      {NumberCountries()}
    </div>
  );
}

export default App;
