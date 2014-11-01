// Initialize Parse //
$(function() {
  console.log("Script Ready");
  Parse.initialize("0Gc5m4wAAeGfNRigRW1oWQXHAuUUOVRahET7WEmS", "agIgEKyISGDFid3kEWjgmWogEzMg2TVClrnbpAKc");

var SocialCount = Parse.Object.extend("SocialCount");
var query = new Parse.Query(SocialCount);
var socialData = Parse.Collection.extend({
      model: SocialCount
});

// Fetch Data //
var socialData = new SocialCount();
socialData.fetch({
   success: function(socialData) {
      console.log(socialData);
      var dashboardView = new DashboardView({ collection: socialData });
      dashboardView.render();
      $('.main-container').html(DashboardView.el); 
   },
   error: function(socialData, error) {
     console.log(error);
   } });
 });

// Template  //
var DashboardView = Parse.View.extend({
    template: Handlebars.compile($('#social-tpl').html()),
    render: function(){
       var collection = {SocialCount: this.collection.toJSON() };
       this.$el.html(this.template(collection));
     }
  });


