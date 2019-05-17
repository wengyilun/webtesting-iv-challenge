const faker = require('faker');
const bcrypt = require('bcryptjs');

const hashedPassword = bcrypt.hashSync('123', 4);

const createFakerUsers = () => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  phone: '000-000-0000',
  password: hashedPassword
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
  .truncate()
  .then(function() {
    // Inserts seed entries
    const fakeUsers = [];
    
    for (let i = 0; i < 10; i++) {
      fakeUsers.push(createFakerUsers());
    }
    
    return knex('user').insert(fakeUsers);
  });
};
