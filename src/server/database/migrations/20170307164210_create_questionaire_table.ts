import { knex } from 'chen/sql';

/**
 * Apply database schema changes
 * @param {knex} db
 */
export async function up(db: knex) {
  return db.schema.createTable('questionaires', table => {
    table.increments('id');
    table.boolean('archive').defaultTo(0);
    table.integer('company_id').unsigned();
    table.timestamps();
    table.foreign('company_id').references('id').inTable('companies');
  })
}

/**
 * Rollback database schema changes
 * @param {knex} db
 */
export async function down(db: knex) {
  return db.schema.dropTable('questionaires');
}
