import React from "react";
import { Provider as TodoProvider } from "./TodoContext";
import { Provider as ModeProvider } from "./Mode";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({children}) => {
    return (
      <Context.Provider value={{}}>
        <TodoProvider>
          <ModeProvider>{children}</ModeProvider>
        </TodoProvider>
      </Context.Provider>
    );
}

Provider.propTypes = {
  children: PropTypes.object,
};

export {Context, Provider};
