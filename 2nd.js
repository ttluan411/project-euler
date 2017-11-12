// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.




const maxInclusiveValue = 4000000

const fib = index =>
    index === 0 ? 1 :
    index === 1 ? 1 :
        fib(index-1) + fib(index-2)

let sum = 0
for(let i = 0; fib(i) < maxInclusiveValue; i++)
{
    let value = fib(i)
    sum += value % 2 === 0 ? value : 0
}

console.log(sum)