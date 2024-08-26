require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { accountRouter } = require('./routes/account.route');
const { categoryRouter } = require('./routes/categories.route');
const { authRouter } = require("./routes/auth.route");
const { userRouter } = require("./routes/user.route");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { recordRouter } = require("./routes/records.route");

const app = express()

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/records", recordRouter);
app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


// { "id": "1", "title": "Home", "icon": "🏠" },
// { "id": "2", "title": "Gift", "icon": "🎁" },
// { "id": "3", "title": "Food", "icon": "🍔" },
// {"id": "4", "title": "Drink", "icon": "🍹" },
// {"id": "5", "title": "Vehicle", "icon": "🚗" },
// {"id": "6", "title": "Shopping", "icon": "👕" }