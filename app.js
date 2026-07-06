import express from "express";
import bodyParser from "body-parser";
import { assignments as assignmentsFromFile } from "./data/assignments.js";
import { comments as commentsFromFile } from "./data/comments.js";
import assignmentRouter from "./routes/assignments.mjs";


let assignments = [...assignmentsFromFile];
let comments = [...commentsFromFile];

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use('/assignments',assignmentRouter)

app.get("/accounts", function (req, res) {
  res.send("View all accounts");
});

app.get("/accounts/:id", function (req, res) {
  res.send("View an account by id");
});

app.post("/accounts", function (req, res) {
  res.send("Create an account");
});

app.put("/accounts/:id", function (req, res) {
  res.send("Update an account by id");
});

app.delete("/accounts/:id", function (req, res) {
  res.send("Delete an account by id");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
