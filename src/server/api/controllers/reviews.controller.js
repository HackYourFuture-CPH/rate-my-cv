const knex = require('../../config/db');

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
    const reviewedByUser = await knex('review')
      .join('users', 'users.id', '=', 'review.fk_user_id')
      .select('users.full_name as fullName','users. profile_image_url as profileImageUrl','content as review','stars','review.created_date as reviewedDate', 'review.id as id')
      .where('review.fk_user_id', '=', `${id}`);
    const reviewedCv = await knex('cvs')
      .join('review', 'review.fk_cv_id', '=', 'cvs.id')
      .join('users','users.id', '=', 'cvs.fk_user_id')
    .select('users.full_name as receiverName','users. profile_image_url as receiverImage','file_url as cv','users.created_date as Profilecreateddate','review.stars as stars')
      .where('review.fk_user_id', '=', `${id}`);
    
    let reviewer = {};
    reviewedByUser.map((e) => {
      reviewer = {
        fullName: e.fullName,
        profileImageUrl: e.profileImageUrl
      }
      return reviewer;
    });
    
    let author = {};
    reviewedCv.map((e) => {
      author = {
        fullName: e.receiverName,
        profileImageUrl: e.receiverImage
      }
      return author;
    });

    let cv = {};
    reviewedCv.map((e)=> {
      cv = {
        fileUrl: e.cv,
        createdDate: e.Profilecreateddate,
        averageStars: e.stars,
        author
      }
      return cv;
    });

    let reviews = {};
     reviewedByUser.map((e)=> {
      reviews = {
        id : e.id,
        review: e.review,
        createdDate: e.reviewedDate,
        reviewer,
        cv
      }
      return reviews;
    });

    const result = [];
    result.push(reviews);
    return result;
  } catch (error) {
    return error.message;
  }
};



module.exports = {
    getReviewsByCvId,
    getReviewsByUserId
};

  