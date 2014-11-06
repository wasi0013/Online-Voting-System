//create stubs for all the collections
// nationalvote = new Meteor.Collection('nationalvote')
// nationalvoter = new Meteor.Collection('nationalvoter')
// admin = new Meteor.Collection('admin')

// history = new Meteor.Collection('history')

// userinfo= new Meteor.Collection('userinfo')

// quickvote =  new Meteor.Collection('quickvote')
// quickvoter = new Meteor.Collection ('quickvoter')

Meteor.methods({
    //inserts of all collection
    nationalvote_insert: function(data){
        return nationalvote.insert(data)
    },
    userinfo_insert: function(data){
        return userinfo.insert(data)
    },
    admin_insert: function(data){
        return admin.insert(data)
    },
    quickvote_insert: function(data){
        return quickvote.insert(data)
    },
    quickvoter_insert: function(data){
        return quickvote.insert(data)
    },

    //remove items from collections
    quickvote_remove: function(data){
        return quickvote.remove(data);
    },
    quickvoter_remove: function(data){
        return quickvoter.remove(data)
    },
    nationalvote_remove: function(data){
        return nationalvote.remove(data)
    },
    nationalvoter_remove: function(data){
        return nationalvoter.remove(data);
    }


})