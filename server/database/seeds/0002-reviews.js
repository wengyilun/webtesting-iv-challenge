const faker = require('faker');


const createFakerReviews = () => ({
  rating: 3,//Math.floor(Math.random()*5)+1,
  comment: faker.lorem.sentence,
  user_id: 2,//Math.floor(Math.random()*10)+1,
  video_id: 1,//Math.floor(Math.random()*3)+1,
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review')
  .truncate()
  .then(function() {
    // Inserts seed entries
    const fakeReviews = [];
    
    for (let i = 0; i < 10; i++) {
      fakeReviews.push(createFakerReviews());
    }
    
    return knex('review').insert(fakeReviews);
  });
};
