<<<<<<< HEAD
// Profile Images Collection

ProfileImages = new FS.Collection("ProfileImages", {

    stores: [new FS.Store.GridFS("ProfileImages")]
});

ProfileImages.allow({
    insert: function (userId,doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
  
    download: function () {
            return true;
        }
});


UserImages = new Mongo.Collection("UserImages");


Posts = new Mongo.Collection("posts");


Posts.attachSchema(new SimpleSchema({
    body: {
        type: String,
        max: 500
    },
    userId: {
        type: String,
        autoValue: function () { return Meteor.userId()}
    },
    username: {
        type: String,
        autoValue: function () { return Meteor.users.findOne({_id: this.userId}).username}
    },
    createdAt: {
        type: Date,
        autoValue: function () { return new Date() }
    }
}));

Posts.allow({
    insert: function (userId, doc) {
        return true;
    }
 });


=======
Images = new FS.Collection('Images',{
	stores: [new FS.Store.GridFS('Images')],
		filter:{
			allow: {
				contentTypes: ['image/*']
			},
			onInvalid: function(message){
				FlashMessage.sendError(message);
			}
		}
});

Images.allow({
	insert: function(){return true;},
	update: function(){return true;},
	download: function(){return true;}
});

ImageInfo = new Mongo.Collection('imageinfo');
>>>>>>> 7e21053e0f9f4962d36b0d8da946479da4bad0af
