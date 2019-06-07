$(document).ready(function() {
  $("#survey form").submit(function(event) {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    var q5 = $("input:radio[name=q5]:checked").val();
    var allQs = q1.concat(q2,q3,q4,q5);
    console.log(allQs);

    var  rubyWordCount = function rWordCount(allQs) {
      return allQs.split("ruby").length - 1;
    };
    var swiftWordCount = function sWordCount(allQs) {
      return allQs.split("swift").length - 1;
    };
    var pythonWordCount = function pWordCount(allQs) {
      return allQs.split("python").length - 1;
    };

    console.log(rubyWordCount(allQs));
    console.log(swiftWordCount(allQs));
    console.log(pythonWordCount(allQs));

    if (rubyWordCount(allQs) > swiftWordCount(allQs) && rubyWordCount(allQs) > pythonWordCount(allQs)) {
      console.log("ruby");
      $(".ruby").show();
    }
    if (pythonWordCount(allQs) > swiftWordCount(allQs) && pythonWordCount(allQs) > rubyWordCount(allQs)) {
      console.log("python");
      $(".python").show();
    }
    if (swiftWordCount(allQs) > pythonWordCount(allQs) && swiftWordCount(allQs) > rubyWordCount(allQs)) {
      console.log("swift");
      $(".swift").show();
    }
    else if (swiftWordCount(allQs) < pythonWordCount(allQs) && swiftWordCount(allQs) < rubyWordCount(allQs)) {
      $(".tieNotSwift").show();
    }
    else if (pythonWordCount(allQs) < swiftWordCount(allQs) && pythonWordCount(allQs) < rubyWordCount(allQs)) {
      $(".tieNotPython").show();
    }
    else if (rubyWordCount(allQs) < pythonWordCount(allQs) && rubyWordCount(allQs) < swiftWordCount(allQs)) {
      $(".tieNotRuby").show();
    }
    $("#survey").hide();

//     allQs.prototype.count=function(q1) {
//     return (this.length - this.replace(new RegExp(q1,"g"), '').length) / q1.length;
// }
  });
});
