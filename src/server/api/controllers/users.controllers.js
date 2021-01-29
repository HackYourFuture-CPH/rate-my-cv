/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */
const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');


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
      created_date: moment(updatedUser.created_date).format(),  
 });
};


module.exports = {
  editUser,
};