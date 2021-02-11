/*  This is the controller for cvs */

const knex = require('../../config/db');

const Error = require('../lib/utils/http-error');

const moment = require('moment-timezone');
const { request } = require('express');

const getCvsnUsers = async () => {
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
  getCvsnUsers,
};
