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








//                  Постфиксная и префиксная формы

//Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1    // 2
//   , b = 1;   // 2

// let c = ++a; // 2
// let d = b++; // 1

// alert(""+a+b+c+d);


//Чему будут равны переменные a и x в примере ниже?

// let a = 2; // a=4
// let x = 1 +(a *= 2); // x=5
// alert(""+a+x);








//                 Условные инструкции if else и тернарный оператор




// let car = {
//     color: 'red',
//     maxSpeed: 220,
//     audio: {
//         brand: 'Sony',
//         speakers: 12
//     }
// }


     // if(car.color == 'red') {
     //     console.log('автомобиль красный');
     // }
     // else if(car.color == 'green') {
     // console.log('Автомобиль зеленый');
     // }
     // else {
     //     console.log('Цвет автомобиля не определен');
     // }

//                           Второй вариант примера выше(более короткий)

                //   let color = car.color == 'red' ? 'Красный' : 'Зеленый';
                //   console.log(color);







//                       Операторы сравнения

 
// console.log(5 > 4);                //  true 1
// console.log("ананас" > "яблоко");  // false 2
// console.log("2" > "12");           //  true 3
// console.log(undefined == null);    //  true 4
// console.log(undefined === null);   // false 5
// console.log(null == "\n0\n");      // false 6
// console.log(null === +"\n0\n");    // false 7


// 1.Очевидно, true.
// 2.Используется посимвольное сравнение, поэтому false.
// 3.Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
// 4.Специальный случай. Значения null и undefined равны друг другу при нестрогом сравнении.
// 5.Строгое сравнение разных типов, поэтому false.
// 6.Аналогично (4), null равен только undefined.
// 7.Строгое сравнение разных типов.





//               Взаимодействие: alert, prompt, confirm


// let name = prompt('Как тебя зовут?', undefined);

// let Name = confirm(`Тебя зовут ${name}?`);

// if(Name == true) 
// {
//     alert (`Тебя зовут ${name}`);
// }
// else if (Name == false)
// {
//     let name = prompt('Как тебя зовут?', undefined); 
//     alert (`Тебя зовут ${name}`);
// };


// let age = prompt('Сколько вам лет?', '');

// let accessAllowed = (age >= 18) ? "Отлично, Вы достигли совершенолетнего возраста" : "Очень жаль, но вам нет 18 лет." ;

// alert(accessAllowed);



// let company = prompt('Какая компания создала JavaScript?', '');
                        
// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');


// let company = prompt('Какая компания создала JS' , "");
// if (company == "Netscape"){
//    alert ('Верно');
// }
// else{
//     alert('Не верно');
// }




// Задание 
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“


// let nameComapny = prompt('Какое «официальное» название JavaScript?', "");
// if (nameComapny == 'ECMAScript'){
//     alert("Верно!");
// }
// else{
//     alert("Не знаете? ECMAScript!");
// }



//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// let value = prompt("Введите число", "");
// if (value > 0 ){
//     alert ("значение больше нуля");
// }
// else if (value < 0 ){
//     alert("значение меньше нуля");
// }
// else if (value == 0 ){
//     alert("значение равно нулю");
// }


//Перепишите if с использованием условного оператора '?':

// let a = prompt ('Введите число А', "");
// let b = prompt ('Введите число B', "");
// let result = (a + b < 4) ? alert('Мало') : alert('Много');


//Перепишите if..else с использованием нескольких операторов '?'.

// let login = prompt ('Введите логин' ,"");
// let message = (login == 'Сотрудник') ?  alert("Привет") : 
//  (login == 'Директор') ? alert ("Здравствуйте") :
//  (login == '') ? alert ("Нет логина") :
// '';





//                 функции



// let car = {
//      color:'red',
//      maxSpeed: '240',
// };

// let car2 = {
//      color: 'green',
//      maxSpeed: '305',
// };

// let clCh = colorChange ;
// clCh(car2);

// colorChange(car);

// function colorChange(car) {
//    car.color = 'red' ;
//  };


//   console.log('Car color: ' + car.color)
//   console.log('Car2 color: ' + car2.color)













//           Методы обьекта



// let car = {
//      color: 'red',
//      maxSpeed: '220'
// };
// let array = [1,
//              12,
//             'СМС',
//              car];
// console.log (array[0] + array[2]);




//      ЦИКЛЫ


// for (let i = 0; i <= 100; i++) {
//      console.log('Iron Man, Mark - ' +i);
// }





//                          Логические операторы




// let age = prompt ('Введите возраст', "");

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// if (age >= 14 && age <= 90)  {
//      alert('age  находится в диапазоне 14 и 90 включительно');
// };



// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// if (!(age >= 14 && age <= 90)){
//      alert('age не находится в диапазоне 14 и 90 включительно');
// };


// if (age < 14 || age > 90){
//      alert('age не находится в диапазоне 14 и 90 включительно');
// };









//Напишите код, который будет спрашивать логин с помощью prompt.




// let userName = prompt(' Введите логин ', "" );
// if (userName == 'Админ')
// {
//      let pass = prompt('Введите пароль', "")
//      if (pass == 'Я главный')
//      {
//           alert ('Здравствуйте')
//      }

//      else if (pass == '' || pass == null)
//      {
//           alert('Отменено')
//      }

//      else 
//      {
//           alert('пароль не верный')
//      }
// }


// else if (userName == '' || userName == null)
// {
//      alert('отменено')
// }
// else
// {
//      alert('Я вас не узнаю')
// }



// var2

// let pass, login;
// pass = '123';
// login = 'admin';

// let enterLogin = prompt('Login', "");
// if(login == enterLogin)
// {
//      let enterPass = prompt ('Passworld' , "");
//      if (pass == enterPass)
//      {
//           alert(`Hello  ${enterLogin}`)
//      }
//      else
//      {
//           alert(`enter pass "${enterPass}" not right `)
//      }
// }
// else 
// {
//  alert(`I do not know you ${enterLogin}`)
// }




//                 Циклы  



// for (let i = 1; i < 3; i++) { // выведет 0, затем 1, затем 2
//      alert(i);
//    }

//    for (;;) {
//      // будет выполняться вечно
//    }



// for (let i = 2; i<=10 ; i++){
//      if (i % 2 == 0){
//      alert (i);
//      }
     
// }


// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }


// for (let i = 0; i < 3; i++) {
//      alert( `number ${i}!` );
//    }


// let i = 0;
// while (i < 3){
//      alert(`number ${i}`);
//      i++;
// }


// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}