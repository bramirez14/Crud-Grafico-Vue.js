const fs = require('fs')
const path = require('path');

let storesJson = path.join(__dirname,'../data/stores.json');
let arrayStores= JSON.parse(fs.readFileSync(storesJson, 'utf-8')|| "[]");



const controller = {
    list:(req,res)=>res.json(arrayStores),
}

module.exports = controller;