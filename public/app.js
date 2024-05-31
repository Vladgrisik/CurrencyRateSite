document.addEventListener('DOMContentLoaded', () => {
    const fetchRates = () => {
        fetch('/api/rates')
            .then(response => response.json())
            .then(data => {
                const ratesTableBody = document.querySelector('#rates-table tbody');
                ratesTableBody.innerHTML = '';
                data.forEach(rate => {
                    const row = document.createElement('tr');
                    const currencyCell = document.createElement('td');
                    const rateCell = document.createElement('td');
                    currencyCell.textContent = rate.cc;
                    rateCell.textContent = rate.rate.toFixed(2); // Форматуємо до 2 знаків після коми
                    row.appendChild(currencyCell);
                    row.appendChild(rateCell);
                    ratesTableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching exchange rates:', error));
    }

    fetchRates();
    setInterval(fetchRates, 60000); // Update rates every 60 seconds
    window.fetchRates = fetchRates; // Додаємо fetchRates до глобального об'єкту для ручного оновлення
});
