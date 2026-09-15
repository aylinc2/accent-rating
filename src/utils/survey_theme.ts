import { Model } from "survey-core";
import { DefaultDark, DefaultLight } from "survey-core/themes";

function currentSurveyTheme() {
  return document.body.classList.contains("dark-mode")
    ? DefaultDark
    : DefaultLight;
}

function writeThemeCssVars(theme: {
  cssVariables?: Record<string, string>;
}) {
  const vars = theme.cssVariables;
  if (!vars) return;

  document.querySelectorAll(".sd-root-modern").forEach((root) => {
    const el = root as HTMLElement;
    for (const [key, value] of Object.entries(vars)) {
      el.style.setProperty(key, value);
    }
  });
}

export function applyDocumentSurveyTheme() {
  writeThemeCssVars(currentSurveyTheme());
}

export function registerSurveyTheme(survey: Model) {
  const apply = () => {
    survey.applyTheme(currentSurveyTheme());
    writeThemeCssVars(currentSurveyTheme());
  };

  // jsPsych survey plugin forces a light theme after survey_function.
  setTimeout(apply, 0);
}
