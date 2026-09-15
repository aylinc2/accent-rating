import jsPsychSurvey from "@jspsych/plugin-survey";
import i18next from "i18next";
import { Language } from "../../types/enums";

export function createCouponEmailTimeline(
  updateSession: (idx: number, data: any) => void,
  idx: number
) {
  const isTurkish = () =>
    i18next.language === Language.TR;

  return {
    type: jsPsychSurvey,

    survey_json: () => ({
      showQuestionNumbers: "off",

      completeText: isTurkish()
        ? "Devam"
        : "Weiter",

      elements: [
        {
          type: "html",
          name: "coupon_email_intro",

          html: `
            <div style="
              max-width: 760px;
              margin: 10px auto 24px auto;
              line-height: 1.7;
            ">
              <p>
                ${
                  isTurkish()
                    ? "GoGift hediye çeki için değerlendirmeye alınmak isterseniz e-posta adresinizi aşağıya isteğe bağlı olarak yazabilirsiniz. E-posta adresiniz yalnızca seçilmeniz durumunda hediye çekini size göndermek amacıyla kullanılacaktır. Katılmak istemiyorsanız bu alanı boş bırakarak devam edebilirsiniz."
                    : "Wenn Sie bei der Vergabe des GoGift-Gutscheins berücksichtigt werden möchten, können Sie unten freiwillig Ihre E-Mail-Adresse angeben. Ihre E-Mail-Adresse wird ausschließlich dafür verwendet, Ihnen den Gutschein zuzusenden, falls Sie ausgewählt werden. Wenn Sie nicht teilnehmen möchten, können Sie dieses Feld leer lassen und fortfahren."
                }
              </p>
            </div>
          `,
        },

        {
          type: "text",
          name: "coupon_email",

          title: isTurkish()
            ? "E-posta adresiniz"
            : "Ihre E-Mail-Adresse",

          inputType: "email",

          isRequired: false,

          placeholder: isTurkish()
            ? "E-posta adresinizi buraya yazabilirsiniz"
            : "Sie können Ihre E-Mail-Adresse hier eingeben",
        },
      ],
    }),

    on_finish: (data: any) => {
      data.followup_type = "coupon_email";

      updateSession(idx, data);
    },
  };
} 