import { API_URL } from "./constans";

export const getTasks = async (successCallback) => {
 
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    
    if (typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }
    successCallback(data);
  } catch (err) {
    console.log(err);
  }
};

export const addTask = async (task, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();

    if (typeof successCallback === "function") {
      successCallback(data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (id, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (id && typeof successCallback === "function") {
      successCallback(data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateTaskStatus = async (id, task, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    if (id && task && typeof successCallback === "function") {
      successCallback(data);
    }
  } catch (err) {
    console.log(err);
  }
};
