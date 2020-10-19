const formatters = {
    questionFormatter: (body) => {
        return {
            question_id: Math.floor(Math.random() * Math.floor(1000)),
            question_body: body.body,
            question_date: new Date(),
            asker_name: body.name,
            question_helpfulness: 0,
            reported: 0,
            answers: []
        }
    },
    answersFormatter: (response, count) => {
        const results = response[0].results[0];
        let answers = results.answers;
        if (count !== undefined) {
            answers = results.answers.splice(0, count);
        }
        const answerObj = {
            question: response[0]._id,
            page: 0,
            results: answers
        }
        return answerObj;
    }
}

module.exports = formatters;