import React, { useState } from "react";
import { deleteOperation, updateOperation } from "../../api/operations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTrash,
  faXmark,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

function Operation({ description, id, onRemoveOperation, time, status }) {
  const [timeForm, setTimeForm] = useState(false);
  const [timeSpent, setTimeSpent] = useState(time);
  const [inputTime, setTimeInput] = useState("");

  const handleSaveTime = (e) => {
    e.preventDefault();

    if (isNaN(parseInt(inputTime)) || inputTime < 0) {
      return;
    }

    const operation = {
      description,
      timeSpent: parseInt(timeSpent) + parseInt(inputTime),
    };

    updateOperation(id, operation, (data) => {
      setTimeSpent(data.timeSpent);

      setTimeForm(false);
    });
  };

  const handleRemoveOperation = () => {
    deleteOperation(id, () => {
      onRemoveOperation(id);
    });
  };

  const hours = Math.floor(timeSpent / 60);
  const minutes = timeSpent % 60;

  return (
    <li className="list-group-item bg-white py-3">
      <div className="flex flex-row justify-between">
        <div className="ml-6 flex flex-row w-40 items-center w-fit">
          {description}
          {timeSpent > 0 && (
            <div className="badge bg-green-400 ml-2 rounded-md text-white font-semibold text-sm w-20 flex justify-center h-5 mt-1">
              <span>{hours}h {minutes}m</span>
            </div>
          )}
        </div>

        {timeForm && (
          <form onSubmit={handleSaveTime} className="mr-6">
            <div className="input-group flex flex-row">
              <input autoFocus
                className="form-control h-7 gray-50 border border-gray-300 text-gray-900 bg-gray-50  text-sm rounded-l-md w-full p-2.5 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="number"
                placeholder="Spent time in minutes"
                onChange={e => setTimeInput(e.target.value)}
              />
              <div className="input-group-append flex flex-row">
                <div className=" h-7 w-7 flex justify-around items-center border-2 border-green-400 shadow-inner hover:shadow-green-300">
                  <button className="btn btn-outline-success">
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faFloppyDisk}
                    />
                  </button>
                </div>
                <div className=" h-7 w-7 flex justify-around items-center border-2 border-slate-950 rounded-r-md shadow-inner hover:shadow-slate-800">
                  <button className="btn btn-outline-dark">
                    <FontAwesomeIcon
                      className="text-slate-950 "
                      icon={faXmark}
                      onClick={()=> setTimeForm(false)}
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {!timeForm && (
          <div className="flex flex-row mr-6">
            {status === "open" && (
              <button
                className="btn border-solid border-2 border-green-400 text-green-400 flex justify-around items-center mr-2 pl-1 rounded-md shadow-inner hover:shadow-green-300 pb-0.5"
                onClick={() => setTimeForm(true)}
              >
                Add time
                <FontAwesomeIcon
                  className="text-green-400 mx-1 pt-0.5"
                  icon={faClock}
                />
              </button>
            )}
            <button
              className="btn border-2 border-red-600  w-7 h-7 flex justify-center items-center rounded-md"
              onClick={handleRemoveOperation}
            >
              <FontAwesomeIcon
                className="text-red-600 font-light hover:text-red-400"
                icon={faTrash}
              />
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default Operation;
