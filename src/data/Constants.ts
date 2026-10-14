import type { WithContext, Person } from "schema-dts";

export const HOME_TITLE =
  "Tuhin Bhowmick | Android  Developer | Jetpack Compose | Kotlin";

export const HOME_DESC =
  "Software developer specializing in Kotlin, Android development, Kotlin Multiplatform, and Compose Multiplatform.";

export const WEBSITE_URL = "https://tuhinbhowmick.in";

export const OG_IMAGE = "/images/og_image.svg";

export const HERO_TITLE = "Tuhin Bhowmick";

export const HERO_DESC =
  "Software developer specializing in Kotlin, Android, and Kotlin Multiplatform — building cross-platform applications with Compose Multiplatform, offline-first data synchronization, native integrations, and audio processing.";

export const JSON_LD_SCHEMA: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tuhin Bhowmick",
  url: "https://www.tuhinbhowmick.in/",
  sameAs: [
    "https://github.com/tuuhin",
    "https://x.com/tuuhin_",
    "https://www.instagram.com/tuuhin_/",
    "https://www.linkedin.com/in/tuuhin/",
  ],
  jobTitle: "Android Developer",
  knowsAbout: [
    "Kotlin",
    "Jetpack Compose",
    "Ktor",
    "Android",
    "Mobile Development",
  ],
};
