import { useState } from 'react'
import DateTime from '../Date/date'
import './homepage.css'
import TaskList from '../tasklist/tasklist';

function HomePage(){

    const [days, setDays] = useState();
    const [day, setDay] = useState();
    const model = {task : "", priority: false}
    const [tasks, setTasks] = useState();
    const [date, setDate] = useState();

    function handleSubmitForm(e){
        e.preventDefault();
        console.log(e);
    }

    function handleChange(e){
        console.log(e);
        setDate(prev => e.target.value)
    }   
    
    return (
        <div className="container-home">
            <DateTime handleChange={handleChange}/>
            <hr />
            {date}
            <div className="wrapper-box">
                <div className="wrapper">
                    <TaskList />
                    <form onSubmit={handleSubmitForm}>
                        <div className='task'>
                            <label htmlFor="name">Task input</label><hr />
                            <input type="text" onChange={handleChange} name='task' id='name'/>
                        </div>
                        <div className='checkbox'>
                            <label htmlFor="checkbox">Select</label>
                            <input type="checkbox" onChange={handleChange} name='checkbox' id='checkbox'/>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default HomePage