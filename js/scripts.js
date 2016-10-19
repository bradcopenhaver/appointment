$(document).ready(function() {
  $("form#booking").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var date = $("input#date").val();
    var start = $("input#start").val();
    var end = $("input#end").val();

    $("#name1").text(name);
    $("#date1").text(date);
    $("#start1").text(start);
    $("#end1").text(end);
  });
});
