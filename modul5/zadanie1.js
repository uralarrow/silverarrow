let num = +prompt('введите значение');
console.log(isNaN(num));
console.log(typeof num);
let proverka = isNaN(num);
if (typeof num === "number" && proverka===false) {
  if (num%2 === 0) { console.log("это четное число"); }  
  else if(num%2 !== 0) {console.log("Это нечетное число"); } 
}
else if (typeof num==="number" && proverka===true) {
    console.log('Упс, кажется вы ошиблись'); 
}

