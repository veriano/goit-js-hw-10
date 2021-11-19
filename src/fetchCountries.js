export const fetchCountries = (name) => {
    fetch(`https://restcountries.com/v2/name/${name}?oficial,capital,population,flags.svg,languages`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
    }