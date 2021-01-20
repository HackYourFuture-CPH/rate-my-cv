/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getUsers = () => knex('users').select('*');

const getUsersById = async (id) => {
  const users = await knex('users')
    .select('*')
    .where({ id });
  if (users.length !== 1) {
    throw new Error(`incorrect entry with the id of ${id}`, 404);
  }
  return users[0];
};

const editUser = async (userId, updatedUser) => {
  return knex('users')
    .where({ id: userId })
    .update({
      title: updatedUser.title,
      startDate: moment(updatedUser.startDate).format(),
      endDate: moment(updatedUser.endDate).format(),
      classId: updatedUser.classId,
      updatedAt: moment().format(),
    });
};

const deleteUser = async (usersId) => {
  return knex('users')
    .where({ id: usersId })
    .del();
};

const createUser = async (body) => {
  await knex('users').insert({
    full_name: body.full_name,
    startDate: moment(body.startDate).format(),
    endDate: moment(body.endDate).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getUsers,
  getUsersById,
  deleteUser,
  createUser,
  editUser,
};
