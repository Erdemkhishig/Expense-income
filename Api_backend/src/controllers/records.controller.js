

const { db } = require('../database/index.js');
const { records } = require('../database/schema.js');
const jwt = require('jsonwebtoken');

const getAllRecords = async (req, res) => {
    const recordData = await db.query.records.findMany({
        with: {
            category: true,
        },
    });
    const userId = req.params.id
    const filteredRecord = recordData.filter((record) => record.userId == userId)
    res.json(filteredRecord)
};


const createRecord = async (req, res) => {
    const { newRecords } = req.body;
    const { amount, time, date, categoryId, payee, note, status } = newRecords;
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

        const createdRecord = await db
            .insert(records)
            .values({ amount, userId, time, date, categoryId, payee, note, status })
            .returning();

        res.json(createdRecord);
    } catch (error) {
        console.error('Error creating record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const deleteRecord = async (req, res) => {
    const { id } = req.params;
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;

        const record = await db.query.records.findFirst({ where: { id, userId } });

        if (!record) {
            return res.status(404).json({ message: 'Record not found or unauthorized' });
        }

        const result = await db
            .deleteFrom(records)
            .where(records.id.equals(id))
            .execute();

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        console.error('Error deleting record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




module.exports = { getAllRecords, createRecord, deleteRecord };
