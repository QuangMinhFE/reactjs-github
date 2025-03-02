import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/styles/todo.css'
import './assets/styles/global.css'
import TodoNew from './assets/components/js/TodoNew';
import TodoData from './assets/components/js/TodoData';
import Header from './assets/components/layouts/header';
import Footer from './assets/components/layouts/footer';
import { Outlet } from 'react-router-dom';

function App() {

  const [todoList, setTodoList] = useState([]);

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

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo)
  }

  return (

    <>
      <Header />
      <div className='todo-container'>
        <div className='todo-title'>Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />

        {/* Cách 1 */}
        {/* {todoList.length > 0 &&
        <TodoData todoList={todoList} />
      }
      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={reactLogo} />
        </div>
      } */}

        {todoList.length > 0 ?
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
          :
          <div className='todo-image'>
            <img src={reactLogo} />
          </div>}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App
