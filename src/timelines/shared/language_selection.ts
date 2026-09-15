import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import i18next from "i18next";
import { Language } from "../../types/enums";
import { resolvePlugin } from "../../utils/helpers";

export function createLanguageSelectionTimeline(jsPsych: any) {
  return {
    type: resolvePlugin(HtmlButtonResponsePlugin),
    stimulus:
      '<div class="lang-selection-container" id="lang-selection-root"></div>',
    choices: [
      i18next.t("language_selection.turkish"),
      i18next.t("language_selection.german"),
    ],
    on_load: () => {
      const root = document.getElementById("lang-selection-root");
      if (!root) return;

      root.replaceChildren();

      const heading = document.createElement("h2");
      heading.className = "lang-selection-title";
      heading.textContent = i18next.t("language_selection.title");
      root.appendChild(heading);
    },
    on_finish: (data: any) => {
      const selectedLang = data.response === 0 ? Language.TR : Language.DE;

      data.lang = selectedLang;

      i18next.changeLanguage(selectedLang);

      jsPsych.data.addProperties({ lang: selectedLang });
    },
  };
}
