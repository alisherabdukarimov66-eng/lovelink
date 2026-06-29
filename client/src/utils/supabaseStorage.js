import { supabase } from "../lib/supabase";

// So'rovnoma saqlash
export async function saveSurvey(survey) {
  const { error } = await supabase
    .from("surveys")
    .insert([
      {
        id: survey.id,
        type: survey.type,
        recipient: survey.recipient,
        theme: survey.theme,
        questions: survey.questions,
      },
    ]);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

// Bitta so'rovnomani olish
export async function getSurvey(id) {
  const { data, error } = await supabase
    .from("surveys")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

// Javob saqlash
export async function saveAnswer(answer) {
  const { error } = await supabase
    .from("answers")
    .insert([
      {
        survey_id: answer.surveyId,
        answers: answer.answers,
      },
    ]);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

// Javoblarni olish
export async function getAnswers(surveyId) {
  const { data, error } = await supabase
    .from("answers")
    .select("*")
    .eq("survey_id", surveyId);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

// Barcha so'rovnomalarni olish
export async function getAllSurveys() {
  const { data, error } = await supabase
    .from("surveys")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}