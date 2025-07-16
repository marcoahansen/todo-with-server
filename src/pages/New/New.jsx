import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../components/TaskForm/TaskForm";

export const NewTask = () => {
  const navigate = useNavigate();
  const [tarefa, setTarefa] = useState({
    title: "",
    description: "",
    status: "pendente",
  });

  const handleChange = (e) => {
    setTarefa({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await criarTarefa(task);
    navigate("/");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Nova Tarefa</h2>
      <TaskForm task={tarefa} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};
