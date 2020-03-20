// let aVariable = 1;

// const myFunction = () =>{
//     aVariable = 2
//     console.log(aVariable); // 2
//     if (aVariabloe == 2) {
//         console.log(aVariable); // 2
//         aVariable = 3;
//         if (aVariable == 3) {
//             console.log(aVariable); // 3
//             aVariable = 4;
//             console.log(aVariable); // 4
//         }
//     }
// }
// console.log(aVariable); // 1
// myFunction();
// console.log(aVariable); // 4

///// Example 2 - Higher order functions ///

// let add = (num1) => { // first parameter
//     return (num2) => { // second parameter
//         return num1 + num2;
//     }
// }

// console.log(add(2));
// console.log(add(2)(1));

/////////// Activity 1 ////////////

const func = () => {
    console.log("Hello Code Nation")
}
// func();

const func2 = (fn) => {
    for (let i = 0; i < 5; i++) {
        fn(func);
    }
}
func2(func);

///////// Activity 2 //////////

let newVar = [1, 2, 3, 4, 5]
