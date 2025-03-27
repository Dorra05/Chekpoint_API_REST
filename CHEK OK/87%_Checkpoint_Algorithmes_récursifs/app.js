function CalculatePriceTicket() {
    let age = prompt("Enter your age please");
        if (age <= 12) {
            return "Price is $10"
        } else if (age >= 13 && age <= 17) {
            return "Price is $15"
        } else if (age >= 18) {
            return "Price is $20"  
    } else {
        return 'invalid'; 
    }
}
console.log(CalculatePriceTicket()); 


function WeatherClothingAdviser(){
     let pleut= prompt("Il pleut ou non?"); 
    let temp=Number(prompt("Entrer la temparature actuelle:")); 
     if (pleut=="oui") {
     return" Portez un parapluie et des bottes"
     }
     
else if (temp >= 10 && temp < 20 ) {
     return"Portez des vêtements légers "
 }

 else if (temp >20 ){
    return"Il fait chaud, donc prenez vos maillots et allez à la plage (temp by abir)"
}
}
console.log(WeatherClothingAdviser());
 

 function power(x, n) {
    
    if (n === 0) {
        return 1;
    }
    
    else {
        return x * power(x, n - 1);
    }
}
let result = power(2, 3);  
console.log(result); 

 function fibbonacci(n){
    if (n===0){
        return 0; 
    }
    else if (n===1) {
        return 1; 
    }
    else{
        return  fibbonacci(n-1) + fibbonacci(n-2);
    }
 }
 let resultat = fibbonacci(5);  
 console.log(resultat);