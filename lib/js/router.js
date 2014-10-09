Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
//waitOn: function() { return true; }

});

Router.map(function() {
this.route('loginSignup', {path: '/loginSignup'});
this.route('signup');
this.route('home',{path: '/'})
this.route('userInformation')
this.route('quickVote')
this.route('nationalVote')
this.route('stats')




});


Router.onBeforeAction('loading');
