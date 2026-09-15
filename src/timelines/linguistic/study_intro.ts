import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import i18next from "i18next";
import { renderParagraphs, resolvePlugin, tContinueParagraphs } from "../../utils/helpers";

export function createStudyIntroTimeline(
  baseTrial: any,
  updateSession: (idx: number, data: any) => void,
  idx: number,
  _session: any
) {
  return {
    ...baseTrial,
    type: resolvePlugin(HtmlButtonResponsePlugin),
    stimulus: () =>
      renderParagraphs(
        tContinueParagraphs("intro.linguistic_study_phase"),
        "instruction-container"
      ),
    choices: [i18next.t("buttons.continue")],
    on_finish: (d: any) => updateSession(idx, d),
  };
}
