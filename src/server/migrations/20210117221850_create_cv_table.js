// migration for the cv table
exports.up = function(knex) {
  return knex.schema.createTable('cv', (table) => {
    table.increments();
    table.string('title').notNullable();
    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cv');
};
