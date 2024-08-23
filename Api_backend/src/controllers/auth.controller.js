const { readJson, saveJson } = require("../utils");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { db } = require("../database");
const { auth } = require("../database/schema");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const usersList = await db.query.auth.findMany();
        const user = usersList.find(user => user.email === email && user.password === password);

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const usersList = await db.query.auth.findMany();
        const existingUser = usersList.find(user => user.email === email);

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const [user] = await db.insert(auth).values({ name, email, password }).returning();

        res.json({
            message: "Success",
            user: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// const getUsers = async (req, res) => {
//     try {

//         const usersList = await db.query.users.findMany();
//         res.json(usersList);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// const createUser = async (req, res) => {
//     const { name, email } = req.body;

//     try {

//         const user = await db.insert(users).values({ name, email }).returning();
//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

module.exports = { login, register };
