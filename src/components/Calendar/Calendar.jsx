import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import taskData from "../../../assets/tasks-example.json";

const localizer = momentLocalizer(moment);

const myTasks = [
	{
		id: 0,
		taskName: "Update Recipes Project Backlog",
		taskDescription: "",
		days: ["monday"],
		activityName: "Projects",
		categoryName: "ROUTINE ACTIVITIES",
		allDay: true,
		start: new Date(2024, 2, 5),
		end: new Date(2024, 2, 6),
	},
	{
		id: 1,
		taskName: "Update The dailyTasks sheet with the backlog tasks",
		taskDescription: "add the filtering feature to Done",
		days: ["monday"],
		activityName: "Projects",
		categoryName: "ROUTINE ACTIVITIES",
		allDay: true,
	},
	{
		id: 2,
		taskName: "Publish The recent Blog Post Draft to hashnode",
		taskDescription: "",
		days: ["friday"],
		activityName: "Blog Posts",
		categoryName: "ROUTINE ACTIVITIES",
		allDay: true,
	},
	{
		id: 3,
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
		activityName: "Blog Posts",
		categoryName: "ROUTINE ACTIVITIES",
		allDay: true,
	},
	{
		id: 4,
		taskName: "Plan The Node Js Course Progress By Month",
		taskDescription: "Set Up A Plan For The Next Month Of Node Js Learning",
		days: ["1"],
		activityName: "Node Js Course",
		categoryName: "STUDYING",
		allDay: true,
	},
	{
		id: 5,
		taskName: "Study The First Node Js Lecture",
		taskDescription: "",
		days: ["2"],
		activityName: "Node Js Course",
		categoryName: "STUDYING",
		allDay: true,
	},
	{
		id: 6,
		taskName: "Plan The MongoDB Course Progress By Month",
		taskDescription: "Set Up A Plan For The Next Month Of Node Js Learning",
		days: ["30"],
		activityName: "MongoDB",
		categoryName: "STUDYING",
		allDay: true,
	},
	{
		id: 7,
		taskName: "Study The First MongoDB Lecture",
		taskDescription: "",
		days: ["15"],
		activityName: "MongoDB",
		categoryName: "STUDYING",
		allDay: true,
	},
	{
		id: 8,
		taskName: "Add The New Features list",
		taskDescription: "",
		days: ["monday"],
		activityName: "Backlog",
		categoryName: "DAILY TASKS PROJECT",
		allDay: true,
	},
	{
		id: 9,
		taskName: "Add The New PRs To InReview",
		taskDescription: "",
		days: ["7"],
		activityName: "Backlog",
		categoryName: "DAILY TASKS PROJECT",
		allDay: true,
	},
	{
		id: 10,
		taskName: "Work On The Sidebar",
		taskDescription: "Add The Sections Links",
		days: ["thursday"],
		activityName: "Coding",
		categoryName: "DAILY TASKS PROJECT",
		allDay: true,
	},
	{
		id: 11,
		taskName: "Refactor The Filtering Feature Code",
		taskDescription: "",
		days: ["friday"],
		activityName: "Coding",
		categoryName: "DAILY TASKS PROJECT",
		allDay: true,
	},
	{
		id: 12,
		taskName: "Conduct The Project Planning Meeting",
		taskDescription:
			"Conduct The Project Planning Meeting To Discuss Our Ideas",
		days: ["monday"],
		activityName: "Voyage",
		categoryName: "CHINGU",
		allDay: true,
	},
	{
		id: 13,
		taskName: "Create The UI/UX Design For The DailyTasks Project",
		taskDescription:
			"Create The UI/UX Design For The DailyTasks Project Based On The Team Discussion",
		days: ["monday", "tuesday", "wednesday"],
		activityName: "Voyage",
		categoryName: "CHINGU",
		allDay: true,
	},
	{
		id: 14,
		taskName: "Create When2Meet Link",
		taskDescription: "Create When2Meet Link To Introduce Yourselves",
		days: ["thursday"],
		activityName: "Pair Programming",
		categoryName: "CHINGU",
		allDay: true,
	},
	{
		id: 15,
		taskName: "Attend The Introduction Meeting With Someone",
		taskDescription: "",
		days: ["thursday"],
		activityName: "Pair Programming",
		categoryName: "CHINGU",
		allDay: true,
	},
];
export const TaskCalendar = (props) => (
	<div>
		<Calendar
			localizer={localizer}
			events={myTasks}
			startAccessor="start"
			endAccessor="end"
			style={{ height: 500 }}
		/>
	</div>
);
