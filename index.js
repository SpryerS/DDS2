const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const currentSecond = new Date().getSeconds();
    const isEvenSecond = currentSecond % 2 === 0;

    res.render('index', { isEvenSecond });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
