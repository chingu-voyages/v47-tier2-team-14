import styles from "./CategoryType.module.css";
import ActivityDisplay from "../ActivityDisplay/ActivityDisplay";

const CategoryType = ({ data }) => {
  return data.activityTypes.map((data, index) => (
    <ActivityDisplay data={data} key={index} id={index} />
  ));
};

export default CategoryType;
