'use strict';

// write data to-, and read it from localStorage:

var progTest = {
    title: 'Programming test',
    questions: ['Who are you?','What does JS mean?','Why go FrontEnd?'],
    answers: [['GOiT Student', 'Dog, name = Jack', 'Boss'],
    ['JavaScript', 'JabaSprint', 'I Dont know'],
    ['I want to create sites', 'I like music', 'I am genious of programming']],
    true: [0,0,0]
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
$('body').append(content);

//check answers
$(checkres).click(function () {console.log('check', checkres);
if($("#answers input:checked").each(function() { console.log(this);})
else {console.log('wrong')};
});
