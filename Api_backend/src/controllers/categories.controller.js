
const { db } = require('../database/index.js');
const { categories } = require('../database/schema.js');
const jwt = require('jsonwebtoken');


const getAllCategories = async (req, res) => {
    const categoriesData = await db.query.categories.findMany({

    });
    res.json(categoriesData);
};

// const getAllCategories = async (req, res) => {
//     const categoryData = await db.query.categories.findMany({

//     });
//     const userId = req.params.id
//     const filteredCategory = categoryData.filter((category) => category.userId == userId)
//     res.json(filteredCategory)
// };



const createCategory = async (req, res) => {
    
    const { name, iconName, color, userId } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

    const [newCategory] = await db
        .insert(categories)
        .values({
            name: name,
            iconName: iconName,
            color: color,
            userId: userId,
           
        })
        .returning();
    res.json(newCategory);
} catch (error) {
    console.error('Error creating record:', error);
    res.status(500).json({ message: 'Internal server error' });
}
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
const getCategoryId = async (req, res) => {
    const categoryId = req.params.id
    try {
        const categoriesData = await db.query.categories.findMany()
        const chooseCategory = categoriesData.find((category) => category.id == categoryId)
        res.json(chooseCategory)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
module.exports = { getAllCategories, createCategory, deleteCategory, getCategoryId };
