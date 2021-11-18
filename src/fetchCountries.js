export const fetchCountries = (name) => {
    fetch('https://restcountries.com/v2/all?{name},name.official,capital,population,flags.svg,languages')
        .then(r => console.log(r)).catch(error => console.log(error));
};