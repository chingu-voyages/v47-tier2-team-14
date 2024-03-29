import { useState, useCallback, useRef, useEffect, useContext } from "react";
import Modal from "../Modal/Modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import 'react-big-calendar/lib/sass/styles';
import { AppContext } from "../../context/AppContext";

const localizer = momentLocalizer(moment);

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

const CheckBox = ({ event, onSelect }) => {
	return (
		<div>
			<input
				type="checkbox"
				checked={event.isCompleted || false}
				onChange={() => onSelect(event)}
			/>
			<span>{event.title}</span>
		</div>
	);
};

const TaskCalendar = () => {
	const clickRef = useRef(null);

	useEffect(() => {
		return () => {
			window.clearTimeout(clickRef?.current);
		};
	}, []);

	const { tasks, setTasks } = useContext(AppContext);
	const [events, setEvents] = useState(() => tasksToEvents(tasks));
	const [showModal, setShowModal] = useState(false);

	// console.log(events);

  useEffect(() => {
		setEvents(tasksToEvents(tasks));
	}, [tasks]);


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

	function buildMessage(calEvent, eventName) {
		return `[${eventName}] an 'event' selection was made with:
  ${JSON.stringify(calEvent, null, 2)}`;
	}

	const handleSelectEvent = useCallback((calEvent) => {
		/**
		 * Here we are waiting 250 milliseconds (use what you want) prior to firing
		 * our method. Why? Because both 'click' and 'doubleClick'
		 * would fire, in the event of a 'doubleClick'. By doing
		 * this, the 'click' handler is overridden by the 'doubleClick'
		 * action.
		 */
		window.clearTimeout(clickRef?.current);
		clickRef.current = window.setTimeout(() => {
			// window.alert(buildMessage(calEvent, "onSelectEvent"));
			openModal();
		}, 250);
	}, []);

	const handleDoubleClickEvent = useCallback((doubleClickedEvent) => {
		/**
		 * Notice our use of the same ref as above.
		 */
		window.clearTimeout(clickRef?.current);
		clickRef.current = window.setTimeout(() => {
			const updatedEvent = {
				...doubleClickedEvent,
				isCompleted: !doubleClickedEvent.isCompleted,
			};

			const updatedEvents = events.map((event) =>
				event === doubleClickedEvent ? updatedEvent : event
			);

			setEvents(updatedEvents);

			const category = tasks.find(
				(t) => t.categoryName === updatedEvent.categoryName
			);
			const activityTypes = category.activityTypes.find(
				(a) => a.activityName === updatedEvent.activityName
			);
			console.log({ category, activityTypes, updatedEvent });
			const task = activityTypes.Tasks.find((t) => t.id === updatedEvent.id);
			task.isCompleted = updatedEvent.isCompleted;

			setTasks([...tasks]);

			//window.alert(buildMessage(doubleClickedEvent, "handleDoubleClickEvent"));
		}, 250);
	}, [events, setTasks, tasks]);

	// const handleDoubleClickEvent = (doubleClickedEvent) => {
	// 	const updatedEvent = {
	// 		...doubleClickedEvent,
	// 		isCompleted: !doubleClickedEvent.isCompleted,
	// 	};

	// 	const updatedEvents = events.map((event) =>
	// 		event === doubleClickedEvent ? updatedEvent : event
	// 	);

	// 	setEvents(updatedEvents);
	// };

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{/* {showModal && <Modal onClose={closeModal} />} */}
			<div style={{ height: 650 }}>
				<Calendar
					localizer={localizer}
					events={events}
					startAccessor="start"
					endAccessor="end"
					eventPropGetter={categoryStyles}
					style={{ width: "70vw", margin: "50px" }}
					toolbar={false}
					onSelectEvent={handleSelectEvent}
					onDoubleClickEvent={handleDoubleClickEvent}
					showAllEvents={true}
					components={{
						event: CheckBox,
					}}
				/>
			</div>
		</>
	);
};

export default TaskCalendar;
