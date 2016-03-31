import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      posts: this.store.findRecord('post', params.post_id),
      comments: this.store.findAll('comment')
    });

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
      var comment_deletions = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveComment(params) {
      // var newComment = this.store.createRecord('comment', params);
      // newComment.save();
      // this.transitionTo('post');

      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post');
    },
    deleteComment(comment) {
      var post = comment.get('post');
      comment.destroyRecord().then(function() {
        post.save();
      });
      this.transitionTo('post');
      // comment.destroyRecord();
      // this.transitionTo('post');
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');

    }
  }
});
