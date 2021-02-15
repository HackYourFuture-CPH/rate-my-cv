exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cvs')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cvs').insert([
        {
          'id': '1',
          'title': 'FrontEnd Developer',
          'description': 'Frontend developer with 3 years experience',
          'file_url': 'http://www.africau.edu/images/default/sample.pdf',
          'fk_user_id':'1',
        },
        {
          'id': '2',
          'title': 'Project Manager',
          'description': 'Ambitious Project manager with handson experience',
          'file_url':
            'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf',
          'fk_user_id': '2',
        },
        {
          'id': '3',
          'title': 'Fullstack Engineer',
          'description': 'Skilled Fullstack developer with creative mind',
          'file_url': 'https://www.kdp.org/resources/pdf/careercenter/Compiling_a_Curriculum_Vitae.pdf',
          'fk_user_id': '3',
        },
      ]);
    });
};
