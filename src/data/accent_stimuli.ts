import { shuffleArray } from "../utils/helpers";
export type AccentStimulus = {
  id: string;
  audio: string;
  speakerGroup: "HS" | "Ret" | "M" | "L2"; 
  block: number;
};

export type PracticeStimulus = {
  id: string;
  audio: string;
};

const PRACTICE_KAR_TUN: PracticeStimulus = {
  id: "de_practice_1",
  audio: "assets/audios/de/practice_1.wav", 
};

const PRACTICE_KUB_TAS: PracticeStimulus = { 
  id: "de_practice_2",
  audio: "assets/audios/de/practice_2.wav",
};

const PRACTICE_OY_CEV: PracticeStimulus = {
  id: "de_practice_4",
  audio: "assets/audios/de/practice_4.wav",
};

const PRACTICE_SI_UN: PracticeStimulus = {
  id: "de_practice_5",
  audio: "assets/audios/de/practice_5.wav",
};

export const GERMAN_PRACTICE_LISTS: PracticeStimulus[][] = [
  // Main List 1:
  // Si_Un = standard-like; Oy_Cev = regional/foreign-like
  [PRACTICE_SI_UN, PRACTICE_OY_CEV],

  // Main List 2:
  // Kar_Tun = standard-like; Kub_Tas = foreign-like
  [PRACTICE_KAR_TUN, PRACTICE_KUB_TAS],

  // Main List 3:
  // Si_Un = standard-like; Oy_Cev = regional/foreign-like
  [PRACTICE_SI_UN, PRACTICE_OY_CEV],
];

export function getGermanPracticeStimuli(
  participantNumber: number
): PracticeStimulus[] {
  const listIndex =
    (participantNumber - 1) % GERMAN_PRACTICE_LISTS.length;

  const selectedPracticeList = GERMAN_PRACTICE_LISTS[listIndex];

  return shuffleArray([...selectedPracticeList]);
} 

const PRACTICE_BA: PracticeStimulus = {
  id: "tr_practice_1",
  audio: "assets/audios/tr/practice_1.wav",
};

const PRACTICE_FD: PracticeStimulus = {
  id: "tr_practice_2",
  audio: "assets/audios/tr/practice_2.wav",
};

const PRACTICE_CEN_AV: PracticeStimulus = {
  id: "tr_practice_3",
  audio: "assets/audios/tr/practice_3.wav",
};

const PRACTICE_SUL_TOK: PracticeStimulus = {
  id: "tr_practice_4",
  audio: "assets/audios/tr/practice_4.wav",
};

export const TURKISH_PRACTICE_LISTS: PracticeStimulus[][] = [
  // Main List 1
  [PRACTICE_FD, PRACTICE_SUL_TOK],

  // Main List 2
  [PRACTICE_FD, PRACTICE_CEN_AV],

  // Main List 3
  [PRACTICE_BA, PRACTICE_CEN_AV],
];

export function getTurkishPracticeStimuli(
  participantNumber: number
): PracticeStimulus[] {
  const listIndex =
    (participantNumber - 1) % TURKISH_PRACTICE_LISTS.length;

  const selectedPracticeList = TURKISH_PRACTICE_LISTS[listIndex];

  return shuffleArray([...selectedPracticeList]);
}

function createStimulus(id: string, block: number, language: "de" | "tr"): AccentStimulus {
  const speakerGroup = id.split("_")[0] as AccentStimulus["speakerGroup"];

  return {
    id,
    audio: `assets/audios/${language}/${id}.wav`, 
    speakerGroup,
    block,
  };
}

