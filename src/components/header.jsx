import "./styles.css";

import { useState } from "react";
import { useInsertDoc } from "../hooks/useInsertDoc";
import { useFetchDocs } from "../hooks/useFetchDocs";
import { useDeleteDoc } from "../hooks/useDeleteDoc";
import { useUpdateDoc } from "../hooks/useUpdateDoc";

function Header() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  
  const [cont, setCont] = useState(0);

  const { documents } = useFetchDocs("tasks");

  const { insertDoc } = useInsertDoc("tasks");

  const { deleteOrder } = useDeleteDoc("tasks");

  const { updateOrder } = useUpdateDoc("tasks");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      task,
      description,
      cont,
      flag: false,
    };

    insertDoc(newTask);

    setCont((actualCont) => actualCont + 1);
    
    setTask("");
    setDescription("");
  };

  const handleDelete = (id) => {
    deleteOrder(id);
  };

  const handleComplete = (task) => {
    task.flag = true;

    updateOrder(task.id, task);
  };

  return (
    <div className="container">
      <div className="topo">
        <span>LISTA DE TAREFAS</span>

        <form onSubmit={addTask}>
          <div className="form_inputs">
            <label>
              <p>Nome:</p>
              <input
                type="text"
                placeholder="Adicionar tarefa.."
                required
                value={task}
                name="name"
                onChange={(e) => setTask(e.target.value)}
              />
            </label>
            <label>
              <p>Descrição:</p>
              <input
                type="text"
                placeholder="Descrição da tarefa.."
                required
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="btnDesktop">Adicionar</button>
          <button type="submit" className="bntMobile">+</button>
        </form>
      </div>
      <div className="base">
        <div className={`lista ${documents?.length >= 2 && "scroll"}`}>
          <ul>
            {documents?.map((task, index) => (
              <li key={index}>
                <div>
                  <h3 className={`${task.flag ? "text2" : "text1"}`}>
                    {task.task}
                  </h3>

                  <p className={`${task.flag ? "text2" : "text1"}`}>
                    {task.description}
                  </p>
                </div>

                <div className="btnCompleDelete">
                  <button
                    className={`${task.flag ? "btnComplete2" : "btnComplete"}`}
                    onClick={() => handleComplete(task)}
                  >
                    Complete
                  </button>
                  <button
                    className="btnDelete"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
