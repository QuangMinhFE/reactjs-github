// props kh thay đổi / con hưởng, state thay đổi  
const TodoData = (props) => {
    // const { teacher, student } = props

    const { todoList } = props

    return (<div className='todo-data'>
        <div className='todo-item'>
            {/* <div>{teacher}</div> */}
            {/* <div>{JSON.stringify(student)}</div> */}
            <div>{JSON.stringify(todoList)}</div>
        </div>
    </div>)
}

export default TodoData