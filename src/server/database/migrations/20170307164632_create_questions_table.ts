import { knex } from 'chen/sql';

/**
 * Apply database schema changes
 * @param {knex} db
 */
export async function up(db: knex) {
  return db.schema.createTable('questions', table => {
    table.increments('id');
    table.string('name').nullable();
    table.string('image').nullable();
    table.integer('answer').unsigned();
    table.integer('questionaire_id').unsigned();
    table.timestamps();

    table.foreign('answer').references('id').inTable('question_choices');
    table.foreign('questionaire_id').references('id').inTable('questionaires');
  });
}

/**
 * Rollback database schema changes
 * @param {knex} db
 */
export async function down(db: knex) {
  return db.schema.dropTable('questions');
}
