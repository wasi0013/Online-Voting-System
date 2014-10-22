Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
waitOn: function() { return [Meteor.subscribe("users")
,Meteor.subscribe("userinfo")
]; }

});

Router.map(function() {
this.route('loginSignup', {path: '/loginSignup'});
this.route('signup',{path: '/signup'});
this.route('home',{path: '/'})
this.route('userInformation',
    {
        path: '/userInformation/:_id',
        data: function(){
            return userinfo.findOne({username:this.params._id});

        }
    }
    )
this.route('quickVote',{path: '/quickVote'})
this.route('nationalVote',{path: '/nationalVote'})
this.route('stats',{path:'/stats'})




});


Router.onBeforeAction('loading');
