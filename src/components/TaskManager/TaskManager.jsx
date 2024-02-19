// useTaskManager.js
import { useState, useCallback } from "react";

export const useTaskManager = (initialData) => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const handleSave = useCallback(
    (taskDetails) => {
      const { categoryName, isNewCategory, activity } = taskDetails;
      setData((currentData) => {
        let updatedData = [...currentData];
        let categoryIndex = updatedData.findIndex(
          (category) => category.categoryName === categoryName
        );

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
              activity.task
            );
          } else {
            // New activity, add to category
            updatedData[categoryIndex].activityTypes.push({
              activityName: activity.activityName,
              Tasks: [activity.task],
            });
          }
        } else {
          // New category
          updatedData.push({
            categoryName: categoryName,
            activityTypes: [
              {
                activityName: activity.activityName,
                Tasks: [activity.task],
              },
            ],
          });
        }

        localStorage.setItem("tasksData", JSON.stringify(updatedData));
        return updatedData;
      });

      closeModal();
    },
    [closeModal]
  );

  return { data, isModalOpen, openModal, closeModal, handleSave };
};
