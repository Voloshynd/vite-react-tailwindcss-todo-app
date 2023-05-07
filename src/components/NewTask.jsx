import React, { useState } from "react";
import { addTask } from "../../api/tasks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function NewTask({ onNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      status: "open",
    };


    if(!task.title){
      return; 
    } else {
      addTask(task, onNewTask);
    }
    setTitle(""), setDescription("");
  };

  return (
    <div className="border-solid border-2  border-zinc-300 rounded-lg h-72 w-3/4 shadow-xl flex justify-center">
      <div className="card-body w-11/12 flex-col">
        <h1 className="text-4xl font-bold mt-5">New task</h1>
        <form onSubmit={handleAddTask}>
          <div className="form-group">
            <input
              type="text"
              className="form-control gray-50 border border-gray-300 text-gray-900 bg-gray-50 text-lg rounded-lg w-full p-2.5 mt-5 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Title"
              value={title}
              onChange={(e) =>setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control gray-50 border border-gray-300 text-gray-900 bg-gray-50 text-lg rounded-lg w-full p-2.5 mt-5 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn rounded-lg bg-sky-600 text-white font-bold text-lg hover:bg-sky-400 w-fit h-12 mt-5 px-1">
            Add task
            <FontAwesomeIcon
              className="text-white-300 ml-1"
              icon={faCirclePlus}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTask;


// className="form-control gray-50 border border-gray-300 text-gray-900 bg-gray-50 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mt-5"