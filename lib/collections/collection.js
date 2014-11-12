nationalvote = new Meteor.Collection('nationalvote')
nationalvoter = new Meteor.Collection('nationalvoter')
admin = new Meteor.Collection('admin')

history = new Meteor.Collection('history')

userinfo= new Meteor.Collection('userinfo')

quickvote =  new Meteor.Collection('quickvote')
quickvoter = new Meteor.Collection ('quickvoter')

party = new Meteor.Collection('party')




/*
collection 
party:
    Partyame: "name"
    username: "leaderid"
    votecount:
seat:
    seatname:
    username:
    votecount:
    partyname:

seatvoter:
  username:""

votes.insert({
   username: "something",
   votecount: "0",
    }
    
}) 


history.insert({
    votename:"quickvote",
    startdate: "",
    enddate: "",
    summary: "vote in progress",

    })

history:
---------------------------
votename:
startdate:
enddate:
summary:"vote will occur at:" /"vote finished and the winner"
User information structure:

username==voterid
email: email address
profile:
    name:
    fathername:
    mothername:
    contact:
    position: 
    DOB:
    Blood Group:
    address:
    district:
    pourashava:
    citycorporation:
    Upozilla:

*/

