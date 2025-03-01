// props kh thay đổi / con hưởng, state thay đổi  
const TodoData = (props) => {
    // const { teacher, student } = props

    const { todoList, deleteTodo } = props

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (<div className='todo-data'>
        {/* <div>{JSON.stringify(student)}</div> */}
        {todoList.map(item =>
            <div className="todo-item" key={item.id}>
                <div>{`Tên: ${item.name}`}</div>
                <button onClick={() => handleClick(item.id)}>Delete</button>
            </div>
        )}
    </div>)
}

export default TodoData