import React from "react";
import { useState } from "react/cjs/react.development";


export const AddTodo = ({addTodo}) => {
    const [title, settitle] = useState(" ");
    const [Description, setDescription] = useState(" ");


    const submit=(e)=>{
        e.preventDefault();
        if(!title || !Description)
        {
            alert("Title or Description cannot be blank");
        }
        else {
        addTodo(title,Description);
        settitle("");
        setDescription("");
      }
    }
  return (
    <div className="container">
        <h3 className="text-center">Add a Todo </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{settitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="text"
          />   
         
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            type="Description"
            value={Description}
            onChange={(e)=>{setDescription(e.target.value)}}
            className="form-control"
            id="Description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add todo
        </button>
      </form>
    </div>
  );
};
