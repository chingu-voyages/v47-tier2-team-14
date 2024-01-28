import styles from './Footer.module.css';

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className={styles['repo-link']}>
        Developed by { }
        <a
          href="https://github.com/chingu-voyages/v47-tier2-team-14"
          target="_blank"
          rel="noreferrer"
          data-title="External github repo link will open on a new tab"
        >
          Tier2-Team-14 github repository
        </a>
        <span className={styles.text}> &copy; {currentYear} </span>
      </p>
    </footer>
  )
}

export default Footer;
