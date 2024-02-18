import styles from "./Dashboard.module.css";
//import Todo from '../Todo/Todo';
import Card from "../Card/Card.jsx";
import TaskCalendar from "../Calendar/Calendar.jsx";

const studyColor = "#FF981F";
const routineColor = "#2EA194";
const dailyColor = "#673AB3";
const chinguColor = "#EA1E61";
const progressColor = "#FF5726";

const Dashboard = () => {
	return (
		<main className={styles["dashboard-section"]}>
			<section className={styles["dashboard-heading-section"]}>
				{/* <h2>Dashboard section</h2> */}
				<div className={styles["cardholder"]}>
					<Card
						id="routineActivities"
						title="Routine Activities"
						completedTasks={4}
						totalTasks={7}
						
					/>
					<Card
						id="chingu"
						title="Chingu"
						completedTasks={3}
						totalTasks={6}
						
					/>
					<Card
						id="studying"
						title="Studying"
						completedTasks={5}
						totalTasks={5}
						
					/>
					<Card
						id="dailyTasks"
						title="Daily tasks"
						completedTasks={1}
						totalTasks={2}
						
					/>
					<Card
						id="progress"
						title="Progress"
						completedTasks={16}
						totalTasks={28}
						
					/>
				</div>
			</section>
			<section className={styles["dashboard-content-section"]}>
				<TaskCalendar />
				{/* <Todo /> */}
			</section>
		</main>
	);
};

export default Dashboard;
