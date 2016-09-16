'use strict';

// write data to-, and read it from localStorage:

var progTest = {
    title: 'Programming test',
    questions: ['Who are you?','What does JS mean?','Why go FrontEnd?'],
    answers: [['GOiT Student', 'Dog, name = Jack', 'Boss'],
    ['JabaSprint', 'JavaScript', 'I Dont know'],
    ['I want to create sites', 'I like music', 'I am genius of programming']],
    correctAnswers: [0,1,0]
};

// write data to-, and read it from localStorage:
localStorage.setItem('test_tmpl',JSON.stringify(progTest));
var storageTest = localStorage.getItem('test_tmpl');
console.log(storageTest);
var storageTestObj = JSON.parse(storageTest);
console.log(storageTestObj);

// template rendering
var html = $(test_tmpl).html();
var content = tmpl(html, storageTestObj);
$('.wrapper').append(content);

// check unswers and show result
$("#checkres").click(function() {
  if($("#a00 input:checked").length==1 && $("#a11 input:checked").length==1 && $("#a20 input:checked").length==1)
    {$("#result").html('Gongratulations! You passed the test');
     clearForm("quiz");
  } else {$("#result").html('Sorry, you answers are incorrect. Try again');
          clearForm("quiz");
    }
});

// clear answers in form
function clearForm(name) {
  var delAnswer = $('input:checked');
  for (var i = 0; i < delAnswer.length; i++) {
        delAnswer[i].checked = false;
      }
};

localStorage.clear();
