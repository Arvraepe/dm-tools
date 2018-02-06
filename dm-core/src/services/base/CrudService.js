const CrudRepository = require('repositories/base/CrudRepository');

module.exports = (config) => {

  const Repository = CrudRepository(config);

  const create = (requestor = { _id: 'SYSTEM' }, raw) => {
    raw.createdBy = requestor._id;
    raw.createdOn = new Date();

    return Repository.create(raw);
  };

  const update = (requestor = { _id: 'SYSTEM' }, raw) => {
    raw.lastModifiedBy = requestor._id;
    raw.lastModifiedOn = new Date();

    return Repository.create(raw);
  };

  const findAll = (requestor) => Repository.findAll();
  const getByProperty = (requestor, where, includeDeleted) => Repository.getByProperties(where, includeDeleted);
  const getById = (requestor, id, includeDeleted) => Repository.getById(id, includeDeleted);
  const remove = (requestor, id) => Repository.remove(id, requestor);
  const hardRemove = (requestor, id) => Repository.hardRemove(id);

  return {
    findAll, getByProperty, create, getById, update, remove, hardRemove
  }

};