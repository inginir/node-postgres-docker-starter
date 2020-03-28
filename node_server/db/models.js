const Sequelize = require("sequelize");

const usersModel = [
  "users",
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    // options
  }
];

module.exports = [usersModel];