export const GERMAN_LIST_1 = [
  [
    "HS_GR_1",
    "HS_GR_2",
    "Ret_GR_1",
    "Ret_GR_2",
    "M_GR_1",
    "L2_GR_1",
  ].map((id) => createStimulus(id, 1, "de")),

  [
    "HS_GR_7",
    "HS_GR_8",
    "Ret_GR_7",
    "Ret_GR_8",
    "M_GR_2",
    "L2_GR_2",
  ].map((id) => createStimulus(id, 2, "de")),

  [
    "HS_GR_13",
    "HS_GR_14",
    "Ret_GR_13",
    "Ret_GR_14",
    "M_GR_3",
    "L2_GR_3",
  ].map((id) => createStimulus(id, 3, "de")),

  [
    "HS_GR_19",
    "HS_GR_20",
    "Ret_GR_19",
    "Ret_GR_20",
    "M_GR_4",
    "L2_GR_4",
  ].map((id) => createStimulus(id, 4, "de")),

  [
    "HS_GR_25",
    "HS_GR_26",
    "Ret_GR_25",
    "Ret_GR_26",
    "M_GR_5",
    "L2_GR_5", 
  ].map((id) => createStimulus(id, 5, "de")),
];

export const GERMAN_LIST_2 = [
  [
    "HS_GR_5",
    "HS_GR_6",
    "Ret_GR_5",
    "Ret_GR_6",
    "M_GR_1",
    "L2_GR_1",
  ].map((id) => createStimulus(id, 1, "de")),

  [
    "HS_GR_11",
    "HS_GR_12",
    "Ret_GR_11",
    "Ret_GR_12",
    "M_GR_2",
    "L2_GR_2",
  ].map((id) => createStimulus(id, 2, "de")),

  [
    "HS_GR_17",
    "HS_GR_18",
    "Ret_GR_17",
    "Ret_GR_18",
    "M_GR_3",
    "L2_GR_3",
  ].map((id) => createStimulus(id, 3, "de")),

  [
    "HS_GR_23",
    "HS_GR_24",
    "Ret_GR_23",
    "Ret_GR_24",
    "M_GR_4",
    "L2_GR_4",
  ].map((id) => createStimulus(id, 4, "de")),

  [
    "HS_GR_29",
    "Ret_GR_29",
    "Ret_GR_30",
    "M_GR_5",
    "L2_GR_5",
  ].map((id) => createStimulus(id, 5, "de")),
];

export const GERMAN_LIST_3 = [
  [
    "HS_GR_3",
    "HS_GR_4",
    "Ret_GR_3",
    "Ret_GR_4",
    "M_GR_1",
    "L2_GR_1",
  ].map((id) => createStimulus(id, 1, "de")),

  [
    "HS_GR_9",
    "HS_GR_10",
    "Ret_GR_9",
    "Ret_GR_10",
    "M_GR_2",
    "L2_GR_2",
  ].map((id) => createStimulus(id, 2, "de")),

  [
    "HS_GR_15",
    "HS_GR_16",
    "Ret_GR_15",
    "Ret_GR_16",
    "M_GR_3",
    "L2_GR_3",
  ].map((id) => createStimulus(id, 3, "de")),

  [
    "HS_GR_21",
    "HS_GR_22",
    "Ret_GR_21",
    "Ret_GR_22",
    "M_GR_4",
    "L2_GR_4",
  ].map((id) => createStimulus(id, 4, "de")),

  [
    "HS_GR_27",
    "HS_GR_28",
    "Ret_GR_27",
    "Ret_GR_28",
    "M_GR_5",
    "L2_GR_5",
  ].map((id) => createStimulus(id, 5, "de")),
];

export const GERMAN_STIMULUS_LISTS = [
  GERMAN_LIST_1,
  GERMAN_LIST_2,
  GERMAN_LIST_3,
]; 
export function getGermanStimulusList(
  participantNumber: number
): AccentStimulus[] {
  const listIndex =
    (participantNumber - 1) % GERMAN_STIMULUS_LISTS.length;

  const selectedList = GERMAN_STIMULUS_LISTS[listIndex];

  const randomizedBlocks = shuffleArray([...selectedList]);

   return randomizedBlocks.reduce(
    (allStimuli: AccentStimulus[], block: AccentStimulus[]) => [
      ...allStimuli,
      ...shuffleArray([...block]),
    ],
    []
  );
} 
export const TURKISH_LIST_1 = [
  [
    "HS_TR_1",
    "HS_TR_2",
    "Ret_TR_1",
    "Ret_TR_2",
    "M_TR_1",
    "L2_TR_1",
  ].map((id) => createStimulus(id, 1, "tr")),

  [
    "HS_TR_7",
    "HS_TR_8",
    "Ret_TR_7",
    "Ret_TR_8",
    "M_TR_2",
    "L2_TR_2",
  ].map((id) => createStimulus(id, 2, "tr")),

  [
    "HS_TR_13",
    "HS_TR_14",
    "Ret_TR_13",
    "Ret_TR_14",
    "M_TR_3",
    "L2_TR_3",
  ].map((id) => createStimulus(id, 3, "tr")),

  [
    "HS_TR_19",
    "HS_TR_20",
    "Ret_TR_19",
    "Ret_TR_20",
    "M_TR_4",
    "L2_TR_4",
  ].map((id) => createStimulus(id, 4, "tr")),

  [
    "HS_TR_25",
    "HS_TR_26",
    "Ret_TR_25",
    "Ret_TR_26",
    "M_TR_5",
    "L2_TR_5",
  ].map((id) => createStimulus(id, 5, "tr")),
];

