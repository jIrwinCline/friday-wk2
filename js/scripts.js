$(document).ready(function() {
  console.log("here1");
  $("#survey form").submit(function(event) {
    event.preventDefault();
    console.log("here2");
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    var q5 = $("input:radio[name=q5]:checked").val();
  });
});
