export const fetchCountries = (name) => {
    fetch('https://restcountries.com/v3.1/name/{name}?fields=name.official,capital,population,flags.svg,languages')
        .then(r => console.log(r)).catch(error => console.log(error));
};