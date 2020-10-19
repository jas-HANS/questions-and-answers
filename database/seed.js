const faker = require('faker');
const mongoose = require('mongoose');
const fs = require('fs');

const writeEntries = fs.createWriteStream('entries.json');
writeEntries.write('', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    let time = 0;
    let i = 1000000;
    let id = 0;
    const start = new Date().getTime();
    function write() {
        let ok = true;
        do {
            let answers = [];
            let questions = [];
            let photos = [];

            //==================================
            // GENERATE RANDOM NUMBER OF PHOTOS
            //==================================
            for (let p = 0; p < Math.floor(Math.random() * Math.floor(5)); p++) {
                i -= 1;
                id += 1;
                photos.push(
                    {
                        _id: {$oid: mongoose.Types.ObjectId()},
                        url: faker.image.avatar(),
                    }
                );
            }

            //==================================
            // GENERATE RANDOM NUMBER OF ANSWERS
            //==================================

            for (let k = 0; k < Math.floor(Math.random() * Math.floor(15)); k++) {
                i -= 1;
                id += 1;
                answers.push(
                    {
                        _id: {$oid: mongoose.Types.ObjectId()},
                        body: faker.lorem.sentence(),
                        date: faker.date.recent(),
                        answerer_name: faker.name.firstName(),
                        helpfulness: faker.random.number(),
                        photos: photos
                    }
                );
            }

            //====================================
            // GENERATE RANDOM NUMBER OF QUESTIONS
            //====================================

            for (let j = 0; j < Math.floor(Math.random() * Math.floor(15)); j++) {
                i -= 1;
                id += 1;
                questions.push(
                    {
                        _id: {$oid: mongoose.Types.ObjectId()},
                        question_body: faker.lorem.sentence(),
                        question_date: faker.date.recent(),
                        asker_name: faker.name.firstName(),
                        question_helpfulness: faker.random.number(),
                        reported: faker.random.number(),
                        answers: answers
                    });
            }

            let newEntry = JSON.stringify({
                _id: {$oid: mongoose.Types.ObjectId()},
                results: questions
            });

            if (i === 0) {
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
        const stop = new Date().getTime();
        time = stop - start;
    }
    write()
    console.log(`Seeding took ${time} milliseconds.`);
}

writeTenMillionUsers(writeEntries, 'utf-8', () => {
    writeEntries.end();
});