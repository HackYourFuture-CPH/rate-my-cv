exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cv')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cv').insert([
        { id: 1, title: 'FrontEnd Developer' },
        { id: 2, title: 'Project Manager' },
        { id: 3, title: 'Fullstack Engineer' },
      ]);
    });
};
