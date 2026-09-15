import {
  ExperimentType,
  Language,
  ParticipantGroup,
} from "./enums";

import type {
  AccentStimulus,
  PracticeStimulus,
} from "../data/accent_stimuli";

export interface StartupConfig {
  trResources: any;
  deResources: any;
}

export interface RunOptions {
  assetPaths: {
    images: string[];
    audio: string[];
    video: string[];
  };
  input?: any;
  environment?: string;
  title?: string;
  version?: string;
  testType?: ExperimentType;
}

export interface SavedSession {
  accentStimuli: AccentStimulus[];
  practiceStimuli: PracticeStimulus[];
  trialIndex: number;
  trialData: any[];
  participantNumber: number;
  lang: Language;
  group: ParticipantGroup;
  version?: string;
}
