import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { buscarTarefaPorID, editarTarefa } from "../../services/apiService";
import { TaskForm } from "../../components/TaskForm/TaskForm";

export const Edit = () => {
  const { id } = useParams();
  const [tarefa, setTarefa] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const task = await buscarTarefaPorID(id);
      setTarefa(task);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editarTarefa(id, tarefa);
    navigate("/");
  };

  if (!tarefa && loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Editar Tarefa</h2>
      <TaskForm
        task={tarefa}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing
      />
    </div>
  );
};
