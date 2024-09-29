

//premative 
// const a = 5;
// const b = 5;
// console.log(a === b);

// const str1 = 'abc';
// const str2 = 'abc';
// console.log(str1 === str2)



















function sumFunction() {
    return (a, b) => a + b;
}
// non premative
const func1 = sumFunction(); // 4567
const func2 = sumFunction(); // 1234

console.log(func1(2, 2));
console.log(func2(2, 2));

console.log(func1 === func2);