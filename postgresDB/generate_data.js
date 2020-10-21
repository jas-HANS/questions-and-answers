const fs = require('fs');
const {createProduct, createAnswer, createPhoto, createQuestion} = require('./faker_data.js');

//======================
//==== PRODUCT GEN =====
//======================

const generateProducts = (callback) => {
    const writeProductStream = fs.createWriteStream('productData.csv');
    let i = 1000000;
    const write = () => {
        let status = true;
        while (i > 0 && status) {
            i--; 
            const newProduct = createProduct();
            if (i === 0) {
                writeProductStream.write(newProduct, 'utf-8', () => { writeProductStream.end(); callback(); });
            } else {
                status = writeProductStream.write(newProduct, 'utf-8');
            }
        }
        if (i > 0) {
            writeProductStream.once('drain', write);
        }
    }
    write();
};

//======================
//==== QUESTION GEN ====
//======================

const generateQuestions = (callback) => {
    const writeQuestionStream = fs.createWriteStream('questionData.csv');
    let i = 1000000;
    const write = () => {
        let status = true;
        let currentProduct = 1;
        let questionsPerProductTotal = Math.random() * Math.floor(20);
        let qPerPCount = 0;
        while (i > 0 && status) {
            i--;
            if (qPerPCount === questionsPerProductTotal) {
                if (currentProduct === 100000 || currentProduct === 99999) {
                    currentProduct = 1;
                } else {
                    currentProduct++;
                }
                questionsPerProductTotal = Math.random() * Math.floor(20);
                qPerPCount = 0;
            } else {
                qPerPCount++;
            }
            const newQuestion = createQuestion(currentProduct);
            if (i === 0) {
                writeQuestionStream.write(newQuestion, 'utf-8', () => { writeQuestionStream.end(); callback(); });
            } else {
                status = writeQuestionStream.write(newQuestion, 'utf-8');
            }
        }
        if (i > 0) {
            writeQuestionStream.once('drain', write);
        }
    }
    write();
};

//======================
//===== ANSWER GEN =====
//======================

const generateAnswers = (callback) => {
    const writeAnswersStream = fs.createWriteStream('answersData.csv');
    let i = 1000000;
    const write = () => {
        let status = true;
        let currentQuestion = 1;
        let answersPerQuestionsTotal = Math.random() * Math.floor(20);
        let aPerQCount = 0;
        while (i > 0 && status) {
            i--; 
            if (aPerQCount === answersPerQuestionsTotal) {
                if (currentQuestion >= 100000) {
                    currentQuestion = 1;
                } else {
                    currentQuestion++;
                }
                answersPerQuestionsTotal = Math.random() * Math.floor(20);
                aPerQCount = 0;
            } else {
                aPerQCount++;
            }
            const newAnswer = createAnswer(currentQuestion);
            if (i === 0) {
                writeAnswersStream.write(newAnswer, 'utf-8', () => { writeAnswersStream.end(); callback(); });
            } else {
                status = writeAnswersStream.write(newAnswer, 'utf-8');
            }
        }
        if (i > 0) {
            writeAnswersStream.once('drain', write);
        }
    }
    write();
};

//======================
//===== PHOTO GEN ======
//======================

const generatePhotos = (callback) => {
    const writePhotosStream = fs.createWriteStream('photosData.csv');
    let i = 1000000;
    const write = () => {
        let status = true;
        let currentAnswer = 1;
        let photosPerAnswerTotal = Math.random() * Math.floor(5);
        let pPerACount = 0;
        while (i > 0 && status) {
            i--; 
            if (pPerACount === photosPerAnswerTotal) {
                if (currentAnswer === 100000 || currentAnswer === 99999) {
                    currentAnswer = 1;
                } else {
                    currentAnswer++;
                }
                photosPerAnswerTotal = Math.random() * Math.floor(20);
                pPerACount = 0;
            } else {
                pPerACount++;
            }
            const newPhoto = createPhoto(currentAnswer);
            if (i === 0) {
                writePhotosStream.write(newPhoto, 'utf-8', () => { writePhotosStream.end(); callback(); });
            } else {
                status = writePhotosStream.write(newPhoto, 'utf-8');
            }
        }
        if (i > 0) {
            writePhotosStream.once('drain', write);
        }
    }
    write();
};

module.exports = {
    generateProducts,
    generateQuestions,
    generateAnswers,
    generatePhotos
}