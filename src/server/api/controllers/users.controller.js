/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getUsers = async () => {
  try {
    return await knex('users').select('users.id', 'users.title');
  } catch (error) {
    return error.message;
  }
};

const getUsersById = async (id) => {
  try {
    const users = await knex('users')
      .select('users.id as id', 'title')
      .where({ id });
    if (users.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return users;
  } catch (error) {
    return error.message;
  }
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
    fullname: body.fullname,
    position: body.position,
    linkedin: body.linkedin,
    github: body.github,
    website: body.website,
    profile_image_url: body.profile_image_url,
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
