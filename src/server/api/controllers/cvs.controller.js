/*  This is the controller for cvs */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getCvs = async (title, limit) => {
  try {
    if (title) {
      return await knex('cv')
        .select('cv.id', 'cv.title')
        .where({ title });
    } else if (limit) {
      return await knex('cv')
        .select('cv.id', 'cv.title')
        .limit({ limit });
    } else
      return await knex('cv')
        .select('cv.id', 'cv.title')
        .orderBy('cv.title')
        .orderBy('created_date', 'desc');
  } catch (error) {
    return error.message;
  }
};

const getCvById = async (id) => {
  try {
    const cvs = await knex('cv')
      .select('cv.id as id', 'title')
      .where({ id });
    if (cvs.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return cvs;
  } catch (error) {
    return error.message;
  }
};

const editCv = async (cvId, updatedCv) => {
  return knex('cv')
    .where({ id: cvId })
    .update({
      title: updatedCv.title,
      createdAt: moment(updatedCv.createdAt).format(),
    });
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
