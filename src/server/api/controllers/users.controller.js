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
      full_name: updatedUser.full_name,
      position: updatedUser.position,
      linkedin: updatedUser.linkedin,
      github: updatedUser.github,
      website: updatedUser.website,
      profile_image_url: updatedUser.profile_image_url,
    });
};

const deleteUser = async (usersId) => {
  return knex('users')
    .where({ id: usersId })
    .del();
};

const createUser = async (body) => {
  await knex('users').insert({
    title: body.title,
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
