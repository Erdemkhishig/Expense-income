const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid")

const getAllAccounts = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "accounts.json");
        const rawData = fs.readFileSync(filePath);
        const accounts = JSON.parse(rawData);
        res.json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createAccount = async (req, res) => {

    try {
        const filePath = path.join(__dirname, "..", "data", "accounts.json");
        const rawData = fs.readFileSync(filePath);
        const accounts = JSON.parse(rawData);
        const newAccount = { ...req.body, id: v4(), };
        accounts.push(newAccount);
        fs.writeFileSync(filePath, JSON.stringify(accounts));
        res.json(newAccount)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteAccount = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "accounts.json");
        const rawData = fs.readFileSync(filePath);
        let accounts = JSON.parse(rawData);
        const { id } = req.params;

        // Find index of the account to delete
        const index = accounts.findIndex(account => account.id === id);

        if (index === -1) {
            return res.status(404).json({ error: "Account not found" });
        }

        // Remove the account from the array
        accounts.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
        res.status(204).send(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAllAccounts, createAccount, deleteAccount };





