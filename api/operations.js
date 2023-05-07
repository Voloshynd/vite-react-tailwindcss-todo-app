import { API_URL } from "./constans";

export const getOperations = async (id, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (id && typeof successCallback !== "function") {
      successCallback(data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addOperation = async (id, operation, successCallback) => {
  if (!operation.description) {
    return;
  }
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operation),
    });

    const data = await response.json();

    if (id && operation.description && typeof successCallback === "function") {
      successCallback(data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteOperation = async (id, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/operations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (id && typeof successCallback === "function") {
      successCallback();
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateOperation = async (id, operation, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/operations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operation),
    });
    const data = await response.json();
    if (id && operation && typeof successCallback === "function") {
      successCallback(data);
    }
  } catch (err) {
    console.log(err);
  }
};

// export const getSubOperations = async (id)=>{
//   try {
//     const response = await fetch(`${API_URL}/operations`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();

//     return data

//   } catch (err) {
//     console.log(err);
//   }

// }
