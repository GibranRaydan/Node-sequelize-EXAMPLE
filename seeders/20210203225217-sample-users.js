'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users", [
        {
          firstName:"Gibran",
          lastName:"Raydan",
          email: "g@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName:"Alex",
          lastName:"Raydan",
          email: "A@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName:"DanielTrollo",
          lastName:"Raydan",
          email: "D@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Users", null, {});
  }
};
