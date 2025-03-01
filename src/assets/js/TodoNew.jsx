import { useState } from "react";

// tất cả mọi thứ khai báo trong Component
const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [valueInput, setValueInput] = useState('')

    const handleClick = () => {
        // console.log('click me!')
        addNewTodo(valueInput)
        setValueInput('')
    }

    const handleOnChange = (value) => {
        // console.log(event.target.value)
        // console.log(value)
        setValueInput(value)
    }


    return (<div className='todo-new'>
        {/* thực thi function */}
        <input type='text' onChange={(event) => handleOnChange(event.target.value)} value={valueInput} />
        {/* 
            không thực thi function
        <input type='text' onChange={handleOnChange} /> */}
        <button style={{ cursor: 'pointer' }} onClick={handleClick}>Add</button>
        <div>{valueInput}</div>
    </div>);
}

export default TodoNew