Template.quickVote.events({
    'click #c-register': function (evt, template) {
        // ...username holds voterid
        evt.preventDefault()
        usern = template.find("#c-username").value
        if ((Meteor.user()!=null?(Meteor.user().username ==usern):false) && usern !=undefined && usern!="" && (quickvote.find()!=null?(quickvote.find({username:usern}).count()==0):false)){

            //quickvote.insert({username:usern, votecount:0 });
            Meteor.call("quickvote_insert",{username:usern, votecount:0 });
            
            bootbox.alert("<h3 class='text-success'> You are now registered as a candidate!</h3>");
            console.log("You are now registered as a candidate!")


        }
        else{

            bootbox.alert("<h3 class='text-success'>Registration error: Not logged in or already registered </h3>")
            console.log("registration Error: already registered")
        }
    },

    'click #start-vote': function (evt,template){
        evt.preventDefault()
        enddate=template.find('#end-date').value.split('-')

        enddate=enddate.concat(template.find("#end-time").value.split(':'))
        admins= admin.find({votename:"quickvote"}).fetch()[0]
        //admin.update({"_id":admins._id},{$set:{"votename":"quickvote","startdate": new Date(),"enddate":enddate,"status":"on"}})
        Meteor.call("admin_update",{"_id":admins._id},{$set:{"votename":"quickvote","startdate": new Date(),"enddate":enddate,"status":"on"}})

        //console.log(admin.find({votename:"quickvote"}).fetch()[0])
        //alert(admins._id["_str"])
        
        


        console.log("quick vote started")
        location.reload()


    }, 
    'click #reset-vote': function (evt,template){
        bootbox.confirm("Are you sure want to reset Quickvote?",function(result) {
            if(result){
        evt.preventDefault()
        admins= admin.find({votename:"quickvote"}).fetch()[0]
        Meteor.call("admin_update",{"_id":admins._id},{$set:{"votename":"quickvote","startdate": new Date(),"enddate":["2013","12","13","13","13"],"status":"off"}})
        //admin.update({"_id":admins._id},{$set:{"votename":"quickvote","startdate": new Date(),"enddate":["2013","12","13","13","13"],"status":"off"}})
        //console.log(admin.find({votename:"quickvote"}).fetch()[0])
        //alert(admins._id["_str"])
        
        Meteor.call("quickvote_remove",{})
        Meteor.call("quickvoter_remove",{})

        console.log("quick vote reseted")
        alert("Quick Vote Reseted")
        location.reload()
        }



    })},
    'click #vote': function(evt,template){
        evt.preventDefault()
        admins= admin.find({votename:"quickvote"}).fetch()[0]

        if(admins["status"]=="on"){
            //todo vote increment
            if(Meteor.user()!=null ){
                console.log("quick voting")
                //voterid of who is voting
                voterid=Meteor.user().username
                
                if(quickvoter.find({username:voterid}).count()==0){
                //voterid of whome he/she voted for
                candidates=template.find("#candidates").value
                //increment votecount of the candidate
                Meteor.call("quickvote_update",{"username":candidates},{$inc:{votecount:1}})
                //add the user in voted list
                Meteor.call("quickvoter_insert",{"username":voterid})
                console.log("succeed")
                }
                else{
                    bootbox.alert("You already Voted once!")
                }
            }else{

                bootbox.alert("Not logged in")
            }

        }
        else{
            
            bootbox.alert("No vote is running")
        }


    }



});

