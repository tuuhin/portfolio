import { KnownLanguage } from "./languages";

export interface ProjectInfo {
  title: string;
  description: string;
  tags: string[];
  languages: readonly KnownLanguage[];
  image?: string;
  projectURL: string;
  websiteURL?: string;
}

export const projectData: ProjectInfo[] = [
  {
    title: "Time Management App",
    description:
      "The TimeManagementApp is an Android application that helps you to maintain your focus and break times. With Graphical representation of the weeks focus and break count. You can tweak the app settings to your focus and break time to maintain a proper focus to break ratio.",
    tags: ["Android", "Android Service", "Timer App"],
    languages: [KnownLanguage.Kotlin],
    projectURL: "https://github.com/tuuhin/TimeManagementApp",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "This Android project is a multiplayer Tic Tac Toe game that uses websockets for real-time gameplay. Users can anonymously play games or create dedicated rooms with unique codes to challenge friends. The rooms can host multiple boards, and the winner is determined based on the most number of wins across the boards.",
    tags: ["Android", "Realtime App", "Game", "Websockets", "Custom Backend"],
    languages: [KnownLanguage.Kotlin],
    projectURL: "https://github.com/tuuhin/AndroidTicTacToe",
  },
  {
    title: "Android Weather App",
    description:
      "The AndroidWeatherApp is a simple Android application that provides real-time weather information for the user's location. It allows users to view the current weather conditions, check the forecast,and search for weather updates of different cities. Additionally, it's offers an app widget that displays the current weather on the home screen for quick view.The widgets updates at a predefined interval, adhering to a predetermined refresh rate.",
    tags: ["Android", "App Widget", "Weather App"],
    languages: [KnownLanguage.Kotlin],
    projectURL: "https://github.com/tuuhin/AndroidWeatherApp",
  },
  {
    title: "Reminders",
    description:
      "Reminder App is an Android app that allows users to save reminders with notifications kind a like 🟡 Google Keep but with lesser functionality. Users can add tasks for each reminder, add multiple labels, and set the date and time for the notification to be triggered.",
    tags: ["Android", "AlarmApp"],
    languages: [KnownLanguage.Kotlin],
    projectURL: "https://github.com/tuuhin/Reminders",
  },
  {
    title: "FireBase Quiz App",
    description:
      "Android Quiz App is an quiz application for Android devices written in Kotlin. It is designed to create and take quizzes in a variety of topics, similar to 🟣 Google Forms. The app is backed by Firebase, a mobile and web application development platform that provides backend as a service (BaaS).",
    tags: ["Android", "QuizApp", "FireBase", "FireStore", "FireBaseStorage"],
    languages: [KnownLanguage.Kotlin],
    projectURL: "https://github.com/tuuhin/AndroidQuizApp",
  },
  {
    title: "Github Profile viewer",
    description:
      "GitHub Profile Viewer is an Android app that allows you to view a user's GitHub profile information, including their repositories and language-based graphs. With this app, you can easily browse a user's GitHub profile and get an overview of their coding activity.",
    tags: ["Android", "GraphQl"],
    languages: [KnownLanguage.Kotlin],
    projectURL: "https://github.com/tuuhin/GithubProfileViewer",
  },
  {
    title: "Realtime-Chat-Dart",
    description:
      "A realtime chat app made using dart both for frontend and backend.The backend of the app is made using dart_frog and monogdb database.The app uses websockets which enables full duplex realtime communication between the server and the client.",
    tags: ["Flutter", "dart_frog", "full-stack dart", "websockets"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/realtime-chat-dart",
  },
  {
    title: "Expense Tracker",
    description:
      "A money tracking app made using flutter with a custom app backend made with django.This is a expense tracker which will trackup with you expense data, the app comes with a user auth system with a profile i.e, you have a customizable profile. A budget mechanism is added so that the expenses can be made track off",
    tags: [
      "Flutter",
      "Cached-storage",
      "JWT-Authentication",
      "Hive-Db",
      "Flutterbloc",
      "Custom backend",
    ],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/expense_tracker",
  },
  {
    title: "Expense Tracker Backend",
    description:
      "A money tracking app's backend made with django.This is a expense tracker which will trackup with you expense data, the app comes with a user auth system with a profile i.e, you have a customizable profile. A budget mechanism is added so that the expenses can be made track off.",
    tags: ["Django", "Django Rest Framework", "JWT-Authentication"],
    languages: [KnownLanguage.Python],
    projectURL: "https://github.com/tuuhin/expense_tracker",
  },
  {
    title: "ClockWork",
    description:
      "The clock app in our phone is a very interesting one, it has alarms, stopwatch ,timmer,clock (obiously 😀).Implementing them togerther was fun ,and here are the results that I came forward with a flutter app that have most of those features",
    tags: ["alarm-manager", "flutter", "worldtimeapi", "clock", "Stopwatch"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/clockwork",
  },

  {
    title: "Pokedex",
    description:
      "The name is self sufficient to describe the project. This is a cross-platform pokedex app made with flutter. An user can look for any type of pokemon data such as the pokemon itself,moves,ability,item,location,types-charts ans so-on",
    tags: ["pokeapi", "flutter", "cross-platform", "pokemon"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/pokedex_",
  },

  {
    title: "Django Medical shop",
    description:
      "A medical-ecommerce site built using python and django.With most of the features like user-auth,reviewing-product,placing-order and many more.This project was a group project targeted for a hackathon",
    tags: ["Django", "Bootstrap5", "jinja", "webpage", "shop-ui"],
    languages: [KnownLanguage.Python],
    projectURL: "https://github.com/tuuhin/django-medical-shop",
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
    title: "Weather App",
    description:
      "A weather app made with flutter using openweathermap api.This app provides the weather of the current location, the other location can be too search to get some summarized data of that location, the location can be set as a default location to get the detailed data",
    tags: ["Flutter", "openwathermapapi", "weather-app"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/weather_app",
  },

  {
    title: "Calculator App",
    description:
      "An calculator clone of the in-built calculator that comes with devices.This app add some extra features with calculator like currency convertor ,length convertor,weight convertor and many other",
    tags: ["Flutter", "calculator-app", "currency-app", "convertors"],
    languages: [KnownLanguage.Dart],
    projectURL: "https://github.com/tuuhin/calculator_",
  },
  {
    title: "The connect",
    description:
      "A very basic social media like app make using React Js and flask, with features like JWT-token authentication,CRUD functionality with post , adding comments and many ohters. This project was mainly created to understand ReactJs and Flask",
    tags: ["React Js", "Flask"],
    languages: [KnownLanguage.JavaScript, KnownLanguage.Python],
    projectURL: "https://github.com/tuuhin/theconnect_",
  },
];
