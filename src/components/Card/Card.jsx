import styles from "./Card.module.css";

const Card = ({ title, completedTasks, totalTasks }) => {
	return (
		<div className={styles["card"]}>
			<h4>{title}</h4>
			<h2 className="text-left">
				{completedTasks}/{totalTasks}
			</h2>
		</div>
	);
};

export default Card;
