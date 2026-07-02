import { supabase } from "../lib/supabase";

// So'rovnoma saqlash
export async function saveSurvey(survey) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("Foydalanuvchi login qilmagan");
    return false;
  }

  const { error } = await supabase.from("surveys").insert([
    {
      id: survey.id,
      user_id: user.id,
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
  const { error } = await supabase.from("answers").insert([
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

// Javoblar sonini olish
export async function getAnswersCount(surveyId) {
  const { count, error } = await supabase
    .from("answers")
    .select("*", { count: "exact", head: true })
    .eq("survey_id", surveyId);

  if (error) {
    console.error(error);
    return 0;
  }

  return count || 0;
}

// Barcha so'rovnomalarni olish
export async function getAllSurveys() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("surveys")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  const surveysWithCount = await Promise.all(
    data.map(async (survey) => ({
      ...survey,
      answersCount: await getAnswersCount(survey.id),
    }))
  );

  return surveysWithCount;
}

// So'rovnomani o'chirish
export async function deleteSurvey(id) {
  await supabase
    .from("answers")
    .delete()
    .eq("survey_id", id);

  const { error } = await supabase
    .from("surveys")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}
