import styles from './Dashboard.module.css';
import Todo from '../Todo/Todo';

const Dashboard = () => {
  return (
    <main className={styles['dashboard-section']}>
      <section className={styles['dashboard-heading-section']}>
        <h2>Dashboard section</h2>
      </section>
      <section className={styles['dashboard-content-section']}>
        <Todo />
      </section>
    </main>
  )
}

export default Dashboard;
