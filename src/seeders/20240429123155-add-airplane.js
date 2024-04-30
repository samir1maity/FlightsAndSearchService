'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('Airplanes', [
    //   {
    //     modelNumber: 'Antonov An-24/26',
    //     Capacity: 300,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     modelNumber: 'Airbus A330',
    //     Capacity: 350,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     modelNumber: 'Boeing 747',
    //     Capacity: 320,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     modelNumber: 'Boeing 777',
    //     Capacity: 400,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     modelNumber: 'Boeing 737 Family',
    //     Capacity: 450,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    // ], {})

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
