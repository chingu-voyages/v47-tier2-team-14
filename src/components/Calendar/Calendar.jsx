import { useState } from 'react';
import Modal from "../Modal/Modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import 'react-big-calendar/lib/sass/styles';
import Tasks from "../../../assets/tasks-example.json";

const localizer = momentLocalizer(moment);
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

	// map tasks data to events that can be used by react-big-calendar
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
					isCompleted: false,
				}))
			)
		)
	);

const TaskCalendar = () => {
	const [events, setEvents] = useState(tasksToEvents);
	const [showModal, setShowModal] = useState(true)

	console.log(events);

	// add custom event styles
	const categoryStyles = (event) => {
		let style = {};

		switch (event.categoryName) {
			case "ROUTINE ACTIVITIES":
				style = { backgroundColor: "#2EA19410", color: "#2EA194" };
				break;

			case "STUDYING":
				style = { backgroundColor: "#FF981F10", color: "#FF981F" };
				break;

			case "DAILY TASKS":
				style = { backgroundColor: "#673AB310", color: "#673AB3" };
				break;

			case "CHINGU":
				style = { backgroundColor: "#EA1E6110", color: "#EA1E61" };
				break;

			default:
				break;
		}

		return {
			style: style,
		};
	};

	const handleDoubleClick = (doubleClickedEvent) => {
		const updatedEvent = {
			...doubleClickedEvent,
			isCompleted: !doubleClickedEvent.isCompleted,
		};

		const updatedEvents = events.map((event) =>
			event === doubleClickedEvent ? updatedEvent : event
		);

		setEvents(updatedEvents);
	};

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal && <Modal onClose={closeModal}/>}
			<div style={{ height: 650 }}>
				<Calendar
					localizer={localizer}
					events={events}
					startAccessor="start"
					endAccessor="end"
					eventPropGetter={categoryStyles}
					style={{ width: "70vw", margin: "50px" }}
					toolbar={false}
					onSelectEvent={openModal}
					onDoubleClickEvent={handleDoubleClick}
					showAllEvents={true}
				/>
			</div>
		</>
	);
};

export default TaskCalendar;
