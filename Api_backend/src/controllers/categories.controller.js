const fs = require("fs");
const path = require("path");
const { v4 } = require('uuid');
const { db } = require('../database/index.js');
const { categories } = require('../database/schema.js')
const { eq } = require("drizzle-orm");

const getAllCategories = async (req, res) => {
    const categoriesData = await db.query.categories.findMany({

    });
    res.json(categoriesData);
};


const createCategory = async (req, res) => {
    const { name, iconName } = req.body;

    const [newCategory] = await db
        .insert(categories)
        .values({
            name: name,
            iconName: iconName,
            // userId: req.user.id,
        })
        .returning();

    res.json(newCategory);
};

const deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const removedCategory = await db
            .delete(categories)
            .where(categories.id.eq(categoryId));
        res.json(removedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAllCategories, createCategory, deleteCategory };
