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
    }
}

module.exports = formatters;