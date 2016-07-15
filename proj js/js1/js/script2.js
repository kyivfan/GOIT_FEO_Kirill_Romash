var namesQuantity = 5;
var namesArray = [];

function createArray() {

    for (var i = 0; i < namesQuantity; i++){
        namesArray[i] = prompt ('Введите имя номер ' + (i + 1) );
    }
    return namesArray;
}

function searchName() {

    var name = prompt('Введите имя пользователя');

    namesArray.includes(name) ?
        alert( name + ', вы успешно вошли') : alert('Ошибка! Имя пользователя не найдено!');
}
// ALTERNATIVE SOLUTION
// function searchName() {
//
//     var name = prompt('Введите имя пользователя');
//
//     for (var i = 0; i < namesArray.length; i++) {
//         if (namesArray[i] === name) {
//             return alert(name + ', вы успешно вошли');
//         }
//     }
//     return alert('Ошибка! Имя пользователя не найдено!');
// }
