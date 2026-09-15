import i18next from "i18next";
import { Language } from "../types/enums";

export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function currentLang(): Language | null {
  const lang = i18next.language?.split("-")[0];

  if (lang === Language.TR || lang === Language.DE) {
    return lang as Language;
  }
  return null;
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function resolvePlugin<T>(plugin: T | { default: T }): T {
  if (
    plugin &&
    typeof plugin === "object" &&
    "default" in plugin &&
    (plugin as { default: T }).default
  ) {
    return (plugin as { default: T }).default;
  }
  return plugin as T;
}

export function renderParagraphs(
  paragraphs: string | readonly string[],
  containerClass: string
): string {
  const items = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  const body = items
    .filter((paragraph) => paragraph.trim().length > 0)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  return `<div class="${containerClass}">${body}</div>`;
}

export function tParagraphs(
  key: string,
  options?: Record<string, unknown>
): string[] {
  const value = i18next.t(key, { returnObjects: true });
  const interpolate = (text: string) => {
    if (!options) return text;
    return Object.entries(options).reduce(
      (acc, [name, val]) => acc.replaceAll(`{{${name}}}`, String(val ?? "")),
      text
    );
  };

  if (Array.isArray(value)) {
    return value.map((item) => interpolate(String(item)));
  }

  if (typeof value === "string") {
    return [interpolate(value)];
  }

  return [];
}

export function tContinueParagraphs(key: string): string[] {
  return tParagraphs(key, { button: i18next.t("buttons.continue") });
}
