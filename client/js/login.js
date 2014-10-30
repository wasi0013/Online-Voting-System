//Login and signup templates events handlers

Template.signup.events({

    'click #su-signup': function (evt,template){
        evt.preventDefault();
        var flag=true
        if(userinfo.find({username: template.find("#su-username").value}).count()>0){
        alert("The voterid is already registered!");
    }
    else{
    Accounts.createUser({
        username: template.find("#su-username").value,
        email: template.find("#su-email").value,
        password: template.find('#su-password').value,
        },
        function (err){
            if (err){
                console.log(err)
                
                flag=false;



            }
        })

     if (flag){       
                alert("Signup successful")
                userinfo.insert({
                    username: template.find("#su-username").value,
                    email: template.find("#su-email").value,
                    profile:{
                        name: template.find("#su-name").value,
                        father:template.find("#su-father").value,
                        mother:template.find("#su-mother").value,
                        address:template.find("#su-address").value,
                        DOB: template.find("#su-DOB").value,
                        upozilla:template.find("#su-upozilla").value,
                        pourashava:template.find("#su-pourashava").value,
                        citycorporation:template.find("#su-citycorporation").value,
                        district: template.find("#su-district").value,
                        blood: template.find("#su-bloodgroup").value,
                        contact:template.find("#su-contact").value,
                        },
                    })
                 
        
            }

    }




}
})


Template.login.events({
    'click #li-login': function (evt,template){
        evt.preventDefault()
        Meteor.loginWithPassword(
            template.find('#li-username').value,
            template.find("#li-password").value,
            function(error) {
              if (error) {
                alert("login failed, Error: "+error.message)
                
                 
              }else{
                
              }
            }


            )

    }


})

Template.logout.events({
    'click #lo-logout': function (evt, template){
        evt.preventDefault()
        Meteor.logout()


    }


})