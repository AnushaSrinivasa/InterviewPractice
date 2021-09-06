In javascript, a callback is simply a function that is passed to another function as a parameter and is invoked or executed inside the other function. Here a function needs to wait for another function to execute or return value and this makes the chain of the functionalities (when X is completed, then Y executed, and it goes on.). This is the reason callback is generally used in the asynchronous operation of javascript to provide the synchronous capability.

```
const greeting = (name) => {
    console.log(`Hello ${name}`);
}
const sendGreetings = (callback) => {
  name = "Anshu!";
  callback(name);
}

sendGreetings(greeting); // Hello Anshu!
```
