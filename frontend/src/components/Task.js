import React from "react";
import { deleteTask } from "../services/taskServices";
import { updateTask } from "../services/taskServices";
import { useState } from "react";

const Task = ({ task }) => {
  const [newTask, putTask] = useState(""); 

  /* CREATE DELETE OPERATION*/

  const handleDelete=async(id)=>{
    try {
      await deleteTask(id);
    } catch (err) {
      console.log(err);
    }
  }

  /* CREATE UPDATE OPERATION */
  
  const handleUpdate=async(id)=>{
    try {
      await updateTask(id, newTask);
    } catch (err) {
      console.log(err);
    }
  }




  return (
    <div className='pb-3 pt-1'>
      <p className='text-center'>{`${task.task}`}</p>
      <div className='text-center'>
        <button onClick={() => handleDelete(task._id)}>DELETE</button>
          <div name="updateName">
            <form onSubmit={() => handleUpdate(task._id)} className='d-flex flex-column align-items-center pt-2'>
                Enter Updated task
                <br></br>
                <input
                  value={newTask}
                  onChange={e => putTask((e.target.value))}
                />
                <input type="submit" value="Update" />
            </form>
          </div>
      </div>
    </div>
  );
};

export default Task;
