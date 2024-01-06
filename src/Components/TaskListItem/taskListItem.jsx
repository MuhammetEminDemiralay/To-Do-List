import './taskListItem.css'

function TaskListItem({item, deleteTask, editTask, doneTask}){

    return (
        <>
            <li key={item.id} className='task-item'>
                <div className='task'>
                    <div className='datetime'>{item.date}</div>{item.task}
                </div>
                <div className='btns'>
                    <button className='btn done' onClick={() => doneTask(item.id)}>Done</button>
                    <button className='btn edit' onClick={() => editTask(item.id)}>Edit</button>
                    <button className='btn delete' onClick={() => deleteTask(item.id)}>Delete</button>
                </div>
            </li>
        </>
    )
}

export default TaskListItem