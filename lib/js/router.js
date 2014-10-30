Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',

});

Router.map(function() {

this.route('loginSignup',{

    path: '/loginSignup',

    waitOn: function() { return [Meteor.subscribe("users")
    ,Meteor.subscribe("userinfo")]; 
    }


});

this.route('signup',{
    path: '/signup',
    waitOn: function() { return [Meteor.subscribe("users")
    ,Meteor.subscribe("userinfo")]; 
    }

});


this.route('home',{
    path: '/'
})

this.route('userInformation',{

        path: '/userInformation/:_id',
        data: function(){
            return userinfo.findOne({username:this.params._id});

        },
        waitOn: function() { return [Meteor.subscribe("users")
    ,Meteor.subscribe("userinfo")]; 
    }

})
this.route('quickVote',{
    path: '/quickVote',
    waitOn: function() { return [Meteor.subscribe("users")
    ,Meteor.subscribe("userinfo"),Meteor.subscribe('quickvote')]; 
    }
})

this.route('nationalVote',{
    path: '/nationalVote'
})

this.route('stats',{
    path:'/stats'

})




});


Router.onBeforeAction('loading');
