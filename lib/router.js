Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
<<<<<<< HEAD

    this.route('posts',{
       path: '/',
       template: 'posts'

    });
    this.route('about');
    
    this.route('profile');
=======
	this.route('home',{
		path: '/',
		template: 'home'
	});
>>>>>>> 7e21053e0f9f4962d36b0d8da946479da4bad0af
});