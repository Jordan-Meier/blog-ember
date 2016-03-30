import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true)
    },
    updatePost(post) {
      // debugger;
      var updateInputs = {
        title: this.get('title'),
        category: this.get('category'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, updateInputs);
    }
  }
});
