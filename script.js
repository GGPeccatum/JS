"use strict";

// alert ('Привет, Мир!');
// alert('Создали файл JS');
// alert('И подключили его');


//переменные


// let message;
// message = 'Hello!';

// alert(message); // показывает содержимое переменной

// let user = 'Vlad'
// ,   age = '22'
// ,   sms = message;

// alert(user);
// alert(age);
// alert(sms);


//Console
/*
let a = 2;
let b = 4;
let c = 10;

console.log(a);
console.log(b);
b = c;
console.log(a+b);

 console.log("a=" ,a, ",b=" ,b, "c=", c)
 b = c;
 console.log("b=c")
 console.log("a+b=", a+b);

 console.log(a);
 console.log(typeof a);
 */



 //Обьекты
let car = {
    color: 'red',
    maxSpeed: 220,
    audio: {
        brand: 'Sony',
        speakers: 12
    }
};
car.color = 'green';

console.log(car);
console.log("car color=",car.color);