export const TURKISH_LIST_2 = [
  [
    "HS_TR_5",
    "HS_TR_6",
    "Ret_TR_5",
    "Ret_TR_6",
    "M_TR_1",
    "L2_TR_1",
  ].map((id) => createStimulus(id, 1, "tr")),

  [
    "HS_TR_11",
    "HS_TR_12",
    "Ret_TR_11",
    "Ret_TR_12",
    "M_TR_2",
    "L2_TR_2",
  ].map((id) => createStimulus(id, 2, "tr")),

  [
    "HS_TR_17",
    "HS_TR_18",
    "Ret_TR_17",
    "Ret_TR_18",
    "M_TR_3",
    "L2_TR_3",
  ].map((id) => createStimulus(id, 3, "tr")),

  [
    "HS_TR_23",
    "HS_TR_24",
    "Ret_TR_23",
    "Ret_TR_24",
    "M_TR_4",
    "L2_TR_4",
  ].map((id) => createStimulus(id, 4, "tr")),

  [
    "HS_TR_29", 
    "Ret_TR_29",
    "Ret_TR_30",
    "M_TR_5",
    "L2_TR_5",
  ].map((id) => createStimulus(id, 5, "tr")),
];

export const TURKISH_LIST_3 = [
  [
    "HS_TR_3",
    "HS_TR_4",
    "Ret_TR_3",
    "Ret_TR_4",
    "M_TR_1",
    "L2_TR_1",
  ].map((id) => createStimulus(id, 1, "tr")),

  [
    "HS_TR_9",
    "HS_TR_10",
    "Ret_TR_9",
    "Ret_TR_10",
    "M_TR_2",
    "L2_TR_2",
  ].map((id) => createStimulus(id, 2, "tr")),

  [
    "HS_TR_15",
    "HS_TR_16",
    "Ret_TR_15",
    "Ret_TR_16",
    "M_TR_3",
    "L2_TR_3",
  ].map((id) => createStimulus(id, 3, "tr")),

  [
    "HS_TR_21",
    "HS_TR_22",
    "Ret_TR_21",
    "Ret_TR_22",
    "M_TR_4",
    "L2_TR_4",
  ].map((id) => createStimulus(id, 4, "tr")),

  [
    "HS_TR_27",
    "HS_TR_28",
    "Ret_TR_27",
    "Ret_TR_28",
    "M_TR_5",
    "L2_TR_5",
  ].map((id) => createStimulus(id, 5, "tr")),
];

export const TURKISH_STIMULUS_LISTS = [
  TURKISH_LIST_1,
  TURKISH_LIST_2,
  TURKISH_LIST_3,
];

export function getTurkishStimulusList(
  participantNumber: number
): AccentStimulus[] {
  const listIndex =
    (participantNumber - 1) % TURKISH_STIMULUS_LISTS.length;

  const selectedList =
    TURKISH_STIMULUS_LISTS[listIndex];

  const randomizedBlocks =
    shuffleArray([...selectedList]);

  return randomizedBlocks.reduce(
    (
      allStimuli: AccentStimulus[],
      block: AccentStimulus[]
    ) => [
      ...allStimuli,
      ...shuffleArray([...block]), 
    ],
    []
  );
} 