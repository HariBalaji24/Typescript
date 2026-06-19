let data:any = "Hello, TypeScript!";
console.log(data.toUpperCase()); 
// console.log(data.toFixed(2)); error at runtime

let unknownData: unknown = 3;
unknownData = "eren yeager"
if (typeof unknownData === "string") {
    unknownData.toUpperCase(); 
    console.log(unknownData); 
}
else if(typeof unknownData === "number"){
    console.log(unknownData.toFixed(2));
}
else{
    console.log(unknownData); 
}

//unknown is safer than any because it forces us to perform type checks before using the variable, preventing potential runtime errors.

//real world example of using unknown is when working with data from external sources, such as APIs or user input, where the type of the data is not known in advance. By using unknown, we can ensure that we handle the data safely and avoid unexpected errors.
//real world example of using any is when we are prototyping or working with legacy code where we may not have type information available. In such cases, using any can allow us to quickly iterate and test our code without worrying about type constraints. However, it's important to eventually replace any with more specific types to maintain code quality and prevent potential issues in the long run.


let username: never;
// Use Case 1: Throws an error immediately (never finishes executing)
function throwError(message: string): never {
    throw new Error(message);
}

console.log("Before");

throwError("This is an error!");

console.log("After"); // This line will never be reached due to the error thrown above
// username = "eren yeager"; 
// The never type represents a value that never occurs. It is often used to indicate that a function will never return or that a variable will never be assigned a value. In this case, since username is of type never, it cannot be assigned any value, including a string like "eren yeager".

