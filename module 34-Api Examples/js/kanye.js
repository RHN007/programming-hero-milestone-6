const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => displayQuotes(data));
};

const displayQuotes = (quote) => {
    const quoteELement = document.getElementById("quote");
    quoteELement.innerText = quote.quote;
};