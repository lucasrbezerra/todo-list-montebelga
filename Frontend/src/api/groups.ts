import api from "../services/api";
import { CreateGroup } from "../interfaces";

export const getGroups = async () => {
  const response = await api.get("/groups/list");
  return response.data;
};

export const getGroupById = async (GroupId: number) => {
  const response = await api.get(`/groups/findOne/${GroupId}`);
  return response;
};

export const createGroup = async (data: CreateGroup) => {
  const response = await api.post("/groups/create", data);
  return response;
};

export const editGroup = async (data: CreateGroup, GroupId: number) => {
  const response = await api.put(`/groups/update/${GroupId}`, data);
  return response;
};

export const deleteGroup = async (GroupId: number) => {
  const response = await api.delete(`/groups/delete/${GroupId}`);
  return response;
};