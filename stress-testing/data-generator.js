const Faker = require('faker');

function generateRandomData(userContext, events, done) {

    const questions = [
        '5f92210cfb1ec0244e2fe1ea',
        '5f92210cfb1ec0244e2fe22e',
        '5f92210cfb1ec0244e2fe1e',
        '5f92210cfb1ec0244e2fe221',
        '5f92210cfb1ec0244e2fe21c'
    ];
    const answers = [
        '5f92210cfb1ec0244e2fe200',
        '5f92210cfb1ec0244e2fe1c5',
        '5f92210cfb1ec0244e2fe1c8',
        '5f92210cfb1ec0244e2fe1bd',
        '5f92210cfb1ec0244e2fe1b5'

    ];
    const products = [
        '5f92210cfb1ec0244e2fe186',
        '5f92210cfb1ec0244e2fe192',
        '5f92210cfb1ec0244e2fe194',
        '5f92210cfb1ec0244e2fe17f',
        '5f92210cfb1ec0244e2fe188'
    ];

    const generator = (array) => {
        return array[Math.floor(Math.random() * Math.floor(4))];
    }
    // generate data with Faker:
    const question = generator(questions);
    const answer = generator(answers);
    const product = generator(products);
    const name = `${Faker.name.firstName()}`;
    const body = `${Faker.lorem.sentence()}`;
    // add variables to virtual user's context:
    userContext.vars.name = name;
    userContext.vars.body = body;
    userContext.vars.product = product;
    userContext.vars.question = question;
    userContext.vars.answer = answer;
    return done();
}

module.exports = {
    generateRandomData
};