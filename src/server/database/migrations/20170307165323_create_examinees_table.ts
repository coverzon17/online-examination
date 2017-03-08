import { knex } from 'chen/sql';

/**
 * Apply database schema changes
 * @param {knex} db
 */
export async function up(db: knex) {
  return db.schema.createTable('examinees', table => {
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('questionaire_id').unsigned();
    table.string('link');
    table.integer('score');
    table.timestamps();
    table.foreign('questionaire_id').references('id').inTable('questionaires');
  });
}

/**
 * Rollback database schema changes
 * @param {knex} db
 */
export async function down(db: knex) {
  return db.schema.dropTable('examinees');
}
