import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var formInputs = {
        title: this.get('title') ? this.get('title'): "",
        // date: this.get('date') ? this.get('date'): "",
        category: this.get('category') ? this.get('category'): "",
        body: this.get('body') ? this.get('body'): "",
        image: this.get('image') ? this.get('image'): ""
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', formInputs);
    }
  }
});
