import React, { useState, useRef } from "react";
import Operation from "./Operation";
import { addOperation } from "../../api/operations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Operations({
  taskID,
  form,
  setForm,
  operations,
  setOperations,
  status,
}) {
  const [operationDes, setOperationDes] = useState("");

  const handleAddNewOperation = (e) => {
    e.preventDefault();

    const operation = {
      description: operationDes,
      time: 0,
    };

    addOperation(taskID, operation, (data) => {
      setOperations((prev) => {
        return [...prev, data];
      });

      setForm(false);
      setOperationDes("");
    });
  };

  const handleDeleteOperation = (id) => {
    setOperations((prev) => prev.filter((operation) => operation.id !== id));
  };

  return (
    <>
      {form === true ? (
        <div className="card-body w-full h-16 flex items-center rounded-b-lg bg-white">
          <form onSubmit={handleAddNewOperation} className="w-full">
            <div className="input-group flex ml-6">
              <input
                autoFocus
                type="text"
                className="form-control h-8 form-control gray-50 border border-gray-300 text-gray-900 bg-gray-50 text-lg w-full p-2.5 rounded-l-lg focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Operation description"
                value={operationDes}
                onChange={(e) => setOperationDes(e.target.value)}
              />

              <div className="input-group-append">
                <button className="btn bg-sky-600 text-white font-bold text-base hover:bg-sky-400 w-16 h-7 flex justify-around items-center rounded-r-lg h-8 mr-6">
                  Add
                  <FontAwesomeIcon
                    className="text-white-300"
                    icon={faCirclePlus}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
      <ul className="list-group list-group-flush">
        {operations.length === 0
          ? null
          : operations.map((operation) => (
              <Operation
                key={operation.id}
                {...operation}
                onRemoveOperation={handleDeleteOperation}
                status={status}
              />
            ))}
      </ul>
    </>
  );
}

export default Operations;
