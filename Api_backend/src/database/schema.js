const { relations } = require('drizzle-orm');
const { time, date } = require('drizzle-orm/mysql-core');
const { integer, pgTable, serial, varchar, timestamp } = require('drizzle-orm/pg-core');

const auth = pgTable("auth", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }),
    password: varchar("password", { length: 8 }),
});



const records = pgTable("records", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    amount: varchar("amount", { length: 256 }),
    userId: integer("userId"),
    time: timestamp("time"),
    date: varchar("date"),
    categoryId: integer("categoryId"),
    payee: varchar("payee", { length: 256 }),
    note: varchar("note", { length: 256 }),
    status: varchar("status", { length: 256 }),
});

const categories = pgTable("categories", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    iconName: varchar("iconName", { length: 256 }),

});


const authRelations = relations(auth, ({ many }) => ({
    records: many(records),
}));

const categoryRelations = relations(categories, ({ many }) => ({
    records: many(records),
}));

const recordsRelations = relations(records, ({ one }) => ({
    user: one(auth, {
        fields: [records.userId],
        references: [auth.id],
    }),
    category: one(categories, {
        fields: [records.categoryId],
        references: [categories.id],

    }),
}));


module.exports = {
    auth,
    records,
    authRelations,
    categories,
    recordsRelations,
    categoryRelations,
};
