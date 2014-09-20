Router.configure({
layoutTemplate: 'layout'
});
Router.map(function() {
this.route('loginSignup', {path: '/loginSignup'});
this.route('signup');
this.route('home',{path: '/'})


});