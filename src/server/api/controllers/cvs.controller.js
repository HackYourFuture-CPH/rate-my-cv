/*  This is the controller for cvs */
const knex = require('../../config/db');
const moment = require('moment-timezone');

const editCv = async (cvId, updatedCv) => {
  return knex('cvs')
    .where({ id: cvId })
    .update({
      title: updatedCv.title,
      createdAt: moment(updatedCv.createdAt).format(),
      description: updatedCv.description,
      file_url: updatedCv.file_url,
      updatedAt: moment().format(),
      deletedAt: moment().format(),  
 });
};

module.exports = {
  editCv,
};
