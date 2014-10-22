console.log("Hello From server ");

if(Meteor.users.find().count()===0){

   Accounts.createUser({
        username: "admin",
        email: "admin@admin.com",
        password: "admin",
        })
    userinfo.insert({
        username: "admin",
        email: "admin@admin.com",
        });

}

Meteor.publish("users",function(){

    return Meteor.users.find();
})
Meteor.publish("userinfo",function(){

    return userinfo.find();
})

userinfo.allow({
    insert: function (userId, doc) {
        return true
    },
    
});

/*
profile

username: "voterid",

email: "email@email.com",
profile: {
    status: "Candidate/voter",
    DOB: "date of birth",
    bloodGroup: "o+",
    position: "Prime  Minister",
    votecount: "0",
    address: "",
    district: "",
    pourashava: "",
    cityCorporation: "",
    Upozilla:"",

    
}


*/



