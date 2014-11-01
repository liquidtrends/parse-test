$(function() {
  console.log("Script Ready");
  Parse.initialize("1Wdznm0p5FSzZa8JuaNwcHr9gJOvSaI6TrZlswtY", "8o818BzckfnCL1QdIrQW0gWq5ZkhYTq8m8GgRScX");
  function addReco(email, target, problem, solution, feasibility, successCb) {
    console.log(email)
    var Reco = Parse.Object.extend("Reco");
    var reco = new Reco(); 
   var parsePromise = reco.save({emailAddress: email, target: target, problem: problem, solution: solution, feasibility: feasibility});

    parsePromise.then(successCb, function(error) {
      alert("could not save record");
    });
  }

  $("form").on("submit", function() {

    var Email = $("input[name=email]").val();
    var Target = $("input[name=target]").val();
    var Problem = $("input[name=problem]").val();
    var Solution = $("input[name=solution]").val();
    var Feasibility = $("input[name=feasibility]").val();
    var onSuccess = function() {
      resetForm($("form")[0]);
      console.log("Booyaa");
    }

   addReco(Email, Target, Problem, Solution, Feasibility, onSuccess);
    return false;
  });

  function resetForm(formElement) {
    formElement.reset();
  }


});

$("[data-slider]")
    .each(function () {
      var input = $(this)
      $("<span>")
        .addClass("output")
        .insertAfter($(this));
    })
    .bind("slider:ready slider:changed", function (event, data) {
      $(this)
        .nextAll(".output:first")
          .html(data.value.toFixed(3));
    });
