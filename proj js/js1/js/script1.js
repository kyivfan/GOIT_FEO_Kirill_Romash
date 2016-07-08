function pow() {

    var a = prompt('Введите целое число', '');

    if (isNaN(+a) || !Number.isInteger(+a)) {
        return alert ('Вы ввели не целое число, повторите ввод');
    }

    var n = prompt('Введите степень', '');

    if (isNaN(+n) || !Number.isInteger(+n)) {
        return alert ('Вы ввели не целое число, повторите ввод');
    }

    var result = 1;

    if (a == 0 & n <= 0) {
        return console.log('Result: infinity');
    } else {
        if (n > 0) {
            for(var i = 0; i < n; i++) {
                result *= a;
            }
            return console.log('Result ', result);
        } else if (n == 0) {
            return console.log('Result ', result);
        } else if (n < 0) {
            for (var i = 0; i > n; i--) {
                result *= a;
            }
            result = 1/result;
            return console.log('Result ', result);
        }
    }
}
