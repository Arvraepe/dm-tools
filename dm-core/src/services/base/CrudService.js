module.exports = (model) => {

  const repository = require('repositories/base/CrudRepository')(model);

  const create = (requestor = { _id: 'SYSTEM' }, raw) => {
    raw.createdBy = requestor._id;
    raw.createdOn = new Date();

    return repository.create(raw);
  };

  const update = (requestor = { _id: 'SYSTEM' }, raw) => {
    raw.lastModifiedBy = requestor._id;
    raw.lastModifiedOn = new Date();

    return repository.create(raw);
  };

  const findAll = (requestor) => repository.findAll();
  const findSelected = (requestor, columns, includeDeleted) => repository.findSelected(columns, includeDeleted);
  const getById = (requestor, id, includeDeleted) => repository.getById(id, includeDeleted);
  const remove = (requestor, id) => repository.remove(id, requestor);
  const hardRemove = (requestor, id) => repository.hardRemove(id);

  return {
    findAll, findSelected, create, getById, update, remove, hardRemove
  }

};