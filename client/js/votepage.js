//js file for controlling votepage

Template.quickVote.events({
    'click #c-register': function (evt, template) {
        // ...username holds voterid
        usern = template.find("#c-username").value
        if (Meteor.user().username ==usern && usern != undefined && quickvote.find({username:usern})?(quickvote.find({username:usern}).count()==0):true){

            quickvote.insert({username:usern, votecount:0 });
            alert("You are now registered as a candidate!");
            console.log("You are now registered as a candidate!")


        }
        else{

            alert("You are already registered")
            console.log("registration Error: already registered")
        }
    }
});