/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getUsers = async () => {
  try {
    return await knex('users').select('*');
  } catch (error) {
    return error.message;
  }
};

const getUsersById = async (id) => {
  try {
    const user = await knex('users')
      .select('*')
      .where({ id });
    if (user.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return user;
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
      created_date: moment(updatedUser.created_date).format(),  
 });
};




const deleteUser = async (userId) => {
  return knex('users')
    .where({ id: userId })
    .del();
};

const createUser = async (newUser) => {
  await knex('users').insert({
    // eslint-disable-next-line @typescript-eslint/camelcase
    full_name: newUser.full_name,
    position: newUser.position,
    linkedin: newUser.linkedin,
    github: newUser.github,
    website: newUser.website,
    // eslint-disable-next-line @typescript-eslint/camelcase
    profile_image_url: newUser.profile_image_url,
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
