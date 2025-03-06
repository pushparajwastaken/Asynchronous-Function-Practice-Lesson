/*setTimeout(() => {
  console.log("Step 1");
}, 1000);
console.log("Step 2");
console.log("Step 3");
console.log("Step 4");
setTimeout(() => {
  console.log("Step 5");
}, 2000);
console.log("Step 6");
console.log("Step 7");
setTimeout(() => {
  console.log("Step 8");
}, 500);
console.log("Step 9");
console.log("Step 10");*/

//the output would be something like
/*
Step 2
Step 3
Step 4
Step 6
Step 7
Step 9
Step 10
Step 8 (exectued after 500 milliseconds)
Step 1 (executed after 1000 milliseconds)
Step 5(executed after 2000 milliseconds)
*/

//the settimeout function is used to execute a function after a certain amount of time. The time is specified in milliseconds.

//we'll be able to fire off the functions in the order that we want to is by passing a callback as an argument to each of the function
//the callback is a function that is passed onto another function as an argument
// they are functions that executed only after a result is produced

/*
function task1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}
function task2(callback) {
  console.log("Step 2");
  callback();
}
function task3(callback) {
  console.log("Step 3");
  callback();
}
function task4(callback) {
  console.log("Step 4");
  callback();
}
function task5(callback) {
  setTimeout(() => {
    console.log("Step 5");
    callback();
  }, 2000);
}
function task6(callback) {
  console.log("Step 6");
  callback();
}
function task7(callback) {
  console.log("Step 7");
  callback();
}
function task8(callback) {
  setTimeout(() => {
    console.log("Step 8");
    callback();
  }, 500);
}

function task9(callback) {
  console.log("Step 9");
  callback();
}
function task10() {
  console.log("Step 10");
}
//this can be considered as an example of callback hell

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {
              task8(() => {
                task9(() => {
                  task10(() => {
                    console.log("All tasks are done");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
*/

//to protect ourself from this call back hell we use Promises

//A promise is an assurance or a guarantee that something will happen in the future.
//A promise is am object that holds the future value of an asynchronous operation
//A promise is in one of these three states: pending, fulfilled or rejected.
//eg- requesting data from a server,the promise,promises us to get that data which we can use in the future
//most of the time we'll be consuming promises rather than creating promises
/*const promise = new Promise((resolve, reject) => {
  //resolve is a function that will be called when the promise is fulfilled
  //reject is a function that will be called when the promise is rejected
  const allwantwell = true;
  if (allwantwell) {
    resolve("All is well");
  } else {
    reject("Something went wrong");
  }
});
console.log(promise)
*/

const promise = new Promise((resolve, reject) => {
  const randomnumber = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (randomnumber < 4) {
      resolve("All went well");
    } else {
      reject("Something went wrong");
    }
  }, 2500);
});
console.log(promise);
//the state of this promise will be pending for 2500 millisecond 
// until and unless the promise is resolved or rejected based on the random number