exports.up = function(knex, Promise) {
  return knex.schema.createTable('pitch_posts', (table) => {
    table.increments()
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('user_id').notNullable();
    table.integer('pitch_id').notNullable();
    table.timestamp('timestamp').defaultTo(knex.fn.now());
  })
  .then(() => {
    return knex.schema.createTable('pitch_comments', (table) => {
  		table.increments();
  		table.string('comment').notNullable();
  		table.integer('user_id').notNullable();
  		table.integer('post_id').notNullable();
  		table.timestamp('timestamp').defaultTo(knex.fn.now());
  	});
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pitch_posts')
  .then(() => {
    return knex.schema.dropTable('pitch_comments')
  })
};
