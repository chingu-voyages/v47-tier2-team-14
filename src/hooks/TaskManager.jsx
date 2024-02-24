import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export const useTaskManager = (initialData) => {
  const [data, setData] = useState(() => {
    const tasksDataString = localStorage.getItem("tasksData");
    return tasksDataString ? JSON.parse(tasksDataString) : initialData;
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const handleSave = useCallback(
    // console.log("1")
    (taskDetails) => {
      const { categoryName, isNewCategory, activity } = taskDetails;
      setData((currentData) => {
        console.log("2");
        let updatedData = [...currentData];
        let categoryIndex = updatedData.findIndex(
          (category) => category.categoryName === categoryName
        );
        console.log("3");

        // Create a new task object with a unique ID
        const newTaskWithId = { ...activity.task, id: uuidv4() };

        if (categoryIndex !== -1 && !isNewCategory) {
          // Existing category
          let activityIndex = updatedData[
            categoryIndex
          ].activityTypes.findIndex(
            (act) => act.activityName === activity.activityName
          );

          if (activityIndex !== -1 && !activity.isNewActivity) {
            // Existing activity, add task
            updatedData[categoryIndex].activityTypes[activityIndex].Tasks.push(
              newTaskWithId
            );
          } else {
            // New activity, add to category with the task
            updatedData[categoryIndex].activityTypes.push({
              activityName: activity.activityName,
              Tasks: [newTaskWithId],
            });
          }
        } else {
          // New category, including the new task with unique ID
          updatedData.push({
            categoryName: categoryName,
            activityTypes: [
              {
                activityName: activity.activityName,
                Tasks: [newTaskWithId],
              },
            ],
          });
        }
        console.log("4");

        localStorage.setItem("tasksData", JSON.stringify(updatedData));
        console.log("5");
        return updatedData;
      });

      closeModal();
    },
    [closeModal]
  );

  // const handleUpdate = useCallback((updatedTaskDetails) => {
  //   console.log("qw3jrrfijkgrgrjk");
  //   setData((currentData) => {
  //     const newData = currentData.map((category) => {
  //       // Update logic remains the same if categories or activities need to be identified.
  //       // Assuming updatedTaskDetails contains { id, categoryName, activityName, task: { updated task details } }
  //       if (category.categoryName === updatedTaskDetails.categoryName) {
  //         return {
  //           ...category,
  //           activityTypes: category.activityTypes.map((activity) => {
  //             if (activity.activityName === updatedTaskDetails.activityName) {
  //               return {
  //                 ...activity,
  //                 Tasks: activity.Tasks.map((task) =>
  //                   task.id === updatedTaskDetails.id
  //                     ? { ...task, ...updatedTaskDetails.task }
  //                     : task
  //                 ),
  //               };
  //             }
  //             return activity;
  //           }),
  //         };
  //       }

  //       return category;
  //     });
  //     localStorage.setItem("tasksData", JSON.stringify(newData));
  //     return newData;
  //   });
  // }, []);

  // const handleDelete = useCallback((taskId) => {
  //   setData((currentData) => {
  //     const updatedData = currentData.map((category) => ({
  //       ...category,
  //       activityTypes: category.activityTypes.map((activity) => ({
  //         ...activity,
  //         Tasks: activity.Tasks.filter((task) => task.id !== taskId),
  //       })),
  //     }));
  //     localStorage.setItem("tasksData", JSON.stringify(updatedData));
  //     return updatedData;
  //   });
  // }, []);

  // Inside useTaskManager
  // const handleDelete = useCallback((categoryName) => {
  //   setData((currentData) => {
  //     const filteredData = currentData.filter(
  //       (item) => item.categoryName !== categoryName
  //     );
  //     localStorage.setItem("tasksData", JSON.stringify(filteredData));
  //     return filteredData;
  //   });
  // }, []);

  return {
    data,
    setData,
    isModalOpen,
    openModal,
    closeModal,
    handleSave,
    // handleUpdate,
    // handleDelete,
  };
};
