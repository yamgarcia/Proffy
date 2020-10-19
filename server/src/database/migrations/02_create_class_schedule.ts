import Knex from "knex";
/* Updates to be made in the db */
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer("week_day").notNullable();
        table.integer("from").notNullable();
        table.integer("to").notNullable();

        table.integer("class_id")
        .notNullable()
        .references("id")
        .inTable("classes")
        /* onDelete function removes all "classes" the deleted teached is referenced*/
        .onDelete("CASCADE")
        /* onUpdate allows and auto update if the referenced id changed */
        .onUpdate("CASCADE");
    })
}

/* Rollback */
export async function down(knex: Knex){
    return knex.schema.dropTable("class_schedule");
}