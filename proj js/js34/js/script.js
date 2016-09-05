

var progTest = {
    title: "Тест по программированию",
    question: ["Вопрос №1", "Вопрос №2" , "Вопрос №3"],
    answers: [["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
              ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
              ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"]],
    checkres: 'Проверить мои результаты',

    questions: function(title) {

        var h1 = document.createElement('h1');
        h1.innerHTML = this.title;
        document.body.appendChild(h1);
    },

    render: function () {

        var q = this.question.length;
        var answ,ul,li,p,checkbox,txtEl,label;

        for (var i = 0; i < q; i++) {
            p = document.createElement('p');
            p.innerHTML = this.question[i];
            document.body.appendChild(p);

            ul = document.createElement('ul');
            p.appendChild(ul);

            answ = this.answers[i].length;

            for (var j = 0; j < answ; j++) {
                li = document.createElement('li');
                ul.appendChild(li);

                checkbox = document.createElement ('input');
                checkbox.setAttribute('type','checkbox');
                checkbox.setAttribute('id', 'check' +i+j);
                li.appendChild(checkbox);

                label = document.createElement ('label');
                label.setAttribute('for', 'check' +i+j);
                li.appendChild(label);

                txtEl = document.createTextNode(this.answers[i][j]);
                label.appendChild(txtEl);

                }
            }
    },

    init: function () {
      progTest.questions();
      console.log(progTest);
      progTest.render();
      progTest.createButton();
    },

    createButton: function () {
        var submitRes = document.createElement('input');
        submitRes.setAttribute('type', 'submit');
        submitRes.setAttribute('value', this.checkres);
        document.body.appendChild(submitRes);
    }
}

progTest.init();
