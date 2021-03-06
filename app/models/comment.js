import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', {async: true}),
  author: DS.attr(),
  body: DS.attr()
});
