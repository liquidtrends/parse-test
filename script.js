$(function() {
  console.log("Script Ready");
  Parse.initialize("1Wdznm0p5FSzZa8JuaNwcHr9gJOvSaI6TrZlswtY", "TOB1rXMnKT8WR9z3couSDfjNevEZKzkxhosZqKL2");
 
  function addReco(emailAddress, target, problem, solution, feasibility, successCb) {
    var Reco = Parse.Object.extend("RecoApp");
    var reco = new Reco();
    var parsePromise = reco.save({emailAddress: email, target: target, problem: problem, solution: solution, feasibility: feasibility})

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

    addReco(emailAddress, target, problem, solution, feasibility, onSuccess);
    return false;
  });

  function resetForm(formElement) {
    formElement.reset();
  }

  var loadContacts = function() {
    console.log("Loading from Parse");
    var Reco = Parse.Object.extend("RecoApp");
    var query = new Parse.Query(Reco);
    query.find({
      success: function(results) {
        var newLIs = results.map(function(element) {
          return $("<li>", { text: element.attributes.name + ": " + element.attributes.email } );
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };

});

