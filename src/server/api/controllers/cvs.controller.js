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

const createCvs = async (body) => {
  await knex('cvs').insert({
    title: body.title,
    description: body.description,
    file_url: body.file_url,
    fk_user_id: body.fk_user_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getCvs,
  getCvById,
  deleteCv,
  createCvs,
  editCv,
};
