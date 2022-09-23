import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl + "/create", { task });
}

/* CREATE 'PUT' FUNCTIONS */

export function updateTask(task_id, task){
  return axios.put(apiUrl + "/" + task_id,  { task });
}

/* CREATE 'DELETE' FUNCTIONS */

export function deleteTask(task_id){
  return axios.delete(apiUrl + "/" + task_id);
}