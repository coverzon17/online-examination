import { knex } from 'chen/sql';

/**
 * Apply database schema changes
 * @param {knex} db
 */
export async function up(db: knex) {
  return db.schema.createTable('companies', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').nullable();
    table.integer('owner_id').unsigned();
    table.timestamps();
    table.foreign('owner_id').references('id').inTable('owners');
  });
}

/**
 * Rollback database schema changes
 * @param {knex} db
 */
export async function down(db: knex) {
  return db.schema.dropTable('companies');
}
