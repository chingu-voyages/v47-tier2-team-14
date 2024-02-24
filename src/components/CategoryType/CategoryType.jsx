import ActivityDisplay from "../ActivityDisplay/ActivityDisplay";
import PropTypes from "prop-types";

const CategoryType = ({ data }) => {
  return (
    <>
      {data.activityTypes.map((activityType) => (
        <ActivityDisplay
          data={activityType}
          key={activityType.id}
          id={activityType.id}
        />
      ))}
    </>
  );
};

CategoryType.propTypes = {
  data: PropTypes.shape({
    activityTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,

        activityName: PropTypes.string,
        Tasks: PropTypes.array,
      })
    ).isRequired,
  }).isRequired,
};

export default CategoryType;
