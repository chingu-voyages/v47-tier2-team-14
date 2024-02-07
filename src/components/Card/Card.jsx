import styles from "./Card.module.css";

const Card = ({ title, completedTasks, totalTasks }) => {
	return (
		<div className={styles["card"]}>
            <h4>{title}</h4>
            <br/>
            <h2>
                {completedTasks}/{totalTasks}
			</h2>
		</div>
	);
};

export default Card;
