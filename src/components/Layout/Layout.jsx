import { Outlet } from "react-router";
import { CheckSquare, Github, LogOut } from "lucide-react";
import styles from "./Layout.module.css";
import { useAuth } from "../../contexts/AuthContext";

export const Layout = () => {
  const { logout } = useAuth();
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.flex}>
          <CheckSquare size={24} />
          <h1>TodoList</h1>
        </div>
        <button onClick={logout} className={styles.button}>
          <LogOut size={14} />
        </button>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/marcoahansen"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} /> marcoahansen
        </a>
      </footer>
    </div>
  );
};
