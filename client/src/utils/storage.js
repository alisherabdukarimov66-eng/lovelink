export function saveSurvey(survey) {
  const surveys =
    JSON.parse(localStorage.getItem("lovelink-surveys")) || [];

  const exists = surveys.find((item) => item.id === survey.id);

  if (exists) return;

  surveys.push(survey);

  localStorage.setItem(
    "lovelink-surveys",
    JSON.stringify(surveys)
  );
}

export function getSurvey(id) {
  const surveys =
    JSON.parse(localStorage.getItem("lovelink-surveys")) || [];

  return surveys.find((item) => item.id === id);
}

export function getAllSurveys() {
  return (
    JSON.parse(localStorage.getItem("lovelink-surveys")) || []
  );
}

export function saveAnswer(answer) {
  const answers =
    JSON.parse(localStorage.getItem("lovelink-answers")) || [];

  answers.push(answer);

  localStorage.setItem(
    "lovelink-answers",
    JSON.stringify(answers)
  );
}

export function getAnswers(surveyId) {
  const answers =
    JSON.parse(localStorage.getItem("lovelink-answers")) || [];

  return answers.filter(
    (item) => item.surveyId === surveyId
  );
}