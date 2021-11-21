import './css/styles.css';
import countryCardTpl from './templates/render-card.hbs';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch() {
    const name = input.value;
    fetchCountries(name)
        .then(countries => {
            if (countries.length > 10) {
                Notiflix.Notify.info('Too many matches found.Please enter a more specific name.');
            } else if (countries.length > 2 && countries.length < 10) {
                countryInfo.innerHTML = '';
                const markup = countries.map(country => {
                    return `<li><img src = ${country.flags.svg} alt = 'flag of country' width = 50;><span><b>${country.name.official}</b></span></li>`;
                }).join('');
                countryList.innerHTML = markup;
            } else if (countries.length === 1) {
               const markup = countries.map(country => countryCardTpl(country));
               console.log(markup);
                countryList.innerHTML = '';
                countryInfo.innerHTML = markup;
            } else {
        clearOnInputSearch();
            }
        }).catch(error => console.log(error));
            
    if (name === '') {
        clearOnInputSearch();
    }
};

function clearOnInputSearch () {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
}; 




