exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('full_name').notNullable();
    table.string('position');
    table.string('linkedin');
    table.string('github');
    table.string('website');
    table.string('profile_image_url');
    table
      .datetime('created_date')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
