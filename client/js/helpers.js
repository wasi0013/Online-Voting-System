Template.quickVote.helpers({ 

  isAdmin: function (){


    return Meteor.user()? (
        Meteor.user().username==="admin"?
                true:false
        )
    :false;

    },

  regcandidate: function(){

    return quickvote.find({}, {
      fields: {'votecount':false}
      });
  },
  quickstatus: function(){
    
    return admin.findOne({"votename":"quickvote"})["status"]=="off";
  }



  

})

Template.nationalVote.helpers({ 

  isAdmin: function (){

    return Meteor.user()? (
        Meteor.user().username==="admin"?
                true:false
        )
    :false;

},

 nationalstatus: function(){
    
    return admin.findOne({"votename":"nationalvote"})["status"]=="off";
  }

})

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


 

