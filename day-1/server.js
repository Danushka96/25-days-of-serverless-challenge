// @ts-check
const express = require('express');
const http = require('http');

async function main() {
    // Azure App Service will set process.env.port for you, but we use 3000 in development.
    const PORT = process.env.PORT || 3000;
    // Create the express routes
    let app = express();

    app.get('/', async(req, res) => {

        let results = ['נ', 'ג', 'ה', 'ש'];
        let random = getRandomInt(0, 3);
        res.json({
            "result": results[random]
        })
    });

    // Create the HTTP server.
    let server = http.createServer(app);
    server.listen(PORT, function() {
        console.log(`Listening on port ${PORT}`);
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();