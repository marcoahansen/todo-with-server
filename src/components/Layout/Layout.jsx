import { Outlet } from "react-router";
import { CheckSquare, Github  } from "lucide-react";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <CheckSquare size={24} />
        <h1>TodoList</h1>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/marcoahansen" target="_blank" rel="noreferrer">
          <Github size={20} /> marcoahansen
        </a>
      </footer>
    </div>
  );
};
