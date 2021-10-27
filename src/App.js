// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from "./MyComponents/About";
// import TodoItem from "./MyComponents/TodoItem";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  } 
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    ////console.log("I am on Delete of todo", todo);
    // Deleting this way do not work in the react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
        return e!==todo;
      }));
      //console.log("deleted",todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, Description) => {
    //console.log("I am adding this todo", title, Description);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } 
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: Description,
    };
    setTodos([...todos, myTodo]);
    //console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="My todo list" searchbar={false} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      <Footer />
      {/* <TodoItem/> */}
      </Router>
    </>
  );
}

export default App;
