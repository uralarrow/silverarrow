    let num = [4,8,13,5,2,1,7,0,"grey",null]
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] === "number") {
            if (num[i]%2 === 0) {console.log ("это четное число");}
            else if(num[i]%2 !== 0) {console.log("Это нечетное число");}}
    else {console.log ("это не число")}}
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 0) {
            console.log (`элемент ${i+1} Это ноль`);}
        }
