import { useEffect } from "react";
import { useState } from "react";
import { buscarTarefas } from "../../services/apiService";
import { TaskCard } from "../../components/TaskCard/TaskCard";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { nome } = useAuth();

  const getData = async () => {
    try {
      const tasks = await buscarTarefas();
      setTarefas(tasks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const statuses = ["pendente", "em progresso", "concluída"];

  if (loading) return <div>Carregando...</div>;
  return (
    <div className={styles.wrapper}>
      <h1>{nome}</h1>
      <button className={styles.newButton} onClick={() => navigate("/new")}>
        Nova Tarefa
      </button>

      <div className={styles.container}>
        {statuses.map((status) => (
          <div key={status} className={styles.column}>
            <h2>{status.toUpperCase()}</h2>
            {tarefas
              .filter((t) => t.status === status)
              .map((tarefa) => (
                <TaskCard key={tarefa.id} tarefa={tarefa} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
