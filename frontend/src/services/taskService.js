import api from './api';

export const taskService = {
  getAll: (status) => 
    api.get('/tasks', { params: { status } }),
  
  getOne: (id) => 
    api.get(`/tasks/${id}`),
  
  create: (data) => 
    api.post('/tasks', data),
  
  update: (id, data) => 
    api.put(`/tasks/${id}`, data),
  
  delete: (id) => 
    api.delete(`/tasks/${id}`),
  
  toggleStatus: (id) => 
    api.patch(`/tasks/${id}/status`),
};
