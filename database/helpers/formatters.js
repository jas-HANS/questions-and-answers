const photoParser = (photoArray) => {
  const photos = [];
  photoArray.map((photo) => photos.push({ url: photo }));
  return photos;
};

const formatters = {
  questionFormatter: (body) => {
    return {
      question_body: body.body,
      question_date: new Date(),
      asker_name: body.name,
      question_helpfulness: 0,
      reported: 0,
      answers: [],
    };
  },
  
  answerResponseFormatter: (response, count) => {
    if (!response[0].results[0]) {
      return {};
    } else {
      const results = response[0].results[0];
      let answers = results.answers;
      if (count !== undefined) {
        answers = results.answers.splice(0, count);
      }
      const answerObj = {
        question: response[0].results[0]._id,
        page: 0,
        results: answers,
      };
      return answerObj;
    }
  },

  answerFormatter: (body) => {
    let photos = [];
    if(body.photos) {
      photos = photoParser(body.photos);
    }
    return {
      body: body.body,
      date: new Date(),
      answerer_name: body.name,
      helpfulness: 0,
      photos: photos,
    };
  },
};

module.exports = formatters;
