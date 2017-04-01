exports.up = function(knex, Promise) {
  return knex.schema.createTable('pitchPosts', (table) => {
    table.increments()
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('user_id').notNullable();
    table.integer('pitch_id').notNullable();
    table.timestamp('timestamp').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pitchPosts')
};
