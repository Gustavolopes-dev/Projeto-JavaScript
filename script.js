const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currency-select");
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-corrency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//valor em real
    const currencyValueConverted = document.querySelector(".currency-value");//valor de outras moedas

    const dolarToday = 5.36;
    const euroToday = 6.25;
    const bitcoinToday = 604139.36;

    const convertedValue = inputCurrencyValue / dolarToday;

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);


    }

    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

    console.log(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValues);