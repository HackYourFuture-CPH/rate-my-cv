exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          full_name: 'ember blooming',
          position: 'student',
          linkedin: 'https://www.linkedin.com/in/ember-blooming-a0b5311b6/',
          github: 'https://github.com/ember-b-Moss',
          website: 'https://ember-b-moss.github.io/',
          profile_image_url:
            'https://avatars3.githubusercontent.com/u/66334642?s=460&u=39441cc9beec59d355d4233695034ca020604f58&v=4',
        },
        {
          full_name: 'John Doe',
        },
        {
          full_name: 'Stephanie Knowitall',
        },
      ]);
    });
};
