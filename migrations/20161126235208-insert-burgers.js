'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Burgers",
      [
        {burger_name: "Kuro Burger"},
        {burger_name: "Sushi Burger"},
        {burger_name: "Bogan Burger"},
        {burger_name: "Cray Cray Burger"},
        {burger_name: "The 50 oz Burger"}
      ]
    )
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query('truncate table Burgers')
  }
};