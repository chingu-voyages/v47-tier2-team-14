// Dashboard.js

import { useContext } from "react";
import styles from "./Dashboard.module.css";
import Card from "../Card/Card.jsx";
import TaskCalendar from "../Calendar/Calendar.jsx";
import { AppContext } from "../../context/AppContext";

const studyColor = "#FF981F";
const routineColor = "#2EA194";
const dailyColor = "#673AB3";
const chinguColor = "#EA1E61";
const progressColor = "#FF5726";

const Dashboard = () => {
	const {
		progressTasksCompleted,
		progressTasksTotal,
		chinguTasksTotal,
		chinguTasksCompleted,
		routineActivitiesTasksTotal,
		routineActivitiesTasksCompleted,
		studyingTasksTotal,
		studyingTasksCompleted,
		dailyTasksTotal,
		dailyTasksCompleted,
	} = useContext(AppContext);

	return (
		<main className={styles["dashboard-section"]}>
			<section className={styles["dashboard-heading-section"]}>
				<div className={styles["cardholder"]}>
					<Card
						id="routineActivities"
						title="Routine Activities"
						completedTasks={routineActivitiesTasksCompleted}
						totalTasks={routineActivitiesTasksTotal}
						color={routineColor}
					/>
					<Card
						id="chingu"
						title="Chingu"
						completedTasks={chinguTasksCompleted}
						totalTasks={chinguTasksTotal}
						color={chinguColor}
					/>
					<Card
						id="studying"
						title="Studying"
						completedTasks={studyingTasksCompleted}
						totalTasks={studyingTasksTotal}
						color={studyColor}
					/>
					<Card
						id="dailyTasks"
						title="Daily tasks"
						completedTasks={dailyTasksCompleted}
						totalTasks={dailyTasksTotal}
						color={dailyColor}
					/>
					<Card
						id="progress"
						title="Progress"
						completedTasks={progressTasksCompleted}
						totalTasks={progressTasksTotal}
						color={progressColor}
					/>
				</div>
			</section>
			<section className={styles["dashboard-content-section"]}>
				<TaskCalendar />
			</section>
		</main>
	);
};

export default Dashboard;
