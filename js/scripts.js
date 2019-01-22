$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var variables = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    variables.forEach(function(variable){
      var userInput = $("input#" + variable).val();
      $("." + variable).text(userInput);
    });





    $("#story").show();

    event.preventDefault();
  });
});
