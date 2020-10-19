import Knex from "knex";
/* Updates to be made in the db */
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string("subject").notNullable();
        table.decimal("cost").notNullable();

        table.integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        /* onDelete function removes all "classes" the deleted teached is referenced*/
        .onDelete("CASCADE")
        /* onUpdate allows and auto update if the referenced id changed */
        .onUpdate("CASCADE");
    })
}

/* Rollback */
export async function down(knex: Knex){
    return knex.schema.dropTable("classes");
}