import styles from './Dashboard.module.css';
import Todo from '../Todo/Todo';
import { TaskCalendar } from "../Calendar/Calendar.jsx";
import Card from "../Card/Card.jsx";

const Dashboard = () => {
  return (
		<main className={styles["dashboard-section"]}>
			<section className={styles["dashboard-heading-section"]}>
				{/* <h2>Dashboard section</h2> */}
        <Card title="routine activities"/>
				<Card title="chingu"/>
				<Card title="studying"/>
        <Card title="daily tasks" />
        <Card title="progress" />
			</section>
			<section className={styles["dashboard-content-section"]}>
				<TaskCalendar />
				{/* <Todo /> */}
			</section>
		</main>
	);
}

export default Dashboard;
