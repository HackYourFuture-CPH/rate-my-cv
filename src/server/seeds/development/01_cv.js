exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cv')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cv').insert([
        {
          id: 1,
          title: 'FrontEnd Developer',
          description: 'Frontend developer with 3 years experience',
          file_url: 'https://zety.com/blog/banking-resume-example',
          fk_user_id: 1,
        },
        {
          id: 2,
          title: 'Project Manager',
          description: 'Ambitious Project manager with handson experience',
          file_url:
            'https://www.wozber.com/en-gb/cv-examples/front-end-developer-cv-example',
          fk_user_id: 2,
        },
        {
          id: 3,
          title: 'Fullstack Engineer',
          description: 'Skilled Fullstack developer with creative mind',
          file_url: 'https://zety.com/blog/accounting-clerk-resume-example',
          fk_user_id: 3,
        },
      ]);
    });
};
