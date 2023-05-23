import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    const [todos,setTodos] = React.useState([]);
    const [filtered,setFiltered] = React.useState([]);
    const [id, setId] = React.useState(null);
    const [selectedItem, setSelectedItem] = React.useState({});
    const todoRef = React.useRef(null);
    const checkboxRef = React.useRef(true);
    const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newTodo = {
          id: todos[todos.length - 1]?.id + 1 || 1,
          todo_value: todoRef.current.value.trim(),
          completed: false,
        };

        if (selectedItem.id) {
          todos[selectedItem.id - 1] = newTodo;
          setSelectedItem({});
        } else {
          setTodos([...todos, newTodo]);
          setFiltered([...todos, newTodo]);
        }

        todoRef.current.value = "";
        todoRef.current.focus();
    } 

    const handleCheckbox = (item) => {
        if(checkboxRef){
          item.completed = !item.completed;
        } else {
          item.completed
        }
        setTodos([...todos])
    }
    const handleDelete = (id) => {
            const filteredTodos = todos.filter((todo) => todo.id !== id);
            setTodos([...filteredTodos]);
            setFiltered([...filteredTodos]);
            toggle();
    };
    const handleEdit = (index,item) => {
      setSelectedItem(index);
      todoRef.current.value = item.todo_value;
      setSelectedItem({ ...item });
    };


    const filteredTodos = (selected) => {
          if (selected === "completed") {
            setFiltered([...todos.filter((todo) => todo.completed)]);
          } else if (selected === "unCompleted") {
            setFiltered([...todos.filter((todo) => !todo.completed)]);
          } else {
            setFiltered([...todos]);
          }
      }
  return (
    <Context.Provider
      value={{
        filtered,
        todoRef,
        selectedItem,
        handleSubmit,
        checkboxRef,
        handleCheckbox,
        handleDelete,
        handleEdit,
        filteredTodos,
        modal,
        setModal,
        toggle,
        id,
        setId
      }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
