import React,{useState} from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const AddTask=(props)=>{
    const{addItem}=props
    const[isSaved,setIsSaved]=useState(false)

    const formSubmission=(task)=>{
        axios.post("http://localhost:3033/api/tasks", task)
          .then((response)=>{
              const result =response.data
            addItem(result)
            setIsSaved(true)
          })
          .catch((err)=>{
              alert(err.message)
          })
        }
        const toggleIsSaved=()=>{ 
           setIsSaved(false)
        }
    return(
        <div>
            <h1>Add Task</h1>
            <TaskForm 
                       formSubmission={formSubmission} 
                       isSaved={isSaved} 
                       toggleIsSaved={toggleIsSaved}/>
        </div>
    )
}
export default AddTask