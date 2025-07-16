import { api } from "./api";

export const buscarTarefas = async () =>{
    const {data} = await api.get("/tasks");
    return data
}

export const buscarTarefaPorID = async (id) => {
    const { data } = await api.get(`/tasks?id=${id}`);
    return data[0]; // json-server retorna array com filtro ?id=
  };
  
  export const criarTarefa = async (novaTarefa) => {
    const { data } = await api.post("/tasks", novaTarefa);
    return data;
  };
  
  export const editarTarefa = async (id, tarefaAtualizada) => {
    const { data } = await api.put(`/tasks/${id}`, tarefaAtualizada);
    return data;
  };
  
  export const deletarTarefa = async (id) => {
    await api.delete(`/tasks/${id}`);
  };