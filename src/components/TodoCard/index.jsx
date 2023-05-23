import React from "react";
import { Context as TodoContext } from "../../context/TodoContext";
import {CiEdit} from "react-icons/ci";
import {AiFillDelete} from "react-icons/ai";
// import DeleteModal from "../Modal";
const Card = () => {
    const {
      filtered,
      checkboxRef,
      handleCheckbox,
      handleEdit,
      setId,
      // handleDelete,
      toggle
    } = React.useContext(TodoContext);
    return (
      <React.Fragment>
        {filtered.length > 0 &&
          filtered?.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center mb-3"
              key={item.id}
            >
              <div>
                {index + 1}. &nbsp;
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="todo_check"
                  ref={checkboxRef}
                  defaultChecked={item.completed}
                  onChange={() => handleCheckbox(item)}
                />
                &nbsp;
                <strong className={item.completed ? "line" : ""}>
                  {item.todo_value}
                </strong>
              </div>
              <div>
                <button
                  className="btn btn-success me-3"
                  type="button"
                  onClick={() => handleEdit(index, item)}
                >
                  <CiEdit />
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => {
                    toggle(setId(item.id))
                  }}
                >
                  <AiFillDelete />
                </button>
              </div>
            </li>
          ))}
      </React.Fragment>
    );
}

export default Card;