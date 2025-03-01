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

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'minh' },
    { id: 2, name: 'phúc' },
  ]);

  const randomMinMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  const addNewTodo = (value) => {
    const newTodo = {
      id: randomMinMax(1, 100),
      name: value,
    }
    setTodoList([...todoList, newTodo])
  }

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData todoList={todoList} />

      <div className='todo-image'>
        <img src={reactLogo} />
      </div>
    </div>
  );
}

export default App
