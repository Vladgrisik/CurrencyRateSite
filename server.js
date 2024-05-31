const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/rates', async (req, res) => {
    try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving exchange rates');
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
