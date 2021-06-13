import axios from 'axios';

const url = 'http://localhost:9001/api';

export const getAllMemories = () => axios.get(url);
export const createMemory = (newPost) => axios.post(url, newPost);
export const updateMemory = (id,updatedData) => axios.patch(`${url}/${id}`, updatedData);
export const deleteMemory = (id) => axios.delete(`${url}/${id}`);
export const likeMemory = (id) => axios.patch(`${url}/${id}/likeMemory`)