import './css/styles.css';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

input.addEventListener('input', debounce(onInputEvent, DEBOUNCE_DELAY));

function onInputEvent(e) {
    fetchCountries(); 
};


