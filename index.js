const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const apiKey = req.query.apiKey;
    //localhost:8080/api?apiKey=rhonda123
    //header is more secure than in the link URL
        //X-API-Key: rhonda123
    // TODO validate API key
    // TODO bill user for usage

    res.send({ data: 'response what ❤️ ever is it' });

});

//to call the api in node you would use listen
app.listen(8080, () => console.log('aline on http://localhost:8080'));