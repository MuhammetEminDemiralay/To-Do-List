import './taskList.css'
import TaskListItem from '../TaskListItem/taskListItem'

function TaskList({tasks, deleteTask, editTask, doneTask}){


    return (
        <>
            <ul className='task-list'>
                {tasks.map((item, index) => (
                    <TaskListItem item={item} key={index} deleteTask={deleteTask} editTask={editTask} doneTask={doneTask}/>
                ))}
            </ul>
        </>
    )
}

export default TaskList