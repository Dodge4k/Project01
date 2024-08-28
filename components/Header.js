import styles from '../styles/Dashboard.module.css';

export default function Header({ toggleSidebar }) {
  return (
    <header className={styles.header}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        ☰
      </button>
      <h1>Admin Dashboard</h1>
    </header>
  );
}
