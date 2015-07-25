/**
 * Created by Yogi on 7/21/2015.
 */

Template.contextExample.rendered = function(){
    console.log('Rendered Context Example', this.data);
};

Template.contextExample.helpers({
    logContext: function() {
        console.log('Context Log Helper', this);
        return Session.get('randomNumber');
    }
});

Template.contextExample.events({
    'click button': function(e, template){
        console.log('click button');
        Session.set('randomNumber', 1);
    }
});