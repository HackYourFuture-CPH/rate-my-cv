const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getReviewsByCvId = async (id) => {
  try {
      return await knex('review')
          .join('users', 'users.id', '=', 'review.fk_user_id')
          .join('cvs', 'cvs.id', '=', 'review.fk_cv_id')
          .select('*')
          .where('fk_cv_id', '=' , `${id}`);
  } catch (error) {
    return error.message;
  }
};

const getReviewsByUserId = async (id) => {
  try {
    const reviwedByUser = await knex('review')
      .join('users', 'users.id', '=', 'review.fk_user_id')
      .select('users.full_name as reviewerName','users. profile_image_url as reviewerImage','content as Review','stars','review.created_date as reviewedDate')
      .where('review.fk_user_id', '=', `${id}`);
    const reviewdCv = await knex('cvs')
      .join('review', 'review.fk_cv_id', '=', 'cvs.id')
      .join('users','users.id', '=', 'cvs.fk_user_id')
    .select('users.full_name as receiverName','users. profile_image_url as receiverImage','file_url as cv','users.created_date as Profilecreateddate')
    .where('review.fk_user_id', '=', `${id}`);
    const result = reviwedByUser.concat(reviewdCv);
    return result;
  } catch (error) {
    return error.message;
  }
};



module.exports = {
    getReviewsByCvId,
    getReviewsByUserId
};

  