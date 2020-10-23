import Knex from "knex";
/* Updates to be made in the db */
export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      /* onDelete function removes all "classes" the deleted teached is referenced*/
      .onDelete("CASCADE")
      /* onUpdate allows and auto update if the referenced id changed */
      .onUpdate("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

/* Rollback */
export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
