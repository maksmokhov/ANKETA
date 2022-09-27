let lastName = prompt('Назовите свою фамилию?');
let name = prompt('Имя?');
let midName = prompt('Отчество?');
let age = prompt('Сколько вам полных лет?');
let gender = confirm('Ваш пол мужкской?(ОК - да/Отмена - нет)?'); 
let pension = '';

if (lastName.length == 0) {
    lastName = 'Значение не должно быть пустым';
    
}
else {
    lastName = lastName;
}

if (name.length == 0) {
    name = 'Значение не должно быть пустым';
}
else {
    name = name;
}

if (midName.length == 0) {
    midName = 'Значение не должно быть пустым';
}
else {
    midName = midName;
}

if (age > 110) {
    age = 'Некорректный возраст';
}
if (age < 1) {
    age = 'Некорректный возраст';
}
else {
    age = age;
}

if (gender == true) {
    gender = 'мужской';
}
else {
    gender = 'женский';
}

if (age > 50) {
    pension = 'да';
}
else {
    pension = 'нет';
}




alert( `ваше ФИО: ${lastName} ${name} ${midName}
ваш возраст в годах: ${age}
ваш возраст в днях ${age * 365}
через 5 лет вам будет ${age * 1 + 5}
ваш пол: ${gender}
вы на пенсии: ${pension}` );