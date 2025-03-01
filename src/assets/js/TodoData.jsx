// props kh thay đổi / con hưởng, state thay đổi  
const TodoData = (props) => {
    // const { teacher, student } = props

    const { todoList } = props



    return (<div className='todo-data'>
        {/* <div>{JSON.stringify(student)}</div> */}
        {todoList.map(item =>
            <div className="todo-item">
                <div>{`${item.id}: ${item.name}`}</div>
                <button>Delete</button>
            </div>
        )}
    </div>)
}

export default TodoData