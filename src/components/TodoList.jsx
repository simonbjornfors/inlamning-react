import React, {useState} from 'react';
import "../css/style.css"

const TodoList = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
      }

    const AddTask = () => {
        console.log(task)
        if(task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false,
            }
            setTaskList([...taskList, taskDetails])
        }
    }
    console.log("taskList", taskList)

    const deleteTask = (e, id) => {
        e.preventDefault()
        setTaskList(taskList.filter((t) => t.id !== id))
    }
    const completedTask = (e, id) => {
        e.preventDefault()

        const element = taskList.findIndex(elem => elem.id === id)

        const newTaskList = [...taskList]

        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true
        }
        setTaskList(newTaskList)
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="text" 
                    placeholder="Add task..." 
                    onChange={(e) => handleChange(e)}
                    />
                <button className="add-btn" onClick={AddTask}>Add</button>
                <div className='sub-container'>
                    {taskList !== [] ? 
                        <ul>
                            {taskList.map((item) => {
                                return(
                                    <li key={item.id} className={item.isCompleted ? "hold-text" : 'list-item'}>
                                        {item.value}
                                        <div>
                                            <button className='completed-btn' onClick={(e) => completedTask(e, item.id)}>Completed</button>
                                            <button className='delete-btn' onClick={(e) => deleteTask(e, item.id)}>Delete</button>
                                        </div>
                                    </li>)
                                })
                            }
                        </ul> 
                        : null}
                </div>
            </form>
        </div>
    );
}

export default TodoList;
