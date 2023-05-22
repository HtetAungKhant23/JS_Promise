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

const homeFeed = (data) => {
    console.log(data);
}

login()
    .then(logindata => {
        console.log(logindata);
        fetchData()
            .then(fetchdata => {
                console.log(fetchdata);
                homeFeed('this is home feed with data from fetch!');
            })
            .catch(err => {
                console.log(err);
            })
    })
    .catch(err => {
        console.log(err);
    })