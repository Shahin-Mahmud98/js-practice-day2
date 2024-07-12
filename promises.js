const status = true;
console.log('Task 1');




// </-- Promises Definition --/>

const promise = new Promise(function (resolve,reject) {
    setTimeout(function () {
        if (status) {
            resolve ('Task 2');
        }else{
            reject('failed')
        }
    },2000)
});

promise 
.then(function (value) {
    console.log(value)
})

.catch(function (err) {
    console.log(err)
})

console.log('Task 3')

//<-- industry level promise used real life example -->
const paymentSuccess = true;
const marks = 80;

function enroll() {
    console.log('Course Enrollment is on Processing')

    const promise = new Promise (function (resolve,reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }else{
                reject('Payment Failed');
            }
        },2000)
    });
    return promise;
}

function progress() {
    console.log('Course Enrollment is Progressing')
    const promise = new Promise(function (resolve,reject) {
        setTimeout(function () {
            if (marks) {
                resolve();

            }else{
                reject('you did not enough mark for certificate ')
            }
        },2000)
    })
    return promise;
}

function getCertificate() {
    const promise = new Promise (function (resolve,reject) {
        setTimeout(function () {
            resolve('Congrates You have got the certificate')
        },1000)
    })

    return promise;
}


enroll()
.then(progress)
.then(getCertificate)
.then(function (value) {
    console.log(value);
})
.catch(function (err) {
    console.log(err);
})