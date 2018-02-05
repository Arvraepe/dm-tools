/**
 * Created by vanraar on 23/06/17.
 */
const Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/dm-tools');

const findAll = (model) => (addDeleted = false) => model.find({}).exists('deletedOn', addDeleted).then((list) => list.map((obj) => obj.toObject()));
const findSelected = (model) => (columns, addDeleted = false) => model.find({}).select(columns).then((list) => list.map((obj) => obj.toObject()));
const getById = (model) => (id, addDeleted = false) => model.findOne({ '_id': id }).exists('deletedOn', addDeleted).then((obj) => obj.toObject());
const getByProperties = (model) => (where, addDeleted = false) => model.find(where).exists('deletedOn', addDeleted).then((list) => list.map((obj) => obj.toObject()));
const create = (model) => (raw) => new model(raw).save().then((obj) => obj.toObject());
const update = (model) => (id, raw) => model.findOneAndUpdate({ _id: id}, raw, { "new": true });
const remove = (model) => (id, by) => model.findOneAndUpdate({ _id: id }, { $set: { deletedOn: new Date(), deletedBy: by }}, { "new": true });
const hardRemove = (model) => (id) => model.find({ '_id': id }).remove();

module.exports = (model) => {
  return {
    findAll: findAll(model),
    findSelected: findSelected(model),
    create: create(model),
    getById: getById(model),
    getByProperties: getByProperties(model),
    update: update(model),
    remove:remove(model),
    hardRemove: hardRemove(model)
  }
};