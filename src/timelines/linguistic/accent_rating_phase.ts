import jsPsychSurvey from "@jspsych/plugin-survey";
import i18next from "i18next";
import { Language } from "../../types/enums";

import {
  AccentStimulus,
  PracticeStimulus,
} from "../../data/accent_stimuli";
import { registerSurveyTheme } from "../../utils/survey_theme";

export function createAccentRatingTimeline(
  stimuli: (AccentStimulus | PracticeStimulus)[],
  updateSession: (idx: number, data: any) => void,
  startIdx: number,
  isPractice: boolean = false
) {
  const isTurkish = () =>
    i18next.language === Language.TR;

  return stimuli.map((stimulus, index) => {
    return {
      type: jsPsychSurvey,

      survey_json: {
        showQuestionNumbers: "off",

        completeText: isTurkish()
          ? "Devam"
          : "Weiter",

        elements: [
          {
            type: "html",
            name: "audio_player",

            html: `
              <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 10px 0 35px 0;
              ">

                <p style="
                  font-weight: 600;
                  margin-bottom: 12px;
                ">
                  ${
                    isTurkish()
                      ? `Kayıt ${index + 1} / ${stimuli.length}`
                      : `Aufnahme ${index + 1} von ${stimuli.length}`
                  }
                </p>

                <audio
                  id="${stimulus.id}"
                  controls
                  controlsList="nodownload"
                >
                  <source
                    src="${stimulus.audio}"
                    type="audio/wav"
                  >

                  ${
                    isTurkish()
                      ? "Tarayıcınız ses oynatmayı desteklemiyor."
                      : "Ihr Browser unterstützt die Audiowiedergabe nicht."
                  }
                </audio>
              </div>
            `,
          },

          {
            type: "checkbox",
            name: "accent_types",

            title: isTurkish()
              ? "Hangi tür aksan(lar) duyuyorsunuz? Uygun olan tüm seçenekleri işaretleyiniz."
              : "Welche Art von Akzent(en) hören Sie? Wählen Sie alle zutreffenden Antworten aus.",

            choices: [
              {
                value: "standard",

                text: isTurkish()
                  ? "Standart aksan"
                  : "Standardakzent",
              },

              {
                value: "regional",

                text: isTurkish()
                  ? "Bölgesel aksan"
                  : "Regionaler Akzent",
              },

              {
                value: "foreign",

                text: isTurkish()
                  ? "Yabancı aksan"
                  : "Fremdakzent",
              },
            ],

            isRequired: true,
            colCount: 1,
          },

          {
            type: "text",
            name: "regional_accent_text",

            title: isTurkish()
              ? "Sizce konuşmacı hangi bölgesel aksana sahip?"
              : "Welchen regionalen Akzent hat die sprechende Person Ihrer Meinung nach?",

            visibleIf:
              "{accent_types} contains 'regional'",

            isRequired: true,

            requiredErrorText: isTurkish()
              ? "Lütfen duyduğunuz bölgesel aksanı veya diyalekti belirtiniz."
              : "Bitte geben Sie an, welchen regionalen Akzent oder Dialekt Sie hören.",
          },

          {
            type: "html",
            name: "accent_slider_heading",

            visibleIf:
              "{accent_types} contains 'foreign'",

            html: `
              <div style="margin-top: 30px;">

                <p style="
                  font-size: 1.15rem;
                  font-weight: 600;
                  margin-bottom: 14px;
                ">
                  ${
                    isTurkish()
                      ? "Konuşmacının aksanını değerlendiriniz."
                      : "Bewerten Sie den Akzent der sprechenden Person."
                  }
                </p>

                <div style="
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 2px;
                ">

                  <span>
                    ${
                      isTurkish()
                        ? "Kesinlikle anadil konuşucusu"
                        : "Eindeutig muttersprachlich"
                    }
                  </span>

                  <span>
                    ${
                      isTurkish()
                        ? "Kesinlikle yabancı dil konuşucusu"
                        : "Eindeutig fremdsprachig"
                    }
                  </span>

                </div>
              </div>
            `,
          },

          {
            type: "slider",
            name: "accent_rating",

            title: isTurkish()
              ? "Aksan değerlendirmesi"
              : "Akzentbewertung",

            titleLocation: "hidden",

            visibleIf:
              "{accent_types} contains 'foreign'",

            min: 1,
            max: 6,
            step: 1,

            customLabels: [
              1,
              2,
              3,
              4,
              5,
              6,
            ],

            showLabels: true,
            isRequired: true,

            requiredErrorText: isTurkish()
              ? "Lütfen kaydırıcıyı hareket ettirerek bir değerlendirme seçiniz."
              : "Bitte bewegen Sie den Schieberegler und wählen Sie eine Bewertung aus.",
          },

          {
            type: "html",
            name: "speaker_description_scale",

            visibleIf:
              "{accent_part_complete} = true",

            html: `
              <div style="
                width: 100%;
                max-width: 900px;
                margin: 30px auto 10px auto;
                box-sizing: border-box;
              ">

                <p style="
                  font-size: 1.15rem;
                  font-weight: 600;
                  margin-bottom: 28px;
                ">
                  ${
                    isTurkish()
                      ? "Dinlediğiniz kayda dayanarak konuşmacıyı nasıl değerlendirirsiniz?"
                      : "Wie würden Sie die sprechende Person anhand des Gehörten beschreiben?"
                  }
                </p>

                <div style="
                  display: grid;
                  grid-template-columns:
                    minmax(125px, 1fr)
                    repeat(6, minmax(34px, 48px))
                    minmax(125px, 1fr);
                  column-gap: 8px;
                  row-gap: 22px;
                  align-items: center;
                  width: 100%;
                  box-sizing: border-box;
                ">

                  <div></div>

                  <div style="text-align:center;">1</div>
                  <div style="text-align:center;">2</div>
                  <div style="text-align:center;">3</div>
                  <div style="text-align:center;">4</div>
                  <div style="text-align:center;">5</div>
                  <div style="text-align:center;">6</div>

                  <div></div>

                  <div style="text-align:right;">
                    ${
                      isTurkish()
                        ? "Güvenilir"
                        : "Vertrauenswürdig"
                    }
                  </div>

                  ${[1, 2, 3, 4, 5, 6]
                    .map(
                      (value) => `
                        <label style="
                          display:flex;
                          justify-content:center;
                        ">
                          <input
                            type="radio"
                            name="speaker-trustworthiness"
                            value="${value}"
                            style="
                              width:20px;
                              height:20px;
                            "
                          />
                        </label>
                      `
                    )
                    .join("")}

                  <div>
                    ${
                      isTurkish()
                        ? "Güvenilmez"
                        : "Nicht vertrauenswürdig"
                    }
                  </div>

                  <div style="text-align:right;">
                    ${
                      isTurkish()
                        ? "Yüksek eğitimli"
                        : "Hoch gebildet"
                    }
                  </div>

                  ${[1, 2, 3, 4, 5, 6]
                    .map(
                      (value) => `
                        <label style="
                          display:flex;
                          justify-content:center;
                        ">
                          <input
                            type="radio"
                            name="speaker-education"
                            value="${value}"
                            style="
                              width:20px;
                              height:20px;
                            "
                          />
                        </label>
                      `
                    )
                    .join("")}

                  <div>
                    ${
                      isTurkish()
                        ? "Eğitimsiz"
                        : "Ungebildet"
                    }
                  </div>

                  <div style="text-align:right;">
                    ${
                      isTurkish()
                        ? "Şehirli"
                        : "Städtisch"
                    }
                  </div>

                  ${[1, 2, 3, 4, 5, 6]
                    .map(
                      (value) => `
                        <label style="
                          display:flex;
                          justify-content:center;
                        ">
                          <input
                            type="radio"
                            name="speaker-urbanity"
                            value="${value}"
                            style="
                              width:20px;
                              height:20px;
                            "
                          />
                        </label>
                      `
                    )
                    .join("")}

                  <div>
                    ${
                      isTurkish()
                        ? "Şehirli değil"
                        : "Nicht städtisch"
                    }
                  </div>

                  <div style="text-align:right;">
                    ${
                      isTurkish()
                        ? "Varlıklı"
                        : "Wohlhabend"
                    }
                  </div>

                  ${[1, 2, 3, 4, 5, 6]
                    .map(
                      (value) => `
                        <label style="
                          display:flex;
                          justify-content:center;
                        ">
                          <input
                            type="radio"
                            name="speaker-wealth"
                            value="${value}"
                            style="
                              width:20px;
                              height:20px;
                            "
                          />
                        </label>
                      `
                    )
                    .join("")}

                  <div>
                    ${
                      isTurkish()
                        ? "Yoksul"
                        : "Arm"
                    }
                  </div>
                </div>

                <div
                  id="speaker-description-error"
                  style="
                    display: none;
                    margin-top: 18px;
                    color: #d32f2f;
                    font-weight: 600;
                  "
                >
                  ${
                    isTurkish()
                      ? "Lütfen dört değerlendirmenin tümünü yanıtlayınız."
                      : "Bitte beantworten Sie alle vier Bewertungen."
                  }
                </div>

              </div>
            `,
          },
        ],
      },

      survey_function: (survey: any) => {
        registerSurveyTheme(survey);

        const updateAccentPartComplete = (
          sender: any
        ) => {
          const accentTypes =
            sender.getValue("accent_types") ?? [];

          if (
            !Array.isArray(accentTypes) ||
            accentTypes.length === 0
          ) {
            sender.setValue(
              "accent_part_complete",
              false
            );

            return;
          }

          const hasRegional =
            accentTypes.includes("regional");

          const hasForeign =
            accentTypes.includes("foreign");

          const regionalComplete =
            !hasRegional ||
            Boolean(
              sender
                .getValue(
                  "regional_accent_text"
                )
                ?.trim()
            );

          const foreignRating =
            sender.getValue("accent_rating");

          const foreignComplete =
            !hasForeign ||
            (
              foreignRating !== undefined &&
              foreignRating !== null &&
              foreignRating !== ""
            );

          sender.setValue(
            "accent_part_complete",
            regionalComplete &&
              foreignComplete
          );
        };

        survey.onValueChanged.add(
          (sender: any) => {
            updateAccentPartComplete(sender);
          }
        );

        survey.onCompleting.add(
          (
            sender: any,
            options: any
          ) => {
            const trustworthiness =
              document.querySelector(
                'input[name="speaker-trustworthiness"]:checked'
              ) as HTMLInputElement | null;

            const education =
              document.querySelector(
                'input[name="speaker-education"]:checked'
              ) as HTMLInputElement | null;

            const urbanity =
              document.querySelector(
                'input[name="speaker-urbanity"]:checked'
              ) as HTMLInputElement | null;

            const wealth =
              document.querySelector(
                'input[name="speaker-wealth"]:checked'
              ) as HTMLInputElement | null;

            const errorMessage =
              document.getElementById(
                "speaker-description-error"
              );

            if (
              !trustworthiness ||
              !education ||
              !urbanity ||
              !wealth
            ) {
              options.allow = false;

              if (errorMessage) {
                errorMessage.style.display =
                  "block";
              }

              return;
            }

            if (errorMessage) {
              errorMessage.style.display =
                "none";
            }

            sender.setValue(
              "speaker_description_ratings",
              {
                trustworthiness: Number(
                  trustworthiness.value
                ),

                education: Number(
                  education.value
                ),

                urbanity: Number(
                  urbanity.value
                ),

                wealth: Number(
                  wealth.value
                ),
              }
            );
          }
        );
      },

      on_load: () => {
        const audio =
          document.getElementById(
            stimulus.id
          ) as HTMLAudioElement | null;

        if (audio) {
          let completedPlayCount = 0;

          audio.addEventListener(
            "ended",
            () => {
              completedPlayCount += 1;

              if (
                completedPlayCount >= 2
              ) {
                audio.controls = false;
              }
            }
          );
        }
      },

      on_finish: (data: any) => {
        data.stimulus_id =
          stimulus.id;

        data.audio_file =
          stimulus.audio;

        data.is_practice =
          isPractice;

        if (
          !isPractice &&
          "speakerGroup" in stimulus &&
          "block" in stimulus
        ) {
          data.speaker_group =
            stimulus.speakerGroup;

          data.block =
            stimulus.block;
        }

        console.log(
          "Accent trial response:",
          data.response
        );

        console.log(
          "Reaction time:",
          data.rt
        );

        updateSession(
          startIdx + index,
          data
        );
      },
    };
  });
} 