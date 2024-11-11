import axios from 'axios';

const API_URL = 'https://672184b898bbb4d93ca89d1f.mockapi.io/todos2'; // Thay bằng URL của mockAPI

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data; // Giả định rằng dữ liệu trả về là một mảng todo
};

export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data; // Trả về todo mới được thêm vào
};
