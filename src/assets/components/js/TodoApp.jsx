import { useState } from 'react'
import reactLogo from '../../react.svg'
import TodoNew from './TodoNew';
import TodoData from './TodoData';
import '../../styles/todo.css'

const TodoApp = () => {
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
    );
}

export default TodoApp