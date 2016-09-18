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
