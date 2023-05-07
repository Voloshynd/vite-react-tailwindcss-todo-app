import React, { useState, useEffect } from "react";
import { deleteTask, updateTaskStatus } from "../../api/tasks";
import Operations from "./Operations";
import { getOperations } from "../../api/operations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckToSlot, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Task({ title, description, id, statusTask, onRemoveTask }) {
  const [status, setStatus] = useState(statusTask);
  const [operations, setOperations] = useState([]);
  const [operationForm, setOperationForm] = useState(false);

  
  useEffect(() => {
    getOperations(id, setOperations)
    // getSubOperations(id).then(res=> setOperations([res]))
  }, []);





  const handleToggleOperation = () => {
    setOperationForm((prev) => !prev);
  };


  const handleDeleteTask = () => {
    deleteTask(id, () => {
      onRemoveTask(id);
    });
  };

  const handleFinishTask = () => {
    const task = {
      title,
      description,
      status: "closed",
    };

    updateTaskStatus(id, task, () => {
      setStatus("closed");
    });
  };





  return (
    <section className="card border-solid border-2 border-zinc-300  shadow-xl rounded-lg mt-5 w-3/4 bg-gray-300 h-16 h-fit">
      <div className="card-header flex flex-row justify-between ml-6 h-16">
        <div className="flex-col">
          <h5 className="text-xl font-semibold">{title}</h5>
          <h6 className="card-subtitle text-gray-500 font-semibold">{description}</h6>
        </div>

        <div className=" flex flex-row">
          {status === "open" ? (
            <>
              <button
                className="btn mr-1 bg-sky-600 text-white font-bold mt-2 text-base hover:bg-sky-400 w-36 h-7 flex justify-around items-center rounded-md"
                onClick={handleToggleOperation}
              >
                Add operation
                <FontAwesomeIcon className="text-white-300" icon={faCirclePlus} />
              </button>

              <button 
                className="btn text-white bg-slate-950 font-bold w-20 h-7 mt-2 flex justify-around items-center mr-2 hover:bg-slate-600 rounded-md" 
                onClick={handleFinishTask}
              >
                Finish
                <FontAwesomeIcon className="text-white-500" icon={faCheckToSlot} />
              </button>
            </>
          ) : null}

        <div className="border-2 border-red-600 w-7 h-7 flex justify-center mr-6 mt-2 rounded-md">
            <button
            className="btn"
            onClick={handleDeleteTask}
          >
           <FontAwesomeIcon className="text-red-600 font-light hover:text-red-400" icon={faTrash} />
          </button>
        </div>
         

        </div>
      </div>

      <Operations
        taskID={id}
        form={operationForm}
        setForm={setOperationForm}
        operations={operations}
        setOperations={setOperations}
        status={status}
      />
    </section>
  );
}

export default Task;