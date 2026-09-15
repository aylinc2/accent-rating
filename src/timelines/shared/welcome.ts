import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import i18next from "i18next";
import { Phase } from "../../types/enums";
import { renderParagraphs, resolvePlugin, tContinueParagraphs } from "../../utils/helpers";

export function createWelcomeTimeline(
  baseTrial: any,
  updateSession: (idx: number, data: any) => void,
  idx: number,
  _savedSession: any
) {
  return {
    ...baseTrial,
    type: resolvePlugin(HtmlButtonResponsePlugin),
    stimulus: () =>
      renderParagraphs(tContinueParagraphs("intro.welcome_task"), "welcome-container"),
    choices: [i18next.t("buttons.continue")],
    on_finish: (d: any) => {
      d.phase = Phase.SETUP;
      updateSession(idx, d);
    },
  };
}
