import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/css/todo.css'
import TodoNew from './assets/js/TodoNew';
import TodoData from './assets/js/TodoData';

function App() {
  // const teacher = 'hoidanIT'
  // const student = [
  //   {
  //     id: 1,
  //     name: 'minh'
  //   },
  //   {
  //     id: 2,
  //     name: 'phúc'
  //   }
  // ]

  // const addNewTodo = (name) => {
  //   console.log(`call me ${name}`)
  // }

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'minh' },
    { id: 2, name: 'phúc' },
  ]);

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew />
      <TodoData todoList={todoList} />

      <div className='todo-image'>
        <img src={reactLogo} />
      </div>
    </div>
  );
}

export default App
