import styles from '../styles/Dashboard.module.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        ☰
      </button>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
}
