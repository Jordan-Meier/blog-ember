import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('deleteComment', comment);
      }
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
