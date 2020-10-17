const faker = require('faker');
const fs = require('fs');

const writeEntries = fs.createWriteStream('entries.json');
writeEntries.write('', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    const start = new Date().getTime();
    let i = 1000;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            let newEntry = JSON.stringify({
                results: [
                    {
                        question_id: faker.random.number(),
                        question_body: faker.lorem.sentence(),
                        question_date: faker.date.recent(),
                        asker_name: faker.name.firstName(),
                        question_helpfulness: faker.random.number(),
                        reported: faker.random.number(),
                        answers: [
                            {
                                id: faker.random.number(),
                                body: faker.lorem.sentence(),
                                date: faker.date.recent(),
                                answerer_name: faker.name.firstName(),
                                helpfulness: faker.random.number(),
                                photos: [
                                    {
                                        id: faker.random.number(),
                                        url: faker.image.avatar(),
                                    }
                                ]
                            }
                        ],
                    }
                ]
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
    }
    write()
    const stop = new Date().getTime();
    console.log(`Seeding took ${stop - start} milliseconds.`);
}

writeTenMillionUsers(writeEntries, 'utf-8', () => {
    writeEntries.end();
  });