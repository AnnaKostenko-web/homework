// function sumNumbers (firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers(3, 10)
// console.log (result)
// console.log (sumNumbers(-5, 7))



// const users = ['John', 'Ann', 'Alex', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is copy of the ${item} in the array`
//         }
// }
// return `There is not such item in the array`
// }
// console.log(checkForCopyItem(users, 'Alex'))



// const checkForCopyItem = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is copy of the ${item} in the array`
//         }
//     }
//     return `There is not such item in the array`
// }

// console.log(checkForCopyItem(users, 'Alex'))





// Домашка




function welcomeName(name) {
    return `Hello ${name}`
}

const result = welcomeName('Anna')
console.log(result)


const numbers = [15, 17, 22, 33, 5, 2, 76, 8, 9]
function checkNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
                        console.log(array[i])
        }
    }
}
checkNumbers(numbers);



function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Ошибка: деление на ноль!';
            }
        default:
            return 'Неизвестный оператор';
    }
}

console.log(calculate(17, 6, '+'));