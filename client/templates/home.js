/**
 * Created by Yogi on 7/21/2015.
 */

Template.home.created = function() {
    console.log('Created the home template');

    this.autorun(function() {
        //alert(Session.get('mySessionExample'));
    });
};

Template.home.rendered = function(){
    console.log('Rendered the home template');
    //this.$('p').html('We just replaced that text!');
};

Template.home.destroyed = function() {
    console.log('Destroyed the home template');
};

Template.home.helpers({
    postsList: function() {
        return Posts.find({}, {sort: {timeCreated: -1}});
    },
    sessionExample: function() {
        return Session.get('mySessionExample');
    }
});

Template.home.events({
    'click button.lazyload': function(e, template) {
        var currentLimit = Session.get('lazyloadLimit');
        Session.set('lazyloadLimit', currentLimit + 2);
    }
});
