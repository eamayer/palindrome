var palidrome = function(word) {
  if (word === reverse) {
    return true;
  }  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var word = $("#word").val();
    var reverse = word.split("").reverse().join("");

    $(".word").text(word);

    if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }
      
      $("#result").show();
  });
});
