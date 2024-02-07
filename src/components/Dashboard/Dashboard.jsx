import styles from "./Dashboard.module.css";
//import Todo from '../Todo/Todo';
import Card from "../Card/Card.jsx";
import TaskCalendar from "../Calendar/Calendar.jsx";

const Dashboard = () => {
	return (
		<main className={styles["dashboard-section"]}>
			<section className={styles["dashboard-heading-section"]}>
				{/* <h2>Dashboard section</h2> */}
				<div className={styles["cardholder"]}>
					<Card
						title="Routine Activities"
						completedTasks={4}
						totalTasks={7}
						style={styles["routine card"]} // not working
					/>
					<Card
						title="Chingu"
						completedTasks={3}
						totalTasks={6}
						style={{ backgroundColor: "#EA1E61", color: "white" }} // not working
					/>
					<Card
						title="Studying"
						completedTasks={5}
						totalTasks={5}
						style={{ backgroundColor: "#FF981F", color: "white" }}
					/>
					<Card
						title="Daily tasks"
						completedTasks={1}
						totalTasks={2}
						style={{ backgroundColor: "#673AB3", color: "white" }}
					/>
					<Card
						title="Progress"
						completedTasks={16}
						totalTasks={28}
						style={{ backgroundColor: "#EA1E61", color: "white" }}
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
