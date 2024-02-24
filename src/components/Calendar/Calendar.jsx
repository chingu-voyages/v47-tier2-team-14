import { useCallback, useRef, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Modal from "../Modal/Modal";
import EditTask from "../EditTask/EditTask.jsx";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CheckBox = ({ event, onSelect }) => {
	return (
		<div>
			<input
				type="checkbox"
				checked={event.checked}
				onChange={() => onSelect(event)}
			/>
			<span>{event.title}</span>
		</div>
	);
};

const TaskCalendar = () => {
	const {
		events,
		setEvents,
		openModal,
		closeModal,
		showModal,
		setShowModal,
		handleSave,
	} = useContext(AppContext);
	const clickRef = useRef(null);

	useEffect(() => {
		return () => {
			window.clearTimeout(clickRef?.current);
		};
	}, []);

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

		function buildMessage(calEvent, eventName) {
			return `[${eventName}] an 'event' selection was made with:
				${JSON.stringify(calEvent, null, 2)}`;
		}

	const handleSelectEvent = useCallback((calEvent) => {
		window.clearTimeout(clickRef?.current);
		clickRef.current = window.setTimeout(() => {
			window.alert(buildMessage(calEvent, "onSelectEvent"));
			openModal();
		}, 250);
	}, []);

	const handleDoubleClickEvent = useCallback(
		(doubleClickedEvent) => {
			window.clearTimeout(clickRef?.current);
			clickRef.current = window.setTimeout(() => {
				const updatedEvents = events.map((event) =>
					event === doubleClickedEvent
						? { ...event, checked: !event.checked }
						: event
				);
				setEvents(updatedEvents);
				handleSave(events);
			}, 250);
		},
		[events, setEvents, handleSave]
	);

	return (
		<>
			{showModal && <Modal onClose={closeModal} />}

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
						event: ({ event }) => (
							<CheckBox event={event} onSelect={handleDoubleClickEvent} />
						),
					}}
				/>
			</div>
		</>
	);
};

export default TaskCalendar;
