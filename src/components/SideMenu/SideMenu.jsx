import styles from './SideMenu.module.css';

import ShowTasks from '../ShowTasks/ShowTasks';

import { useGetRoutineActivitiesQuery, useGetStudyingQuery, useGetDailyTasksProjectsQuery, useGetChinguQuery } from '../../redux/api.js';

const SideMenu = () => {
    const { data: routineActivityQuery, isSuccess: isRoutineActivityQuerySuccess } = useGetRoutineActivitiesQuery();
    const { data: studyingQuery, isSuccess: isStudyingQuerySuccess } = useGetStudyingQuery();
    const { data: dailyTasksProjectsQuery, isSuccess: isDailyTasksProjectsQuerySuccess } = useGetDailyTasksProjectsQuery();
    const { data: chinguQuery, isSuccess: isChinguQuerySuccess } = useGetChinguQuery();

    let isDataSuccess = (!isRoutineActivityQuerySuccess || !isStudyingQuerySuccess || !isDailyTasksProjectsQuerySuccess || !isChinguQuerySuccess);

    return (
        <aside>
            <h3 className={styles['aside-menu-text']}>
                Aside menu
            </h3>
            <section>
                {isDataSuccess ? <p className={styles['dashboard-content-section__error']}>Data is not loaded yet</p> :
                    (
                        <>
                            <ShowTasks apiEndPoint={routineActivityQuery} />
                            {/* <ShowTasks apiEndPoint={studyingQuery} />
                            <ShowTasks apiEndPoint={dailyTasksProjectsQuery} />
                            <ShowTasks apiEndPoint={chinguQuery} /> */}
                        </>
                    )
                }
            </section>
        </aside>
    )
}

export default SideMenu;
