//special javaScript object -- links producing code to consuming code
//promise makes results available to 'subscribed' code.

//syntax

let promise1 = new Promise(function(resolve, reject) {
    //executor (the producing code,)
});

//when new Promise is created, the executor runs automatically.
//resolve , reject are callbacks.

//The promise object returned by the new Promise constructor has these internal properties.

//state - initially 'pending', --> 'fulfilled' when resolve is called.
//                             --> 'rejected' when reject is called.

//result - initially 'undefined' , changes to 'value' when resolve(value) is called.
                                  //changes to 'error'  when reject(error) is called.

//example
let promise = new Promise(function(resolve,reject) {
    //the function is executed automatically when the promise is constructed

    //after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done", 1000));
});

//CONSUMER CODE

//syntax

// promise.then(
//     function(result){ /* handle a successful result*/};
//     function(error) { /*handle an error*/};
// );


//
let promise2 = new Promise(function(resolve,reject) {
    setTimeout(() => resolve("done"), 1000);
});

//resolve runs the first function in .then

promise2.then(
    result => alert(result), //shows "done!"
    error => alert(error), //doesn't run
);

//if interested in only errors
//catch
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise3.catch(alert);
//Finally --- runs always, when the promise is settled.


let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
});

promise4.finally(()=> alert("Promise ready")); //triggers first
promise4.then(
    result => alert(result), //shows value

);

//finally passing through error

let promise5 = new Promise((resolve, reject) => {
    throw new Error("error");
});

promise5.finally(() => alert("Promise ready"));
promise5.catch(err => alert(err)); 


