function updateCurrencyOptions() {
    const firstCurrency = document.getElementById("first_currency").value;
    const secondCurrency = document.getElementById("second_currency").value;
    const optionsFirst = document.getElementById("first_currency").children;
    const optionsSecond = document.getElementById("second_currency").children;
    for (let option of optionsFirst) {
        option.disabled = false;
        if (option.value === secondCurrency) {
            option.disabled = true;
        }
    }
    for (let option of optionsSecond) {
        option.disabled = false;
        if (option.value === firstCurrency) {
            option.disabled = true;
        }
    }
}
function calculateCurrency() {
    const firstCurrency = document.getElementById("first_currency").value;
    const secondCurrency = document.getElementById("second_currency").value;
    const amount = parseFloat(document.getElementById("num").value);
    const exchangeRates = {
        "uah_usd": 0.024,
        "uah_eur": 0.023,
        "usd_uah": 41.59,
        "usd_eur": 0.95,
        "eur_uah": 43.70,
        "eur_usd": 1.05
    };
    const rateKey = firstCurrency + "_" + secondCurrency;
    const result = amount * exchangeRates[rateKey];
    document.getElementById("result").innerText = result.toFixed(2) + " " + secondCurrency;
}
document.getElementById("num").addEventListener("input", function(event) {
    let value = this.value;
    if (isNaN(value) || value === '') {
        this.value = value.replace(/[^0-9.]/g, ''); 
    }
    calculateCurrency(); 
});
document.getElementById("first_currency").addEventListener("change", function() {
    updateCurrencyOptions();
    calculateCurrency();
});
document.getElementById("second_currency").addEventListener("change", function() {
    updateCurrencyOptions();
    calculateCurrency();
});
document.getElementById("num").addEventListener("input", calculateCurrency);
updateCurrencyOptions();