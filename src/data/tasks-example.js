import { v4 as uuidv4 } from "uuid";

export const allData = [
  {
    categoryName: "ROUTINE ACTIVITIES",
    activityTypes: [
      {
        activityName: "Projects",
        Tasks: [
          {
            taskName: "Update Recipes Project Backlog",
            taskDescription: "",
            days: ["monday"],
            isCompleted: false,
          },
          {
            taskName: "Update The dailyTasks sheet with the backlog tasks",
            taskDescription: "add the filtering feature to Done",
            days: ["monday"],
            isCompleted: false,
          },
        ],
      },
      {
        activityName: "Blog Posts",
        Tasks: [
          {
            taskName: "Publish The recent Blog Post Draft to hashnode",
            taskDescription: "",
            days: ["friday"],
            isCompleted: false,
          },
          {
            taskName: "Write a New headline in a Blog Post Draft",
            taskDescription: "",
            days: [
              "saturday",
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
            ],
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    categoryName: "STUDYING",
    activityTypes: [
      {
        activityName: "Node Js Course",
        Tasks: [
          {
            taskName: "Plan The Node Js Course Progress By Month",
            taskDescription:
              "Set Up A Plan For The Next Month Of Node Js Learning",
            days: ["1"],
            isCompleted: false,
          },
          {
            taskName: "Study The First Node Js Lecture",
            taskDescription: "",
            days: ["2"],
            isCompleted: false,
          },
        ],
      },
      {
        activityName: "MongoDB",
        Tasks: [
          {
            taskName: "Plan The MongoDB Course Progress By Month",
            taskDescription:
              "Set Up A Plan For The Next Month Of Node Js Learning",
            days: ["30"],
            isCompleted: false,
          },
          {
            taskName: "Study The First MongoDB Lecture",
            taskDescription: "",
            days: ["15"],
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    categoryName: "DAILY TASKS",
    activityTypes: [
      {
        activityName: "Backlog",
        Tasks: [
          {
            taskName: "Add The New Features list",
            taskDescription: "",
            days: ["monday"],
            isCompleted: false,
          },
          {
            taskName: "Add The New PRs To InReview",
            taskDescription: "",
            days: ["7"],
            isCompleted: false,
          },
        ],
      },
      {
        activityName: "Coding",
        Tasks: [
          {
            taskName: "Work On The Sidebar",
            taskDescription: "Add The Sections Links",
            days: ["thursday"],
            isCompleted: false,
          },
          {
            taskName: "Refactor The Filtering Feature Code",
            taskDescription: "",
            days: ["friday"],
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    categoryName: "CHINGU",
    activityTypes: [
      {
        activityName: "Voyage",
        Tasks: [
          {
            taskName: "Conduct The Project Planning Meeting",
            taskDescription:
              "Conduct The Project Planning Meeting To Discuss Our Ideas",
            days: ["monday"],
            isCompleted: false,
          },
          {
            taskName: "Create The UI/UX Design For The DailyTasks Project",
            taskDescription:
              "Create The UI/UX Design For The DailyTasks Project Based On The Team Discussion",
            days: ["monday", "tuesday", "wednesday"],
            isCompleted: false,
          },
        ],
      },
      {
        activityName: "Pair Programming",
        Tasks: [
          {
            taskName: "Create When2Meet Link",
            taskDescription: "Create When2Meet Link To Introduce Yourselves",
            days: ["thursday"],
            isCompleted: false,
          },
          {
            taskName: "Attend The Introduction Meeting With Someone",
            taskDescription: "",
            days: ["thursday"],
            isCompleted: false,
          },
        ],
      },
    ],
  },
];

const allDataWithIds = allData.map((category) => ({
  ...category,
  id: uuidv4(),
  activityTypes: category.activityTypes.map((activity) => ({
    ...activity,
    id: uuidv4(),
    Tasks: activity.Tasks.map((task) => ({
      ...task,
      id: uuidv4(), // Adding unique ID here
    })),
  })),
}));

localStorage.setItem("tasksData", JSON.stringify(allDataWithIds));
const storedTasksData = JSON.parse(localStorage.getItem("tasksData") || "[]");

console.log(storedTasksData);
