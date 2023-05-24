const express = require('express');
const app = express();

app.use((error, req, res, next) => {
    console.log(error.message);
});

const sum = (one, two) => {
    if(one && two){
        return one+two;
    }
    const err = new Error('one argu require!');
    throw err;
}

try{
    console.log(sum(1));
}catch(err){
    console.log('fucking error is here', err.message);
}

console.log('hayhay harhar');