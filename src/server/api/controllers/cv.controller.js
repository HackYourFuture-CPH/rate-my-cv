/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
//const moment = require('moment-timezone');

const getCV = async () => {
  try {
    return await knex('cv').select('cv.id', 'cv.title');
  } catch (error) {
    return error.message;
  }
};

const getCVById = async (id) => {
  try {
    const result = await knex('cv')
      .select('cv.id as id', 'title')
      .where({ id });
    if (result.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getCV,
  getCVById,
};
