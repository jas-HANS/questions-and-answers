const { generateProducts, generateQuestions, generateAnswers, generatePhotos } = require('./generate_data');

//==========================
//==== GENERATE 1 MIL ======
//==========================

const generateOneMillionRecords = () => {
    console.time("Total Generation");
    generateProducts(() => {
        generateQuestions(() => {
            generateAnswers(() => {
                generatePhotos(() => {
                    console.timeEnd("Total Generation");
                });
            });
        });
    });
}

generateOneMillionRecords();