import { createContext, useState, useEffect } from "react";
import initialTasks from "/assets/tasks-example.json";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
const AppContext = createContext();
const studyColor = "#FF981F";
const routineColor = "#2EA194";
const dailyColor = "#673AB3";
const chinguColor = "#EA1E61";
const progressColor = "#FF5726";

// convert day strings to corresponding date objects
const getDayDate = (day) => {
	if (typeof day === "string") {
		return moment().day(day).toDate();
	} else if (typeof day === "number") {
		return moment().day(day).toDate();
	}
	return null;
};

// map tasks data to events that can be used by react-big-calendar
const tasksToEvents = (tasks) =>
	tasks.flatMap((category) =>
		category.activityTypes.flatMap((activityType) =>
			activityType.Tasks.flatMap((task) =>
				task.days.map((day) => ({
					title: task.taskName,
					start: getDayDate(day),
					end: moment(getDayDate(day)),
					desc: task.taskDescription,
					categoryName: category.categoryName,
					activityName: activityType.activityName,
					isCompleted: task.isCompleted,
					id: task.id,
				}))
			)
		)
	);

const AppProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [tasks, setTasks] = useState(() => {
		// Local Storage
		const localData = localStorage.getItem("tasksData");

		if (localData) {
			return JSON.parse(localData);
		}

		const tasks = initialTasks.map((category) => ({
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

		localStorage.setItem("tasksData", JSON.stringify(tasks));

		return tasks;
	});

  const [eventsNum, setEventsNum] = useState(() => tasksToEvents(tasks));

  useEffect(() => {
    setEventsNum(tasksToEvents(tasks))
  

  }, [tasks])
  

	const initialTasksTotal = eventsNum.length;
	const [progressTasksTotal, setProgressTasksTotal] =
		useState(initialTasksTotal);
	const [progressTasksCompleted, setProgressTasksCompleted] = useState(0);
	const [chinguTasksTotal, setChinguTasksTotal] = useState(0);
	const [chinguTasksCompleted, setChinguTasksCompleted] = useState(0);
	const [routineActivitiesTasksTotal, setRoutineActivitiesTasksTotal] =
		useState(0);
	const [routineActivitiesTasksCompleted, setRoutineActivitiesTasksCompleted] =
		useState(0);
	const [studyingTasksTotal, setStudyingTasksTotal] = useState(0);
	const [studyingTasksCompleted, setStudyingTasksCompleted] = useState(0);
	const [dailyTasksTotal, setDailyTasksTotal] = useState(0);
	const [dailyTasksCompleted, setDailyTasksCompleted] = useState(0);

	useEffect(() => {
		const chinguTasks = eventsNum.filter(
			(event) => event.categoryName === "CHINGU"
		);
		const routineActivitiesTasks = eventsNum.filter(
			(event) => event.categoryName === "ROUTINE ACTIVITIES"
		);
		const studyingTasks = eventsNum.filter(
			(event) => event.categoryName === "STUDYING"
		);
		const dailyTasks = eventsNum.filter(
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
			chinguTasks.filter((event) => event.isCompleted).length
		);
		setRoutineActivitiesTasksTotal(routineActivitiesTasks.length);
		setRoutineActivitiesTasksCompleted(
			routineActivitiesTasks.filter((event) => event.isCompleted).length
		);
		setStudyingTasksTotal(studyingTasks.length);
		setStudyingTasksCompleted(
			studyingTasks.filter((event) => event.isCompleted).length
		);
		setDailyTasksTotal(dailyTasks.length);
		setDailyTasksCompleted(
			dailyTasks.filter((event) => event.isCompleted).length
		);
	}, [
		eventsNum,
		chinguTasksCompleted,
		chinguTasksTotal,
		dailyTasksCompleted,
		dailyTasksTotal,
		routineActivitiesTasksCompleted,
		routineActivitiesTasksTotal,
		studyingTasksCompleted,
		studyingTasksTotal,
	]);

	const handleSave = (newEvent) => {
		const eventIndex = tasks.findIndex(
			(event) =>
				event.title === newEvent.title &&
				event.start.getTime() === newEvent.start.getTime()
		);

		// Update existing events or create new event
		if (eventIndex !== -1) {
			const updatedEvents = [...tasks];
			updatedEvents[eventIndex] = {
				...updatedEvents[eventIndex],
				isCompleted: newEvent.isCompleted,
			};
			setTasks(updatedEvents);
			localStorage.setItem("events", JSON.stringify(updatedEvents));
		} else {
			const updatedEvents = [...tasks, newEvent];
			setTasks(updatedEvents);
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
				tasks,
				setTasks: (tasks) => {
					localStorage.setItem("tasksData", JSON.stringify(tasks));
					setTasks(tasks);
				},
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
				studyColor,
				routineColor,
				dailyColor,
				chinguColor,
				progressColor,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
