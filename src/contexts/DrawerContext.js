import React, { createContext } from "react";
import PropTypes from "prop-types";
import useToggleState from "../hooks/useToggleState";

export const DrawerContext = createContext();

const DrawerProvider = (props) => {
  const [isDrawerVisible, setIsDrawerVisible] = useToggleState(false);
  return (
    <DrawerContext.Provider
      value={{
        isDrawerVisible,
        setIsDrawerVisible,
      }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
};
DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DrawerProvider;
