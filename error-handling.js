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
    console.log('fucking error is here');
}

console.log('hayhay harhar');