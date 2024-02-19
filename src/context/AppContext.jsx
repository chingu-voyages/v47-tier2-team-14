import { createContext, useState, useEffect } from "react";
import Tasks from "/assets/tasks-example.json";
import moment from "moment";

const AppContext = createContext();
const tasks = Tasks;

// convert day strings to corresponding date objects
const getDayDate = (day) => {
	if (typeof day === "string") {
		return moment().day(day).toDate();
	} else if (typeof day === "number") {
		return moment().day(day).toDate();
	}
	return null;
};

const tasksToEvents = tasks.flatMap((category) =>
	category.activityTypes.flatMap((activityType) =>
		activityType.Tasks.flatMap((task) =>
			task.days.map((day) => ({
				title: task.taskName,
				start: getDayDate(day),
				end: moment(getDayDate(day)),
				desc: task.taskDescription,
				categoryName: category.categoryName,
				activityName: activityType.activityName,
				checked: false,
			}))
		)
	)
);

const AppProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [events, setEvents] = useState(() => {
		// Local Storage
		const localData = localStorage.getItem("events");
		return localData ? JSON.parse(localData) : tasksToEvents;
	});

	const initialTasksTotal = tasksToEvents.length;
	const [progressTasksTotal, setProgressTasksTotal] = useState(initialTasksTotal);
	const [progressTasksCompleted, setProgressTasksCompleted] = useState(0);
	const [chinguTasksTotal, setChinguTasksTotal] = useState(0);
	const [chinguTasksCompleted, setChinguTasksCompleted] = useState(0);
	const [routineActivitiesTasksTotal, setRoutineActivitiesTasksTotal] = useState(0);
	const [routineActivitiesTasksCompleted, setRoutineActivitiesTasksCompleted] = useState(0);
	const [studyingTasksTotal, setStudyingTasksTotal] = useState(0);
	const [studyingTasksCompleted, setStudyingTasksCompleted] = useState(0);
	const [dailyTasksTotal, setDailyTasksTotal] = useState(0);
	const [dailyTasksCompleted, setDailyTasksCompleted] = useState(0);

	

	useEffect(() => {
		const chinguTasks = events.filter(
			(event) => event.categoryName === "CHINGU"
		);
		const routineActivitiesTasks = events.filter(
			(event) => event.categoryName === "ROUTINE ACTIVITIES"
		);
		const studyingTasks = events.filter(
			(event) => event.categoryName === "STUDYING"
		);
		const dailyTasks = events.filter(
			(event) => event.categoryName === "DAILY TASKS"
		);

		const getTotalCompletedTasks = () => {
			return (
				chinguTasksCompleted +
				routineActivitiesTasksCompleted +
				studyingTasksCompleted +
				dailyTasksCompleted
			);
		};

		const getTotalTasks = () => {
			return (
				chinguTasksTotal +
				routineActivitiesTasksTotal +
				studyingTasksTotal +
				dailyTasksTotal
			);
		};

		setProgressTasksTotal(getTotalTasks());
		setProgressTasksCompleted(getTotalCompletedTasks());
		setChinguTasksTotal(chinguTasks.length);
		setChinguTasksCompleted(
			chinguTasks.filter((event) => event.checked).length
		);
		setRoutineActivitiesTasksTotal(routineActivitiesTasks.length);
		setRoutineActivitiesTasksCompleted(
			routineActivitiesTasks.filter((event) => event.checked).length
		);
		setStudyingTasksTotal(studyingTasks.length);
		setStudyingTasksCompleted(
			studyingTasks.filter((event) => event.checked).length
		);
		setDailyTasksTotal(dailyTasks.length);
		setDailyTasksCompleted(dailyTasks.filter((event) => event.checked).length);
	}, [events,
		chinguTasksCompleted,
		chinguTasksTotal,
		dailyTasksCompleted,
		dailyTasksTotal,
		routineActivitiesTasksCompleted,
		routineActivitiesTasksTotal,
		studyingTasksCompleted,
		studyingTasksTotal]);

	const handleSave = (newEvent) => {
		const eventIndex = events.findIndex(
			(event) =>
				event.title === newEvent.title &&
				event.start.getTime() === newEvent.start.getTime()
		);

		// Update existing events or create new event
		if (eventIndex !== -1) {
			const updatedEvents = [...events];
			updatedEvents[eventIndex] = {
				...updatedEvents[eventIndex],
				checked: newEvent.checked,
			};
			setEvents(updatedEvents);
			localStorage.setItem("events", JSON.stringify(updatedEvents));
		} else {
			const updatedEvents = [...events, newEvent];
			setEvents(updatedEvents);
			localStorage.setItem("events", JSON.stringify(updatedEvents));
		}
	};

	// Show/hide modal
	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<AppContext.Provider
			value={{
				events,
				setEvents,
				showModal,
				setShowModal,
				openModal,
				closeModal,
				handleSave,
				progressTasksTotal,
				progressTasksCompleted,
				chinguTasksTotal,
				chinguTasksCompleted,
				routineActivitiesTasksTotal,
				routineActivitiesTasksCompleted,
				studyingTasksTotal,
				studyingTasksCompleted,
				dailyTasksTotal,
				dailyTasksCompleted,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
