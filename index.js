import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('Ciao');
});

app.listen(3000, () => {
    console.log('Open this link in your browser: http://127.0.0.1:3000');
});

app.get('/another-path', (req, res) => {
    res.send('Ciao on an other path');
});
