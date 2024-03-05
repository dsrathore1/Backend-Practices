import express from "express";
import { config } from "dotenv";
import cors from "cors";

import connectDB from "./db/connectDB.js";
import routes from "./routes/routes.js";

config();

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", "templates");
app.set("view engine", "ejs");

connectDB();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Your site is live on http://localhost:${PORT}`);
});
