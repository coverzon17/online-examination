import { knex } from 'chen/sql';

/**
 * Apply database schema changes
 * @param {knex} db
 */
export async function up(db: knex) {
  return db.schema.createTable('question_choices', table => {
    table.increments('id');
    table.string('name').nullable();
    table.string('image').nullable();
    table.integer('question_id').unsigned();
    table.timestamps();


  });
}

/**
 * Rollback database schema changes
 * @param {knex} db
 */
export async function down(db: knex) {
  return db.schema.dropTable('question_choices');
}
