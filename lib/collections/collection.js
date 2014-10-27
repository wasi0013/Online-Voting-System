votes= new Meteor.Collection('votes')

nationalvote = new Meteor.Collection('nationalvote')

history = new Meteor.Collection('history')

userinfo= new Meteor.Collection('userinfo')




/*

votes.insert({
    votename:"QuickVote",
    data: {
        "1234": "0",
        "5678": "0",
        "1221": "0",
        "1235": "0",

    }
    
})

votes structure:
--------------------------
#votename: "citycorporation"
votearea: "chittagong"
data:
    voterid:'votecount'
voted: 'array of voterid'

nationalvote structure:
--------------------------

#votename: "national election 2014"
team:
    teamaname: "SOMEPARTY"
    #voterid: "leader's id"
    seatcount: 12
    data:
        #voterid: teammember's id
        votecount:
        seatname:
winningteamleader: "voterid"


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

