const express = require('express');
const app = express();

const sum = (one, two) => {
    if(one && two){
        return one+two;
    }
    const err = new Error('one argu require!');
    throw err;
}

app.use('/', (req, res, next) => {
    try{
        console.log(sum(1));
    }catch(err){
        console.log('fucking error is here => ', err.message);
        throw err;
    }
});

app.use((error, req, res, next) => {
    console.log(error.message);
});

console.log('hayhay harhar');

app.listen(5000, () => {
    console.log('server is running!!!');
});