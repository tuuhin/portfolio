import type { WithContext, Person } from "schema-dts";

export const HOME_TITLE =
  "Tuhin Bhowmick | Android  Developer | Jetpack Compose | Kotlin";

export const HOME_DESC =
  "Hello I am  Tuhin, an Android developer with a strong passion for creating impactful mobile applications";

export const OG_IMAGE = "/images/og_image.svg";

export const WEBSITE_URL = "https://tuhinbhowmick.in";

export const HERO_TITLE = "Tuhin Bhowmick";

export const HERO_DESC =
  "Android developer with a strong foundation in mobile app development. Possessing two years of hands-on experience in building robust and user-centric applications.";

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
