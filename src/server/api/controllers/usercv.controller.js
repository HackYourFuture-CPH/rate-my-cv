/*  This is the controller for cvs */

const knex = require('../../config/db');

const getUserCvs = async (limit = 20) => {
  try {
    return await knex('cvs')
      .join('users', 'users.id', '=', 'cvs.fk_user_id')
      .select('*')
      .limit(limit);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserCvs,
};
