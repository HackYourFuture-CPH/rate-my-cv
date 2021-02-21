exports.up = function(knex) {
  return knex.schema.createTable('review', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('stars');
    table
      .integer('fk_cv_id')
      .unsigned()
      .notNullable();
    table.foreign('fk_cv_id').references('cvs.id');
    table
      .integer('fk_user_id')
      .unsigned()
      .notNullable();
    table.foreign('fk_user_id').references('users.id');
    table
      .datetime('created_date')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('review');
};
