import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    savePost(formInputs) {
      var newPost = this.store.createRecord('post', formInputs);
      newPost.save();
      this.transitionTo('index');
    },
    deleteComment(comment) {
      debugger;
      var post = comment.get('post');
      comment.destroyRecord().then(function() {
        post.save();
      });
      this.transitionTo('post');
      // comment.destroyRecord();
      // this.transitionTo('post');
    }
  }
});
