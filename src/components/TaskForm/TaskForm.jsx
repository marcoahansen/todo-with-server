import styles from "./TaskForm.module.css";

export const TaskForm = ({ task, onChange, onSubmit, isChanged, isEditing = false }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>
        Título:
        <input
          type="text"
          name="titulo"
          value={task.titulo}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Descrição:
        <textarea name="descricao" value={task.descricao} onChange={onChange} />
      </label>

      <label>
        Status:
        <select name="status" value={task.status} onChange={onChange} required>
          <option value="pendente">Pendente</option>
          <option value="em progresso">Em Progresso</option>
          <option value="concluída">Concluída</option>
        </select>
      </label>

      <button type="submit" disabled={!isChanged}>
        {isEditing ? "Salvar Alterações" : "Criar Tarefa"}
      </button>
    </form>
  );
};
