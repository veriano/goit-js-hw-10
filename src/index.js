import './css/styles.css';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch() {
    fetchCountries()
        .then((countries) => countries.map(country => {
            if (country.name.official > 10) {
                Notiflix.Notify.info('Too many matches found.Please enter a more specific name.');
            } else if (country.name.official > 2 && country.name.official < 10) {
                const markup = countries.map((country) => {
                    return `<li><img src = $(country.flags.svg)><span>${country.name}</span></li>`;
                }).join('');
                countryList.innerHTML = markup;
            } else if (country.name === 1) {
                renderCountryCard(countries);
            }
        }))
        .catch((error) => console.log(error));
    clearOnInputSearch;
};

function renderCountryCard (countries) {
     const markup = countries.map((country) => {
      return `<h1><img src = ${country.flags.svg}></h1>
          <p><b>Capital</b>: ${country.name.official}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>lenguages</b>: ${country.lenguages}</p>
        </li>`;
    })
    .join("");
  countryInfo.innerHTML = markup;
};

function clearOnInputSearch(e) {
    if (e.currentTarget.value === '') {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
  }  
}



