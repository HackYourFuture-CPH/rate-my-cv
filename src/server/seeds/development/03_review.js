exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('review')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('review').insert([
        {
          title: 'Excellent project manager CV',
          content:
            'I reaaly like all parts of CV. It is clearly defined in which sections youi have abilities and skills. Just try to describe more about your background before when you start working as a project manager.',
          stars: '5',
          fk_cv_id: '2',
          fk_user_id: '3',
        },
        {
          title: 'Moderate introduction',
          content:
            'I believe that introduction section has an opportunity to be imporved in a matter that if recruiters wanted to know about your backgoround that can easily find out. try to remove some unrelevant thins from your CV as well.',
          stars: '3',
          fk_cv_id: '3',
          fk_user_id: '4',
        },
        {
          title: 'an eyecatching design',
          content:
            'I really enjoy design of your CV. I looks fantastic and attarctive. If I wanna give you a feedback for imporving your CV I should say that try to bring relevant backgrounds in a way that they seems more bolder than unrelevant background.',
          stars: '4',
          fk_cv_id: '1',
          fk_user_id: '1',
        },
        {
          title: 'weak picture ',
          content:
            'everything is placed perfectly in CV except your picture. In my opinion it is not so attractive and energetic. try to change it with the smily one and a little bit formal as you want to introduce yourself as a project manager.',
          stars: '4',
          fk_cv_id: '2',
          fk_user_id: '4',
        },
      ]);
    });
};
