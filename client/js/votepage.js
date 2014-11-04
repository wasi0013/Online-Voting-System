Template.quickVote.events({
    'click #c-register': function (evt, template) {
        // ...username holds voterid
        evt.preventDefault()
        usern = template.find("#c-username").value
        if ((Meteor.user()!=null?(Meteor.user().username ==usern):false) && usern !=undefined && usern!="" && (quickvote.find()!=null?(quickvote.find({username:usern}).count()==0):false)){

            quickvote.insert({username:usern, votecount:0 });
            alert("You are now registered as a candidate!");
            console.log("You are now registered as a candidate!")


        }
        else{

            alert("Registration error: Not logged in or already registered")
            console.log("registration Error: already registered")
        }
    },

    'click #start-vote': function (evt,template){
        evt.preventDefault()
        enddate=template.find('#end-date').value.split('-')

        enddate=enddate.concat(template.find("#end-time").value.split(':'))
        admins= admin.find({votename:"quickvote"})

        admin.update({"_id":admins._id},{$set:{"votename":"quickvote","startdate": new Date(),"enddate":enddate,"status":"on"}})
        console.log("quick vote started")

    } 



});