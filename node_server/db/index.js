const Sequelize = require("sequelize");
const models = require("./models");
const { initCrud } = require("./crud");

let sequelize;
let crud;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const initDb = () => {
  //return if already initiated
  if (!!sequelize) return;

  sequelize = new Sequelize("postgres", "me", "password", {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres"
  });

  const modelRefs = models.reduce((acc, model) => {
    const modelRef = sequelize.define(...model);

    return { ...acc, [capitalize(model[0])]: modelRef };
  }, {});

  crud = initCrud(modelRefs);
  sequelize.sync();
};

const authenticate = () => {
  initDb();

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
};

const getCrud = () => {
  initDb();
  return crud;
};

module.exports = {
  initDb,
  getCrud,
  authenticate
};
