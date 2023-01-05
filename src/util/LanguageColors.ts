import { KnownLanguage } from "../data/languages";

const langColorMap = new Map<KnownLanguage, string>([
  [KnownLanguage.Dart, "bg-sky-400"],
  [KnownLanguage.JavaScript, "bg-amber-400"],
  [KnownLanguage.Kotlin, "bg-indigo-400"],
  [KnownLanguage.Python, "bg-sky-400"],
]);

export const getLangColor = (lang: KnownLanguage): string =>
  langColorMap.get(lang) ?? "";
