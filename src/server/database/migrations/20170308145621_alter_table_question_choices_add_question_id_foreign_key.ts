import { knex } from 'chen/sql';

/**
 * Apply database schema changes
 * @param {knex} db
 */
export async function up(db: knex) {
  return db.schema.table('question_choices', table => {
    table.foreign('question_id').references('id').inTable('questions');
  });
}

/**
 * Rollback database schema changes
 * @param {knex} db
 */
export async function down(db: knex) {
  return db.schema.table('question_choices', table => {
    table.dropForeign(['question_id']);
  });
}
