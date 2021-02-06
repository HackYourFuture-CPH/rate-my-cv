/*  This is the controller for cvs */

const knex = require('../../config/db');

const Error = require('../lib/utils/http-error');

const moment = require('moment-timezone');

const getCvs = async (title, limit) => {
  try {
    if (title) {
      return await knex('cvs')
        .select('*')
        .where('title', 'like', `%${title}%`);
    }
    if (limit) {
      return await knex('cvs')
        .select('*')
        .limit({ limit });
    }
    return await knex('cvs')
      .select('*')
      .orderBy('cvs.title')
      .orderBy('createdAt', 'desc');
  } catch (error) {
    return error.message;
  }
};

const getCvById = async (id) => {
  try {
    const cvs = await knex('cvs')
      .select('cvs.id as id', 'title',)
      .where({ id });
    if (cvs.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return cvs;
  } catch (error) {
    return error.message;
  }
};



const deleteCv = async (cvId) => {
  return knex('cv')
    .where({ id: cvId })
    .del();
};

const createCv = async (body) => {
  await knex('cv').insert({
    title: body.title,
    createdAt: moment(body.createdAt).format(),
  });

  return {
    successful: true,
  };
};

module.exports = {
  getCvs,
  getCvById,
  deleteCv,
  createCv,
  editCv,
};
