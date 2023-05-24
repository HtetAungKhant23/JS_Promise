// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolved!');
//     }, 3000);
// });

// fetchData
//     .then((result) => {
//         console.log('Inside then...', result);
//     })
//     .catch((err) => {
//         console.log('Inside catch...', err);
//     });



const login = () => {
    const loginPromise = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("logging in.....");
        }, 3000);
    });
    return loginPromise;
}

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fetching data...");
        }, 5000);
    });
}

const getUserPhoto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('getting user photo...');
            reject('this is error!');
        }, 3000);
    });
}

const frindAdd = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('frind adding....');
        }, 3000);
    })
}

const serching = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('searching...');
        }, 3000);
    })
}

const homeFeed = (data) => {
    console.log(data);
}


// async / await

const testOne = async () => {
    try{
        const firstData = await login();
        console.log(firstData);
        const secondData = await fetchData();
        console.log(secondData);
        const thridData = await getUserPhoto();
        console.log(thridData);
        const fourthData = await frindAdd();
        console.log(fourthData);
        const finalData = await serching();
        console.log(finalData);
        homeFeed('this is final');
    }catch(error){
        console.log(error);
    }
}

console.log('first');
testOne();
console.log('second');

const testTwo = async () => {
    const firstData = await login();
    console.log(firstData);
    const secondData = await fetchData();
    console.log(secondData);
    const thridData = await getUserPhoto();
    console.log(thridData);
    const fourthData = await frindAdd();
    console.log(fourthData);
    const finalData = await serching();
    console.log(finalData);
    homeFeed('this is final');
}

console.log('first');
testTwo().catch(error => {
    console.log(error);
});
console.log('second');




// Promise changing
login()
    .then(firstData => {
        console.log(firstData);
        return fetchData();
    })
    .then(secondData => {
        console.log(secondData);
        return getUserPhoto();
    })
    .then(thridData => {
        console.log(thridData);
        return frindAdd();
    })
    .then(fourthData => {
        console.log(fourthData);
        return serching();
    })
    .then(final => {
        console.log(final);
        homeFeed('this is final home feed');
    })
    .catch(err => {
        console.log(err);
    })


// callback hell (or) pyramid dom
login()
    .then(logindata => {
        console.log(logindata);
        fetchData()
            .then(fetchdata => {
                console.log(fetchdata);
                getUserPhoto()
                    .then(data => {
                        console.log(data);
                        frindAdd()
                            .then(frindData => {
                                console.log(frindData);
                                serching()
                                    .then(serchData => {
                                        console.log(serchData);
                                        homeFeed('this is final home feed');
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    })
    .catch(err => {
        console.log(err);
    })




// fetch API / promise changing
fetch("https://fakestoreapi.com/products")
    .then(result => {
        return result.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.log(error);
    })


// async/await  Fetch API
const test = async () => {
    try{
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        console.log(products);
    }catch(error){
        console.log(error);
    }
}

console.log('frist');
test();
console.log('second');


