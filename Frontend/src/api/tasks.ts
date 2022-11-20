import { CreateTask } from "../interfaces";
import api from "../services/api";

export const getTasks = async () => {
  const response = await api.get("/tasks/list");
  return response.data;
};

export const getTasksByGroup = async (GroupId: number) => {
  const response = await api.get(`/tasks/findTasksByGroup/${GroupId}`);
  return response;
};

export const createTask = async (data: CreateTask) => {
  const response = await api.post("/tasks/create", data);
  return response;
};

export const editTask = async (data: CreateTask, TaskId: number) => {
  const response = await api.put(`/tasks/update/${TaskId}`, data);
  return response;
};

export const finishTask = async (data: boolean, TaskId: number) => {
  const response = await api.patch(`/tasks/finish/${TaskId}`, {
    hasFinished: data,
  });
  return response;
};

export const deleteTask = async (TaskId: number) => {
  const response = await api.delete(`/tasks/delete/${TaskId}`);
  return response;
};
