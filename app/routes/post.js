import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post, updateInputs) {
      Object.keys(updateInputs).forEach(function(key) {
        if(updateInputs[key]!==undefined) {
          post.set(key, updateInputs[key]);
        }
      });
      post.save();
      this.transitionTo('post');

    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
