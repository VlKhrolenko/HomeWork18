// Напишіть функцію-генератор fibonacci, яка повертає наступне число Фібоначчі при кожному виклику.
//     Генератор повинен зупинитися після досягнення заданої меж іn.
//
//     const fibGen =fibonacci(10);
// console.log(fibGen.next().value);
// // Виведе 0 console.log(fibGen.next().value);
// // Виведе 1 console.log(fibGen.next().value);
// // Виведе 1 console.log(fibGen.next().value);
// // Виведе 2 console.log(fibGen.next().value);
// // Виведе 3 console.log(fibGen.next().value);
// // ... і так далі, поки не досягне або перевищить число 10
function* fibonacci(n) {
    let current = 0;
    let next = 1;

    while (current <= n) {
        yield current;
        [current, next] = [next, current + next];
    }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);