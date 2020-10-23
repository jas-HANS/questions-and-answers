const faker = require('faker');
const mongoose = require('mongoose');
const fs = require('fs');

const writeEntries = fs.createWriteStream('entries.json');
writeEntries.write('', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    console.time('Mongo Generation')
    let i = 10000000;
    var id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            //==================================
            // GENERATE RANDOM NUMBER OF PHOTOS
            //==================================
            const generatePhotos = () => {
                let photos = [];
                for (let p = 0; p < Math.floor(Math.random() * Math.floor(5)); p++) {
                    photos.push(
                        {
                            _id: { $oid: mongoose.Types.ObjectId() },
                            url: faker.image.avatar(),
                        }
                    );
                }
                return photos;
            }

            //==================================
            // GENERATE RANDOM NUMBER OF ANSWERS
            //==================================
            const generateAnswers = () => { 
                let answers = [];
                for (let k = 0; k < Math.floor(Math.random() * Math.floor(5)); k++) {
                    i -= 1;
                    id++;
                    answers.push(
                        {
                            _id: { $oid: mongoose.Types.ObjectId() },
                            body: faker.lorem.sentence(),
                            date: faker.date.recent(),
                            answerer_name: faker.name.firstName(),
                            helpfulness: faker.random.number(),
                            photos: generatePhotos()
                        }
                    );
                }
                return answers;
            }

            //====================================
            // GENERATE RANDOM NUMBER OF QUESTIONS
            //====================================
            const generateQuestions = () => {
                let questions = [];
                for (let j = 0; j < Math.floor(Math.random() * Math.floor(5)); j++) {
                    i -= 1;
                    id++;
                    questions.push(
                        {
                            _id: { $oid: mongoose.Types.ObjectId() },
                            question_body: faker.lorem.sentence(),
                            question_date: faker.date.recent(),
                            asker_name: faker.name.firstName(),
                            question_helpfulness: faker.random.number(),
                            reported: faker.random.number(),
                            answers: generateAnswers()
                        });
                }
                return questions;
            }

            //====================================
            // ======= GENERATE PRODUCTS =========
            //====================================
            let newEntry = JSON.stringify({
                _id: { $oid: mongoose.Types.ObjectId() },
                results: generateQuestions()
            });

            if (i === 0) {
                console.timeEnd('Mongo Generation');
                writer.write(newEntry, encoding, callback);
            } else {
                // see if we should continue, or wait
                // don't pass the callback, because we're not done yet.
                ok = writer.write(newEntry, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // had to stop early!
            // write some more once it drains
            writer.once('drain', write);
        }
    }
    write()
}

writeTenMillionUsers(writeEntries, 'utf-8', () => {
    writeEntries.end();
});