$(function() {
  console.log("Script Ready");
  Parse.initialize("0Gc5m4wAAeGfNRigRW1oWQXHAuUUOVRahET7WEmS", "agIgEKyISGDFid3kEWjgmWogEzMg2TVClrnbpAKc");
  function addSocialCount(twitter, linkedin, stackoverflow, angellist, successCb) {
    console.log(twitter)
    var SocialCount = Parse.Object.extend("SocialCount");
    var socialcount = new SocialCount(); 
   var parsePromise = socialcount.save({twitter: twitter, linkedin: linkedin, stackoverflow: stackoverflow, angellist: angellist});

    parsePromise.then(successCb, function(error) {
      alert("could not save record");
    });
  }

  $("form").on("submit", function() {

    var twitter = $("input[name=twitter]").val();
    var linkedin = $("input[name=linkedin]").val();
    var stackoverflow = $("input[name=stackoverflow]").val();
    var angellist = $("input[name=angellist]").val();
    var onSuccess = function() {
      $('.formBox').hide();
      $('.successBox').show();
    }

   addSocialCount(twitter, linkedin, stackoverflow, angellist, onSuccess);
    return false;
  });

  function resetForm(formElement) {
    formElement.reset();
  }


});
$(function(chart) {
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

});
