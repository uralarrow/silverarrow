/*Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/
function first(a) {
    function second(b) {
    return a + b;
    }
    return second(6);
}
const result = first(3);
console.log(result);