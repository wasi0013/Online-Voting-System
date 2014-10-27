//js file for controlling votepage

Template.quickVote.events({
    'click #c-register': function () {
        // ...username holds voterid
        username = template.find("#c-username").value
        if (Meteor.user().username ==username){


        }
    }
});