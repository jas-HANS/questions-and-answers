const Faker = require('faker');

function generateRandomData(userContext, events, done) {

    const questions = [
        '5f939da9bdb6856d12f0d0f4',
        '5f939da9bdb6856d12f0d0f9',
        '5f939da9bdb6856d12f11875',
        '5f939da8bdb6856d12f0a4a2',
        '5f939da8bdb6856d12f0a4a6'
    ];
    const answers = [
        '5f92210cfb1ec0244e2fe200',
        '5f92210cfb1ec0244e2fe1c5',
        '5f92210cfb1ec0244e2fe1c8',
        '5f92210cfb1ec0244e2fe1bd',
        '5f92210cfb1ec0244e2fe1b5'

    ];

    const generator = (array) => {
        return array[Math.floor(Math.random() * Math.floor(4))];
    }
    // generate data with Faker:
    const question = generator(questions);
    const answer = generator(answers);
    const name = `${Faker.name.firstName()}`;
    const body = `${Faker.lorem.sentence()}`;
    // add variables to virtual user's context:
    userContext.vars.name = name;
    userContext.vars.body = body;
    userContext.vars.question = question;
    userContext.vars.answer = answer;
    return done();
}

module.exports = {
    generateRandomData
};