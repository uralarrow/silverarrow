let gold = new Map ([[4,"silver"],[1,"grey"]]);
for (let X of gold.keys()) {  
    console.log(`Ключ - ${X}`)}
for (let Y of gold.values()) {  
    console.log(`Значение - ${Y}`)}
gold.forEach((value,key) => {console.log("Ключ - " + key +  " Значение - " + value)
    
});

