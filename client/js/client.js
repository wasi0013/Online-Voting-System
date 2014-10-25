
Template.quickVote.helpers({ isAdmin: function (){

    return Meteor.user()? (
        Meteor.user().username==="admin"?
                true:false
        )
    :false;

}})