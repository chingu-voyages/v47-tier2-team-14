import { createContext, useState } from "react";
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
	
        // Local Sotrage
		const localData = localStorage.getItem("eventsData");
		return localData ? JSON.parse(localData) : tasksToEvents;
	});

	const handleSave = (newEvent) => {
		const updatedEvents = [...events, newEvent];
		setEvents(updatedEvents);
		localStorage.setItem("eventsData", JSON.stringify(updatedEvents));
    };
    
    // Show Modal
    const openModal = () => {
				setShowModal(true);
			};

	const closeModal = () => {
				setShowModal(false);
			};

	return (
		<AppContext.Provider
			value={{ events, setEvents, showModal, setShowModal, openModal, closeModal, handleSave }}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
