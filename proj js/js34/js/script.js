  var progTest = {
    title: "Тест по программированию",
    questions: ["Вопрос №1", "Вопрос №2" , "Вопрос №3"],
    answers: [["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
              ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
              ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"]],

    testTitle : function(title) {
        var div = document.createElement('div');
        div.innerHTML = title;
        document.body.appendChild(div);
        // console.log(this.questions.lenght);
    },

    createForm: function () {
        this.formOfTest = document.createElement('form');
        document.body.appendChild(this.formOfTest);

    show : function () {
          var q = this.questions.lenght;
          var answ,ul,li,p,checkbox;

          for (var i=0;i<q;i++) {
              p = documentElement('p');
              p.innerHTML = this.questions[i];
              document.body.appendChild('p');
          }

          ul = document.createElement('ul');
          p.appendChild(ul);

          answ = this.answers[i].lenght;

          for (var j=0;j<answ;j++) {
              li = documentElement('li');
              checkbox = documentElement ('input');
              checkbox.setAttribute('type','checkbox');
              li.innerHTML = this.answers[i][j];
              ul.appendChild(li);
              li.appendChild(checkbox);
          }

    },

    createButton : function () {
      var submitRes = document.createElement('input');
      submitRes.setAttribute('type', 'submit');
      submitRes.setAttribute('value', 'Проверить мои результаты');
      this.formOfTest.appendChild(this.submitRes)
    },

    progTest.testTitle();
    progTest.answers[0][1] = "Новый вариант ответа";
    console.log(progTest);
    progTest.show();
    progTest.createButton();
