import styles from "./Card.module.css";

const Card = ({ title, completedTasks, totalTasks, color }) => {

	const opacityHex = Math.round(0.6 * 255).toString(16).padStart(2, "0");
	const opacityColor = color + opacityHex;
const cardStyle = {
	backgroundColor: opacityColor,
	color: "white",
};

	return (
		<div className={styles["card"]} style={cardStyle}>
			<h4>{title}</h4>
			<h2 className="text-left">
				{completedTasks}/{totalTasks}
			</h2>
		</div>
	);
};

export default Card;
