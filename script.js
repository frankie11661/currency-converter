const convertButton = document.getElementById("convert-button");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const resultElement = document.getElementById("result");

const exchangeRates = {
  USD: 1,
  EUR: 0.86,
  GBP: 0.76,
  NGN: 379.95
};

convertButton.addEventListener("click", () => {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  const result = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];

  resultElement.innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});
