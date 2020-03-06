const path = require('path');
const fs = require('fs');
const request = require('request');
let dataPath = (path.join(__dirname, './popular-articles.json'));

let tomato = [];

request("https://reddit.com/r/popular.json", (err, res, body) => {
    if (err) throw err;
   
     JSON.parse(body).data.children.forEach(pizza => {
        tomato.push({
            author: pizza.data.author,
            url: pizza.data.url,
            title: pizza.data.title
        });
        // console.log(tomato);
    });
    fs.writeFile(dataPath, JSON.stringify(tomato), (err) => {
        if (err) throw err;
        console.log('Got IT!');
    })
});
