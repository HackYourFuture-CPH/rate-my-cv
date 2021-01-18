exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          first_name: 'ember',
          last_name: 'blooming',
          email: 'test1@gmail.com',
          phone_number: '12345678',
        },
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'test2@gmail.com',
          phone_number: '87654321',
        },
        {
          first_name: 'Stephanie',
          last_name: 'Knowitall',
          email: 'test3@gmail.com',
          phone_number: '88888888',
        },
      ]);
    });
};
