import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  buscarTarefaPorID,
  deletarTarefa,
  editarTarefa,
} from "../../services/apiService";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { ArrowLeft, Trash } from "lucide-react";
import styles from "./Edit.module.css";

export const Edit = () => {
  const { id } = useParams();
  const [tarefa, setTarefa] = useState({});
  const [initialTarefa, setInitialTarefa] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const task = await buscarTarefaPorID(id);
      setTarefa(task);
      setInitialTarefa(task);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setTarefa({ ...tarefa, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Tem certeza que deseja deletar esta tarefa?"
    );
    if (confirm) {
      await deletarTarefa(id);
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editarTarefa(id, tarefa);
    navigate("/");
  };

  const isChanged = () => {
    if (!initialTarefa) return false; // ou true se preferir permitir
    return (
      tarefa.titulo !== initialTarefa.titulo ||
      tarefa.descricao !== initialTarefa.descricao ||
      tarefa.status !== initialTarefa.status
    );
  };

  if (!tarefa && loading) return <p>Carregando...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          <ArrowLeft size={18} /> <span>Voltar</span>
        </button>

        <button className={styles.deleteButton} onClick={handleDelete}>
          <Trash size={18} /> <span>Deletar</span>
        </button>
      </div>
      <h2 className={styles.title}>Editar Tarefa</h2>
      <TaskForm
        task={tarefa}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing
        isChanged={isChanged()}
      />
    </div>
  );
};
