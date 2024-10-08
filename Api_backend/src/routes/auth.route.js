const { Router } = require("express");
const { login, register, createUser, getUsers } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/login", login).post("/", register);
authRouter.get("/login", login).get("/", register);
// authRouter.post("/", getUsers).post("/", createUser);
// authRouter.get("/", getUsers).get("/", createUser);

module.exports = { authRouter };
