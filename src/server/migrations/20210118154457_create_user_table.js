exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('phone_number').notNullable();
    table
      .datetime('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
