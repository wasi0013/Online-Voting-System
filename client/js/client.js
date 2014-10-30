
Template.quickVote.helpers({ isAdmin: function (){

    return Meteor.user()? (
        Meteor.user().username==="admin"?
                true:false
        )
    :false;

}})

Template.nationalVote.helpers({ isAdmin: function (){

    return Meteor.user()? (
        Meteor.user().username==="admin"?
                true:false
        )
    :false;

}})

function logRenders () {
    _.each(Template, function (template, name) {
      var oldRender = template.rendered;
      var counter = 0;
 
      template.rendered = function () {
        console.log(name, "render count: ", ++counter);
        oldRender && oldRender.apply(this, arguments);
      };
    });
  }


 

