We understand the concept of callback but what will happen if your code will have callbacks within callbacks within callbacks and it goes on. Well, this recursive structure of callback is called as ‘callback hell’ and promises help to solve this kind of issue. Promises are useful in asynchronous javascript operation when we need to execute two or more back to back operations (or chaining callback), where each subsequent function starts when the previous one is completed. A promise is an object that may produce a single value some time in the future, either a resolved value or a reason that it’s not resolved (rejected). According to developer.mozilla “A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.”. Promises resolve the issue of ‘callback hell’ which is nothing but a recursive structure of callbacks (callbacks within callbacks within callbacks and so forth).
A promise may be in three possible states…

Fulfilled: When the operation is completed successfully.
Rejected: When the operation is failed.
Pending: initial state, neither fulfilled nor rejected.
Let’s discuss how to create a promise in javascript with an example.
