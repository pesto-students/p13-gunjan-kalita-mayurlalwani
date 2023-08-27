async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch('https://api.exchangerate.host/latest');

    const data = await response.json();

    if (!data.success) {
      throw new Error('Exchange rate API request was not successful');
    }

    const exchangeRates = data.rates;

    if (currencyCode in exchangeRates) {
      const rate = exchangeRates[currencyCode];
      return parseFloat(rate.toFixed(4));
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

//Tests
getExchangeRate('USD')
  .then((rate) => {
    console.log(rate); // Output: 1.0789
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate('XYZ')
  .then((rate) => {
    console.log(rate); // Output: null
  })
  .catch((error) => {
    console.error(error);
  });
