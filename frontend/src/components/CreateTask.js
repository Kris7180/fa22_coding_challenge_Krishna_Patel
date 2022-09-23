import React from "react";
import { useState } from "react";
import { addTask } from "../services/taskServices";


const CreateTask = () => {
  /* CREATE 'CreateTask' COMPONENT */
  
  const [task, setTask] = useState("");

  const handleSubmit=async()=>{
    try {
      await addTask(task);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='d-flex flex-column align-items-center pt-5'>
        <h1>Create task</h1>
        <br></br>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
        />
      <input type="submit" value="Submit" />
      </p>
    </form>
  );
};

export default CreateTask;
