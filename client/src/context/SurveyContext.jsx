import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
  const [survey, setSurvey] = useState({
    type: "",
    recipient: "",
    questions: [],
    theme: "romantic",
    link: "",
  });

  const updateSurvey = (data) => {
    setSurvey((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <SurveyContext.Provider
      value={{
        survey,
        updateSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurvey() {
  return useContext(SurveyContext);
}