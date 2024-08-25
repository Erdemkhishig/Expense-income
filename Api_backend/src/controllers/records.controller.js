

const { db } = require('../database/index.js');
const { records } = require('../database/schema.js');

const getAllRecords = async (req, res) => {
    const recordData = await db.query.records.findMany({
        // with: {
        //     category: true,
        // },
    });
    res.json([recordData])
};

const createRecord = async (req, res) => {
    const { id, name  , amount, userId, time, date, categoryId, payee, note, status} = req.body;

    const [newRecord] = await db
        .insert(records)
        .values({id, name  , amount, userId, time, date, categoryId, payee, note, status })
        .returning();

    res.json(newRecord);
};

const deleteRecord = async (req, res) => {
    const recordId = req.params.id;
    const removeRecord = await db.delete(records).where(records.id.eq(recordId));
    res.json(removeRecord);
};

module.exports = { getAllRecords, createRecord, deleteRecord };
