A closure is simply a function inside another function that has access to the outer function variable. Now, this definition sound pretty much straightforward but the real magic is created with the scope. The inner function (closure) can access the variable defined in its scope (variables defined between its curly brackets), in the scope of its parent function, and the global variables. Now here you need to remember that the outer function can not have access to the inner function variable (we have already discussed this in scope concept). Let’s take an example and understand it in a better way.

//not verified by me!
```
let first = () => {
  let greet = "Hi";
  let second = () => {
    let name = "John";
    console.log(greet); // Accessing the parent element
  }
  return second;
}

const newFun = first()
```

In the above example, the inner function ‘second()’ is a Closure. This inner function will have access to the variable ‘greet’ which is the part of the outer function ‘first()’ scope. Here the parent scope won’t have the access of child scope variable ‘name’.

Now the question is why do we need to learn closures? What’s the use of it? Closures are used when you want to extend behavior such as pass variables, methods, or arrays from an outer function to an inner function. In the above example, second() extends the behavior of the function first() and also has access to the variable ‘greet’.
Javascript is not pure object-oriented language but you can achieve object-oriented behavior through closures. In the above example, you can think const ‘newFunc’ as an Object having property ‘greet’ and ‘second()’ a method as in an OOP language.

Here you need to notice that after first() statement is executed, variables inside the first() function will not be destroyed (even if it has ‘return’ statement) because of closures as the scope is kept alive here and child function can still access the properties of the parent function. So closures can be defined in simple terms as “a function run, the function executed. It’s never going to execute again but it’s going to remember that there are references to those variables so the child scope always has access to the parent scope.”
