Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

    
    this.route('about');
    
    this.route('profile');
	  this.route('home',{
		path: '/',
		template: 'home'
	});
});