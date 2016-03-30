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
    }
  }
});
