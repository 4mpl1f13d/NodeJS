const path = require('path');
const fs = require('fs');
let dataPath = (path.join(__dirname, "./chirps.json"));

let chirps = [{
    name: 'Jeremy',
    message: 'Sup'
},
{
    name: 'James',
    message: 'Sup, sup brah'
},
{
    name: 'Carol',
    message: 'Are you ready for PTA'
},
{
    name: 'Phyllis',
    message: 'I need those TPS reports'
},
{
    name: 'Richard',
    message: 'Have you seen my stapler?'
}
];

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) throw err;
    console.log('Got IT!')
})

fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;
    let readChirps = JSON.parse(data);
    console.log(readChirps);

});