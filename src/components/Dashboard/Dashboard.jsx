import { useContext } from "react";
import styles from "./Dashboard.module.css";
import Card from "../Card/Card.jsx";
import TaskCalendar from "../Calendar/Calendar.jsx";
import { AppContext } from "../../context/AppContext";

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
		studyColor,
		routineColor,
		dailyColor,
		chinguColor,
		progressColor,
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
