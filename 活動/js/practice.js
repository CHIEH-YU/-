//變數（可變）與常數const（不可變）
let name = 'Josh';

console.log(name);

//文字（字串）string
const name2 = 'doggy';

//typeof 檢測變數型態
//console.log(typeof name2);
//console.log('1'+'2');
//console.log(1+2);
//數字 number
const number1 = 15;
const number2 = 5;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
//取得number1除以number2的餘數
console.log(number1 % number2);
//布林 boolean（true false）
console.log(1 > 20);
console.log(5 > 3);
//問是否相等
console.log(number1 === number2);
console.log(number1 !== number2);
//物件 object
const student1 = {
    name: 'amy',
    age: 20,
    hasRegistered: true,
    address: 'Taipei'

};

console.log(student1);
console.log(student1.age);
console.log(student1.name);