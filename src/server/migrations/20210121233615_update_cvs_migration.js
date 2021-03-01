exports.up = function(knex) {
  return knex.schema.table('cvs', (table) => {
    table.string('description');
    table.string('file_url').notNullable();
    table
      .integer('fk_user_id')
      .unsigned()
      .notNullable();
    table.foreign('fk_user_id').references('users.id');
    table
      .datetime('updatedAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.datetime('deletedAt');
  });
};

exports.down = function(knex) {
  return knex.schema.table('cvs', (table) => {
    table.dropColumn('description');
    table.dropColumn('file_url');
    table.dropForeign('fk_user_id');
    table.dropColumn('fk_user_id');
    table.dropColumn('updatedAt');
    table.dropColumn('deletedAt');
  });
};
