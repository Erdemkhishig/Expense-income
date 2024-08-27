

const { db } = require('../database/index.js');
const { records } = require('../database/schema.js');

const getAllRecords = async (req, res) => {
    const recordData = await db.query.records.findMany({
        // with: {
        //     category: true,
        // },
    });
    res.json(recordData)
};

const createRecord = async (req, res) => {
    const { newRecords } = req.body;
    console.log(newRecords, "---");

    // const { id, name, amount, userId, time, date, categoryId, payee, note, status } = req.body;
    const { amount, userId, time, date, categoryId, payee, note, status } = newRecords;

    const createdRecord = await db
        .insert(records)
        .values({ amount, userId, time, date, categoryId, payee, note, status })
        .returning();

    res.json(createdRecord);
};

const deleteRecord = async (req, res) => {
    const recordId = req.params.id;
    const removeRecord = await db.delete(records).where(records.id.eq(recordId));
    res.json(removeRecord);
};

module.exports = { getAllRecords, createRecord, deleteRecord };
