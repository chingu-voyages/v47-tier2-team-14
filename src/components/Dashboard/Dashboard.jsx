import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <main className={styles['dashboard-section']}>
      <section className={styles['dashboard-heading-section']}>
        <h2>Dashboard section</h2>
      </section>
      <section className={styles['dashboard-content-section']}>
        <p>Dashboard content</p>
      </section>
    </main>
  )
}

export default Dashboard;
