import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import 'react-big-calendar/lib/sass/styles';
import Tasks from "../../../assets/tasks-example.json";

const localizer = momentLocalizer(moment);
const tasks = Tasks;

const TaskCalendar = () => {
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
	const events = tasks.flatMap((category) =>
		category.activityTypes.flatMap((activityType) =>
			activityType.Tasks.flatMap((task) =>
				task.days.map((day) => ({
					title: task.taskName,
					start: getDayDate(day),
					end: moment(getDayDate(day)).add(1, "day").toDate(),
					desc: task.taskDescription,
					categoryName: category.categoryName,
					activityName: activityType.activityName,
					isCompleted: false,
				}))
			)
		)
	);

	console.log(events);

	// add custom event styles
	const categoryStyles = (event) => {
		let style = {};

		switch (event.categoryName) {
			case "ROUTINE ACTIVITIES":
				style = { backgroundColor: "#2EA194", color: "white" };
                break;
            
			case "STUDYING":
				style = { backgroundColor: "#FF981F", color: "white" };
                break;
            
			case "DAILY TASKS PROJECT":
				style = { backgroundColor: "#673AB3", color: "white" };
                break;
            
			case "CHINGU":
				style = { backgroundColor: "#EA1E61", color: "black" };
                break;
            
			default:
				break;
		}

		return {
			style: style,
		};
    };
    
    

	return (
		<div style={{ height: 500 }}>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				eventPropGetter={categoryStyles}
				style={{ width: "70vw", margin: "50px" }}
			/>
		</div>
	);
};

export default TaskCalendar;
