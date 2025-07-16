import { Edit3 } from "lucide-react";
import styles from "./TaskCard.module.css";
import { useNavigate } from "react-router";
export const TaskCard = ({ tarefa }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`edit/${tarefa.id}`);
  };
  return (
    <div className={styles.card}>
      <div>
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.descricao}</p>
      </div>
      <button onClick={handleNavigate}>
        <Edit3 size={18} />
      </button>
    </div>
  );
};
