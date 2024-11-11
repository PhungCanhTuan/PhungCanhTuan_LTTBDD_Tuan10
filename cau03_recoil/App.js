import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/todoList'; // Import TodoList từ thư mục components

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
