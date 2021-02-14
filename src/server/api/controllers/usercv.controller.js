/*  This is the controller for cvs */

const knex = require('../../config/db');

const getUserCvs = async () => {
  try {
    return await knex('cvs')
      .join('users', 'users.id', '=', 'cvs.fk_user_id')
      .select('*')
      .limit(20);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserCvs,
};
