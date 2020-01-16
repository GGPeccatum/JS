"use strict";

// alert ('Привет, Мир!');
// alert('Создали файл JS');
// alert('И подключили его');


//                                             переменные



// let message;
// message = 'Hello!';

// alert(message); // показывает содержимое переменной

// let user = 'Vlad'
// ,   age = '22'
// ,   sms = message;

// alert(user);
// alert(age);
// alert(sms);




//                                              Console



// let a = 2;
// let b = 4;
// let c = 10;

// console.log(a);
// console.log(b);
// b = c;
// console.log(a+b);

//  console.log("a=" ,a, ",b=" ,b, "c=", c)
//  b = c;
//  console.log("b=c")
//  console.log("a+b=", a+b);

//  console.log(a);
//  console.log(typeof a);




 

//                                     Обьекты



 
// let car = {
//     color: 'red',
//     maxSpeed: 220,
//     audio: {
//         brand: 'Sony',
//         speakers: 12
//     }
// };
// car.color = 'green';

// console.log(car);
// console.log("car color=",car.color);





//                               работа с переменными 
//ЗАДАЧИ 2



/*
let name ='Джон';
let admin = name;
alert("Имя админа");
alert(admin);
*/




//                                 Задача 3
//Создайте переменную для названия нашей планеты
//Создайте переменную для хранения имени текущего посетителя сайта




// let ourPlanetName = 'Земля';
// let currentUserName = "Джон";

// alert(ourPlanetName);
// alert(currentUserName);


// let name = "Иван";
// alert(`Привет ${name}`);
// alert(`Результат: ${1+2}`);



//                       Преобразование типов




// console.log ("" + 1 + 0); // 10   (1)
// console.log("" - 1 + 0);// -1    (2)
// console.log(true + false); // 1
// console.log(6 / "3"); //2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // 9px
// console.log("$" + 4 + 5); // $45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log(" -9  " + 5); // -9  5     (3)
// console.log(" -9  " - 5); // -14    (4)
// console.log(null + 1); // 1    (5)
// console.log(undefined + 1); // NaN    (6)
// console.log(" \t \n" - 2); //-2    (7)



// 1.Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0, работает то же самое правило.
// 2.Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
// 3.Сложение со строкой превращает число 5 в строку и добавляет к строке.
// 4.Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
// 5.null становится 0 после численного преобразования.
// 6.undefined становится NaN после численного преобразования.
// 7.Пробельные символы, такие как \t и \n по краям строки игнорируются при преобразовании в число, так что строка \t \n, аналогично пустой строке, становится 0 после численного преобразования.




