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
            resolve('getting user photo...');
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
// login()
//     .then(logindata => {
//         console.log(logindata);
//         fetchData()
//             .then(fetchdata => {
//                 console.log(fetchdata);
//                 getUserPhoto()
//                     .then(data => {
//                         console.log(data);
//                         frindAdd()
//                             .then(frindData => {
//                                 console.log(frindData);
//                                 serching()
//                                     .then(serchData => {
//                                         console.log(serchData);
//                                         homeFeed('this is final home feed');
//                                     })
//                                     .catch(err => {
//                                         console.log(err);
//                                     })
//                             })
//                             .catch(err => {
//                                 console.log(err);
//                             })
//                     })
//                     .catch(err => {
//                         console.log(err);
//                     })
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     })
//     .catch(err => {
//         console.log(err);
//     })