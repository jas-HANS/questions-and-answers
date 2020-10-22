'use strict';
const Faker = require('faker');

const questions = [
    "5f8f944c20589457f17fc006",
    "5f8f944c20589457f17fc020",
    "5f8f944c20589457f17fc023",
    "5f8f944c20589457f17fc024",
    "5f8f944c20589457f17fbfec"
];
const answers = [
    "5f8f944c20589457f17fc007",
    "5f8f944c20589457f17fc021",
    "5f8f944c20589457f17fc025",
    "5f8f944c20589457f17fc028",
    "5f8f944c20589457f17fbfed"

];
const products = [
    "5f8f944c20589457f17fc02c",
    "5f8f944c20589457f17fbffd",
    "5f8f944c20589457f17fbfeb",
    "5f8f944c20589457f17fc01f",
    "5f8f944c20589457f17fc005"
 ];

 const generator = (array) => {
     return array[Math.random() * Math.floor(5)];
 }

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const question = `${generator(questions)}`;
  const answer = `${generator(answers)}`;
  const product = `${generator(products)}`;
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