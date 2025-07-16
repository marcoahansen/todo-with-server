import { useState } from "react";
import { useNavigate } from "react-router";
import { criarTarefa } from "../../services/apiService";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { ArrowLeft } from "lucide-react";
import styles from "./New.module.css";
import { useAuth } from "../../contexts/AuthContext";

export const New = () => {
  const navigate = useNavigate();
  const { loadingUser } = useAuth();

  const initialTarefa = {
    titulo: "",
    descricao: "",
    status: "pendente",
  };
  const [tarefa, setTarefa] = useState(initialTarefa);

  const handleChange = (e) => {
    setTarefa({ ...tarefa, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await criarTarefa(tarefa);
    navigate("/");
  };

  const isChanged =
    tarefa.titulo.trim() !== initialTarefa.titulo ||
    tarefa.descricao.trim() !== initialTarefa.descricao ||
    tarefa.status !== initialTarefa.status;

  if (loadingUser) return <p>Carregando...</p>;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        <ArrowLeft size={18} /> <span>Voltar</span>
      </button>
      <h2 className={styles.title}>Nova Tarefa</h2>
      <TaskForm
        task={tarefa}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isChanged={isChanged}
      />
    </div>
  );
};
