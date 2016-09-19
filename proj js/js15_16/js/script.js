//part 1 - searchbar

function searcher() {
  $("#results").empty();

var txt = $("#text").val();
console.log(txt);
$.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q="+txt+"&image_type=photo",
  function(data) {
    $.each(data.hits, function(i,item){
      $("<img/>").attr("src", item.previewURL).appendTo("#results");
    });
  });
};

$(function () {
  $("#text").keydown(function(e) {
    if(e.keyCode == 13) {
    console.log('results');
    searcher();
    }
  });
  $("#search").click(function(e) {
    console.log('results');
    searcher();
  });
});


//part 2 - prototipes and creating child-classes

function Human() {
  this.name = 'Kirill';
  this.age = 31;
  this.sex = 'male';
  this.height = 180;
  this.weight = 70;
}

// child-class #1:
function Worker() {
  this.job = 'GoIT';
  this.salary = 'volonteer';
  this.goWork = function () {
    alert('working=studing!');
  };
};

Worker.prototype = new Human();
var newWorker = new Worker;
console.log('newWorker age', newWorker.age);

// child-class exemplar
var newWorker1 = new Worker;
// check parent properties:
console.log('newWorker1 sex', newWorker1.sex);
console.log('newWorker1', newWorker1)

// child-class #2:
var Student = function() {
  this.study = 'University';
  this.scholarship = '1000';
  this.lookSerials = function () {
    console.log('This way i rest');
  };
};

Student.prototype = new Human();
var newStudent = new Student;
console.log('newStudent weight', newStudent.weight);
console.log('newStudent.scholarship', newStudent.scholarship);

// child-class exemplar
var newStudent1 = new Student;
// check parent properties:
console.log('newStudent1.name', newStudent1.name);
console.log('newStudent1', newStudent1);
newStudent1.lookSerials();
