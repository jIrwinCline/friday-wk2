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
    var allQs = q1.concat(q2,q3,q4,q5);
    console.log(allQs);

    rubyWordCount = function WordCount(allQs) {
      return allQs.split("ruby").length - 1;
    };
    swiftWordCount = function WordCount(allQs) {
      return allQs.split("swift").length - 1;
    };
    pythonWordCount = function WordCount(allQs) {
      return allQs.split("python").length - 1;
    };

console.log(rubyWordCount(allQs));
console.log(swiftWordCount(allQs));
console.log(pythonWordCount(allQs));

//     allQs.prototype.count=function(q1) {
//     return (this.length - this.replace(new RegExp(q1,"g"), '').length) / q1.length;
// }
  });
});
