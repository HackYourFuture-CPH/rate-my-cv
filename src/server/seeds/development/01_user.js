/* eslint-disable @typescript-eslint/camelcase */
exports.seed = function(knex) {
      return knex('users')
        .del()
        .then(function() {
          // Inserts seed entries
          return knex('users').insert([
            {
              'id': '1',
              'full_name': 'ember blooming',
              'position': 'student',
              'linkedin': 'https://www.linkedin.com/in/ember-blooming-a0b5311b6/',
              'github': 'https://github.com/ember-b-Moss',
              'website': 'https://ember-b-moss.github.io/',
              'profile_image_url':
                'https://avatars3.githubusercontent.com/u/66334642?s=460&u=39441cc9beec59d355d4233695034ca020604f58&v=4',
              'firebase_token':'abc12d',
            },
            {
              'id': '2',
              'full_name': 'Stephanie Hicks',
              'position': 'Integrated Client Manager',
              'linkedin':
                'https://www.linkedin.com/in/stephanie-hansen-b3898240/',
              'github': 'https://github.com/stephaniehicks',
              'website': 'https://www.stephaniehicks.com/',
              'profile_image_url':
                'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profiel-photo-venice.jpg',
              'firebase_token':'gsgv4v',
            },
            {
              'id': '3',
              'full_name': 'Jonathan Andersen',
              'profile_image_url':
                'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
              'firebase_token':'htf345',
            },
            {
              'id': '4',
              'full_name': 'Stephanie Mendrala',
              'linkedin':
                'https://www.linkedin.com/in/stephanie-mendrala-b11755ab/',
              'profile_image_url':
                'https://expertphotography.com/wp-content/uploads/2018/04/photography-lighting-facts-distance.jpg',
              'firebase_token':'g24vg',
            },
          ]);
        });
};