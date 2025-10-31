const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currency-select");
const currencySelect1 = document.querySelector(".currency-select1");
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-corrency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//valor em real
    const currencyValueConverted = document.querySelector(".currency-value");//valor de outras moedas

    const dolarToday = 5.36;
    const euroToday = 6.25;
    const bitcoinToday = 604139.36;
    const libraToday = 7.07;
    const realToday = 1.00;



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

    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday);
    }

    if (currencySelect1.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday);
    }

    if (currencySelect1.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect1.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect1.value === "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelect1.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }

     
    console.log(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    const currencyImage1 = document.querySelector(".currency-img1");
    const currencyName1 = document.querySelector(".currency");

    if (currencySelect1.value === "real") {
        currencyName1.innerHTML = "Real";
        currencyImage1.src = "./assets/real.png";
    }

    if (currencySelect1.value === "dolar") {
        currencyName1.innerHTML = "Dólar";
        currencyImage1.src = "./assets/dolar.png";
    }

    if (currencySelect1.value === "euro") {
        currencyName1.innerHTML = "Euro";
        currencyImage1.src = "./assets/euro.png";
    }

    if (currencySelect1.value === "bitcoin") {
        currencyName1.innerHTML = "Bitcoin";
        currencyImage1.src = "./assets/bitcoin.png";
    }

    if (currencySelect1.value === "libra") {
        currencyName1.innerHTML = "Libra";
        currencyImage1.src = "./assets/libra 1.png";
    }


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

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra 1.png";
    }


    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real";
        currencyImage.src = "./assets/real.png";
    }
    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);

currencySelect1.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValues);