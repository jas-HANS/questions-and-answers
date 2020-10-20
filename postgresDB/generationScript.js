const { generateProducts, generateQuestions, generateAnswers, generatePhotos } = require('./generate_data');

//==========================
//==== GENERATE 1 MIL ======
//==========================

const generateOneMillionRecords = () => {
    console.time("Product Generation")
    generateProducts(() => {
        console.timeEnd("Product Generation");
        console.time("Question Generation");
        generateQuestions(() => {
            console.timeEnd("Question Generation");
            console.time("Answer Generation");
            generateAnswers(() => {
                console.timeEnd("Answer Generation");
                console.time("Photo Generation");
                generatePhotos(() => {
                    console.timeEnd("Photo Generation");
                });
            });
        });
    });
}

generateOneMillionRecords();