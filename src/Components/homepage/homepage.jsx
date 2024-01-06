import { useEffect, useRef, useState } from "react";
import DateTime from "../Date/date";
import "./homepage.css";
import TaskList from "../TaskList/taskList";
import uuid from 'react-uuid';

function HomePage() {

  const [year, setYear] = useState();
  const [mount, setMount] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();

  function handleSubmitForm(e) {
    e.preventDefault()
    if(formData.isEdited){
      const taskIndex = tasks.findIndex(item => item.id === uuid)
      const newTask = tasks.slice()
      newTask[taskIndex] = {...formData}
      setTasks(newTask)
  }else if
  (formData.task.length > 3){
    formData.id = uuid();
    setTasks(prev => 
          [...prev, formData]    
      )
      console.log(tasks);
  }
  }

  const emtyForm = {task : "", date : 0, isEdited : false}
  const [formData, setFormData] = useState(emtyForm);
  const [tasks, setTasks] = useState([]);


  function handleChange(e) {
    // Değişiklikleri yakalar
      const formatDate = e.target.value.split("");
      const year = formatDate.slice(0, 4).join("");
      const month = formatDate.slice(5).slice(0, 2).join("");
      const day = formatDate.slice(8).slice(0, 2).join("");
      const newHour = formatDate.slice(formatDate.length - 5);
      const hour = newHour.slice(0, 2).join("");
      const minute = newHour.slice(newHour.length - 2).join("");

      setYear(year);
      setMount(month);
      setDay(day);
      setHour(hour);
      setMinute(minute);

    setFormData((prev) => ({
      ...prev, [e.target.name] : e.target.type == "text" ? e.target.value : (hour + ":" +  minute),
     }));
  }

  function deleteTask(uuid){
    setTasks(prev => prev.filter(item => item.id != uuid))
  }

  function editTask(uuid){
    const task = tasks.find(item => item.id == uuid);
    setFormData({...task, isEdited : true})
    console.log(formData);
  }

  function doneTask(uuid){
    console.log("done");
  }


  return (
    <div className="container-home">
      <DateTime handleChange={handleChange} />
      <div className="wrapper-box">
        <div className="wrapper">
          <form onSubmit={handleSubmitForm}>
            <div className="task">
                <div className="icon">
                    <i className="bx bxs-edit-alt pen"></i>
                </div>
                 <input type="text" onChange={handleChange}  placeholder="task..." name="task"/>
            </div>
            <button type="submit">Save</button>
          </form>
          <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} doneTask={doneTask}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