Template.nationalVote.events({
    'click #start-vote': function (evt,template){
        //not tested
        evt.preventDefault()
        enddate=template.find('#end-date').value.split('-')

        enddate=enddate.concat(template.find("#end-time").value.split(':'))
        admins= admin.find({votename:"nationalvote"}).fetch()[0]
        //admin.update({"_id":admins._id},{$set:{"votename":"nationalvote","startdate": new Date(),"enddate":enddate,"status":"on"}})
        Meteor.call("admin_update",{"_id":admins._id},{$set:{"votename":"nationalvote","startdate": new Date(),"enddate":enddate,"status":"on"}})

        //console.log(admin.find({votename:"quickvote"}).fetch()[0])
        //alert(admins._id["_str"])
    
        console.log("National vote started")
        location.reload()


    },
     'click #reset-vote': function (evt,template){
        //not tested yet
        bootbox.confirm("<h3 class='text-danger'>Are you sure want to reset National Vote?</h3>",function(result) {
            if(result){
        evt.preventDefault()
        admins= admin.find({votename:"nationalvote"}).fetch()[0]
        Meteor.call("admin_update",{"_id":admins._id},{$set:{"votename":"nationalvote","startdate": new Date(),"enddate":["2013","12","13","13","13"],"status":"off"}})
        //admin.update({"_id":admins._id},{$set:{"votename":"nationalvote","startdate": new Date(),"enddate":["2013","12","13","13","13"],"status":"off"}})
        //console.log(admin.find({votename:"nationalvote"}).fetch()[0])
        //alert(admins._id["_str"])
        Meteor.call("nationalvote_remove",{})
        Meteor.call("nationalvoter_remove",{})
        Meteor.call("party_remove",{})

        console.log("National vote aborted")
        bootbox.alert("<h3 class='text-warning'>National Vote reseted!</h3>")
        location.reload()
        }
        })
    },

        'click #candidate-register': function (evt,template){

            partyname=template.find("#team-name").value
            seatname=template.find("#seat-name").value
            voterid=template.find("#candidate-username").value
            

              if ((Meteor.user()!=null?(Meteor.user().username ==voterid):false) && voterid !=undefined && voterid!="" && (nationalvote.find()!=null?(nationalvote.find({username:voterid}).count()==0):false)){

            console.log("Registering candidate")
            Meteor.call("nationalvote_insert",{"username":voterid,"seatname":seatname,"partyname":partyname,"votecount":0})
            console.log("success")
            bootbox.alert("<h3><p class='text-success'>You are now registered as a candidate!</p></h3>");
            

        }
        else{

            bootbox.alert("<h3><p class='text-danger'>Registration error: Not logged in or already registered</p></h3>")
            console.log("registration Error: already registered")
        }

            



        },
        'click #party-register': function (evt,template){

            partyname=template.find("#c-teamname").value
            voterid=template.find("#c-username").value
            if(Meteor.user()==null){
                bootbox.alert("<h3><p class='text-danger'>Error: Not Logged in</p></h3>")
            }
            else if(Meteor.user().username!=voterid || voterid==undefined || voterid==""){
                bootbox.alert("<h3> <p class='text-danger'>Error: Mismatch Invalid voter id</p></h3>")
            }
            else if(!(party.find()!=null?(party.find({username:voterid}).count()==0 && party.find({"partyname":partyname}).count()==0):false)){
                bootbox.alert("<h3> <p class='text-danger'>Error: Party/Party Leader already registered!</p></h3>")
            }
            else{
            console.log("Registering party")
            Meteor.call("party_insert",{"username":voterid,"partyname":partyname,"votecount":0})
            console.log("success")
            }




        },

        'click #ok' : function (evt,template){
            evt.preventDefault()
            if(Meteor.user()==null) bootbox.alert("<h3 class='text-danger'>Error: Login required</h3>")
            else if(nationalvoter.find({username:Meteor.user().username}).count()!=0){
                bootbox.alert("<h3><p class='text-danger'>Error: You already voted!</p></h3>")
            }
            else{

            seatname=template.find("#seats").value
            lists=' <select class="btn btn-default" required id="candidate-list">'
            nationalvote.find({"seatname":seatname}).forEach(function(data){
                lists+='<option>'+data.username+"</option>"

            })
            lists+="</select>"
            
            bootbox.dialog({
                title: "Cast your  Vote",
                message: '<label class="col-md-4 control-label" for="candidate">Choose Candidate: </label> ' +lists,

                buttons: {
                    success: {
                        label: "Vote",
                        className: "btn-success",
                        callback: function () {
                            votersid = $('#candidate-list').val();
                            Meteor.call("nationalvote_update",{"username":votersid},{$inc:{votecount:1}})
                            Meteor.call("nationalvoter_insert",{"username":Meteor.user().username})
                            partynamenv= nationalvote.find({"username":votersid},{partyname:true}).fetch()[0]
                            Meteor.call("party_update",{"partyname":partynamenv.partyname},{$inc:{votecount:1}})
                            console.log("success")
                        }
                    }

            }
        })
        }

        },
        





})