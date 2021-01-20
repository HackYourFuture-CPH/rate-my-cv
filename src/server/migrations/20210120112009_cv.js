// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function(knex) {
  return knex.schema.createTable('cv', (table) => {
    table.increments();
    table.string('title').notNullable();

    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('updatedAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('deletedAt')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cv');
};
