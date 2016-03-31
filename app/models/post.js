import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); } }),
  category: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('comment', { async: true }),
  image: DS.attr()
});
