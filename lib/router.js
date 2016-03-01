Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

    this.route('posts',{
       path: '/',
       template: 'posts'

    });
    this.route('about');
    
    this.route('profile');
	this.route('home',{
		path: '/',
		template: 'home'
	});
});