exports.up = function(knex) {
  return knex.schema.table('users', function(table) {
    table.string('firebase_token').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('firebase_token');
  });
};
