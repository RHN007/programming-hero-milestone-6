const loadCountries = () => {
    fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (countries) => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById("countries");
    countries.forEach((country) => {
        // console.log(country);
        const div = document.createElement("div");
        div.classList.add("country");

        div.innerHTML = `<h3>${country.name}</h3> 
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Detals</button>`;

        // const h3 = document.createElement("h3");
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement("p");
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    });
};

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data[0]));
};

const displayCountryDetails = (country) => {
    console.log();
    const countryDiv = document.getElementById("country-details");
    countryDiv.innerHTML = `<h5>${country.name}</h5> <p>population: ${country.population}</p> <img width="200px" src="${country.flags}"`;
};