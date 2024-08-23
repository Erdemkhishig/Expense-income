

const { db } = require('../database/index.js');
const { records } = require('../database/schema.js');

const getAllRecords = async (req, res) => {
    const recordData = await db.query.records.findMany({
        with: {
            category: true,
        },
    });
    res.json([])
};

const createRecord = async (req, res) => {
    const { title, content, userId, categoryId, payee } = req.body;

    const [newRecord] = await db
        .insert(records)
        .values({ title, content, userId, categoryId, payee })
        .returning();

    res.json(newRecord);
};

const deleteRecord = async (req, res) => {
    const recordId = req.params.id;
    const removeRecord = await db.delete(records).where(records.id.eq(recordId));
    res.json(removeRecord);
};

module.exports = { getAllRecords, createRecord, deleteRecord };
