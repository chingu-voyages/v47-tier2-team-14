import ActivityDisplay from "../ActivityDisplay/ActivityDisplay";
import PropTypes from "prop-types";

const CategoryType = ({ data }) => {
  return (
    <>
      {data.activityTypes.map((data, index) => (
        <ActivityDisplay data={data} key={index} id={index} />
      ))}
    </>
  );
};

CategoryType.propTypes = {
  data: PropTypes.shape({
    activityTypes: PropTypes.arrayOf(PropTypes.array.isRequired),
  }).isRequired,
};

export default CategoryType;
