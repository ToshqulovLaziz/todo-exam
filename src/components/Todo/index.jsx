import React from "react";
import { Context as TodoContext } from "../../context/TodoContext";
import { Context as ModeContext } from "../../context/Mode";
import { MdOutlineLightMode } from "react-icons/md";
import Card from "../TodoCard";
import DeleteModal from "../Modal";
import "./todo.scss";
const Todo = () => {

    const { todoRef, handleSubmit, selectedItem, filteredTodos } =
      React.useContext(TodoContext);
    const { toggleTheme, theme } = React.useContext(ModeContext);
      
  return (
    <React.Fragment>
      <section className={`todo-section app--${theme}`}>
        <div className="container">
          <div className="row">
            <div className="col-8  offset-2 my5">
              <div className="card mt-5 mb-3">
                <div className="card-header">
                  <h2 className="todo__title">Add todo</h2>
                  <button
                    className={` todo-btn app--${theme}`}
                    onClick={() => toggleTheme()}
                  >
                    <MdOutlineLightMode />
                  </button>
                </div>
                <div className="card-body">
                  <form onSubmit={(evt) => handleSubmit(evt)}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="todo"
                        ref={todoRef}
                        defaultValue={selectedItem?.todo_value}
                        placeholder="Add todo"
                      />
                      <button className="btn btn-primary" type="submit">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => filteredTodos("all")}
                  >
                    All
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => filteredTodos("completed")}
                  >
                    Completed
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => filteredTodos("unCompleted")}
                  >
                    UnCompleted
                  </button>
                </div>
              </div>
              <h1 className="text-center">Todo List</h1>
              <ul className="list-group">
                <Card />
                <DeleteModal />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Todo;
