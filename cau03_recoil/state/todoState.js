import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState', // key phải là một chuỗi duy nhất
  default: [], // giá trị mặc định
});
