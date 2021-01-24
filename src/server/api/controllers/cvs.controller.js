/*  This is the controller for cvs */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getCvs = async (title, limit) => {
  try {
    if (title) {
      return await knex('cvs')
        .select('cvs.id', 'cvs.title')
        .where({ title });
    } else if (limit) {
      return await knex('cvs')
        .select('cvs.id', 'cvs.title')
        .limit({ limit });
    } else
      return await knex('cvs')
        .select('cvs.id', 'cvs.title')
        .orderBy('cvs.title')
        .orderBy('created_date', 'desc');
  } catch (error) {
    return error.message;
  }
};

const getCvById = async (id) => {
  try {
    const cvs = await knex('cvs')
      .select('cvs.id as id', 'title')
      .where({ id });
    if (cvs.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return cvs;
  } catch (error) {
    return error.message;
  }
};

const editCv = async (cvsId, updatedCv) => {
  return knex('cvs')
    .where({ id: cvsId })
    .update({
      title: updatedCv.title,
      createdAt: moment(updatedCv.createdAt).format(),
    });
};

const deleteCv = async (cvId) => {
  return knex('cvs')
    .where({ id: cvId })
    .del();
};

const createCv = async (body) => {
  await knex('cvs').insert({
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
