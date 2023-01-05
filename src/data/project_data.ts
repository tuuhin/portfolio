import { KnownLanguage } from "./languages";

export interface ProjectInfo {
  title: string;
  description: string;
  tags: string[];
  languages: readonly KnownLanguage[];
  image?: string;
  projectURL: string;
}

export const projectData: ProjectInfo[] = [
  {
    title: "Calculator App",
    description:
      "An calculator clone of the in-built calculator that comes with devices.This app add some extra features with calculator like currency convertor ,length convertor,weight convertor and many other",
    tags: ["Flutter", "calculator-app", "currency-app"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/calculator_",
  },
  {
    title: "Weather App",
    description:
      "A weather app made with flutter using openweathermap api.This app provides the weather of the current location, the other location can be too search to get some summarized data of that location, the location can be set as a default location to get the detailed data",
    tags: ["Flutter", "openwathermapapi", "weather-app"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/weather_app",
  },
  {
    title: "ClockWork",
    description:
      "The clock app in our phone is a very interesting one, it has alarms, stopwatch ,timmer,clock (obiously 😀).Implementing them togerther was fun ,and here are the results that I came forward with a flutter app taht have most of those features",
    tags: ["alarm-manager", "flutter", "worldtimeapi", "clock"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/clockwork",
  },
  {
    title: "Pokedex",
    description:
      "The name is self sufficient to describe the project. This is a cross-platform pokedex app made with flutter. An user can look for any type of pokemon data such as the pokemon itself,moves,ability,item,location,types-charts ans so-on",
    tags: ["pokeapi", "flutter", "cross-platform"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/pokedex_",
  },
  {
    title: "Expense Tracker",
    description:
      "A money tracking app made using flutter with a custom app backend made with django.This is a expense tracker which will trackup with you expense data, the app comes with a user auth system with a profile i.e, you have a customizable profile. A budget mechanism is added so that the expenses can be made track off.",
    tags: [
      "Flutter",
      "Cached-storage",
      "JWT-Authentication",
      "Hive-Db",
      "Flutterbloc",
      "Custom backend",
    ],
    languages: [KnownLanguage.Python, KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/expense_tracker",
  },
  {
    title: "Android Todo App",
    description:
      "A native android app made by Kotlin and Jetpack Compose with a python backend.The primary data source is a database which is quired via a python web server made using fastapi,the seconadry data source is the room databse for android which serves as the cache.This project was creating to understand Android with the Jetpack libraries it uses",
    tags: ["Android", "FastApi", "Room", "Retrofit", "beginer-project"],
    languages: [KnownLanguage.Kotlin, KnownLanguage.Python],
    projectURL: "https://github.com/tuuhin/android_todo_app",
  },
  {
    title: "React Note App",
    description:
      "An note app made using ReactJs, firebase and slateJs.SLateJs is a cutomizable rich text editor.Beign powered by firebase most of the fireabse features were added including authetication,firestore,firebase storage,and firebase hosting",
    tags: [
      "React",
      "firebase",
      "slate",
      "material-ui",
      "fireabse-auth",
      "firebasestorage",
      "cloudfirestore",
    ],
    languages: [KnownLanguage.JavaScript],
    projectURL: "https://github.com/tuuhin/react_note_app",
  },
  {
    title: "The connect",
    description:
      "A very basic social media like app make using React Js and flask, with features like JWT-token authentication,CRUD functionality with post , adding commmnets and many ohters. This project was mainly created to understand ReactJs",
    tags: ["React Js", "Flask", "sqlite3"],
    languages: [KnownLanguage.Python, KnownLanguage.JavaScript],
    projectURL: "https://github.com/tuuhin/theconnect_",
  },
  {
    title: "Django Medical shop",
    description:
      "A medical-ecommerce site built using python and django.With most of the features like user-auth,reviewing-product,placing-order and many more.This project was a group project targeted for a hackathon",
    tags: ["Django", "Bootstrap5", "sqlite3", "html"],
    languages: [KnownLanguage.Python],
    projectURL: "https://github.com/tuuhin/django-medical-shop",
  },
];
