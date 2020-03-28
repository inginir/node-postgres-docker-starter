const express = require("express");
const app = express();
const { initDb, getCrud } = require("./db");
// -----------------------------------------------

initDb();

const { createUser, getAllUsers } = getCrud();

app.get("/user/create", async (req, res) => {
  const user = await createUser();
  res.send(JSON.stringify(user, null, 4));
});

app.get("/users", async (req, res) => {
  const users = await getAllUsers();
  res.send(JSON.stringify(users, null, 4));
});

app.get("/", (req, res) => {
  res.send("An alligator approaches haha!");
});

app.listen(3000, () => console.log("Gator app listening on port 3000!"));
