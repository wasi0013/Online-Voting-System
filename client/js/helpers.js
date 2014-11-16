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
  },



  

})
Template.quickstats.helpers({
  winner: function(){
    winners=quickvote.find({},{sort:{votecount:-1},limit:1}).fetch()[0]
    return  userinfo.find({username:winners.username})
  }



})

Template.nationalstats.helpers({

  party: function(){
    return party.find()
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
  },
  party: function(){

    return party.find({},{fields: {username:true,partyname:true}});
  },
  seat: function(){

    return admin.find({data:"seat"},{"seats":true})
  },
  nationalvote:function(){

    return nationalvote.find({},{votecount:false})
  }
  

}

)

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


 

