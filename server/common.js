Meteor.publish("posts", function () {
     return Posts.find();


});


Meteor.publish("ProflieImages", function () {
    return ProfileImages.find();


});

Meteor.publish("UserImages", function () {
    return UserImages.find();


});