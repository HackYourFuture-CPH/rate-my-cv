exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table
      .string('email')
      .unique()
      .notNullable();
    table
      .string('phone_number')
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
