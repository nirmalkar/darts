import React, { useContext } from "react";
import { Drawer } from "antd";

import DrawerFrom from "../forms/DrawerForm";
import { DrawerContext } from "../../contexts/DrawerContext";

import "antd/dist/antd.css";

const DrawerComponent = () => {
  const { isDrawerVisible, setIsDrawerVisible } = useContext(DrawerContext);

  const handleDrawerVisible = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };
  const onClose = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };
  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={isDrawerVisible}
        width={400}
      >
        <span className="is-pulled-right" onClick={handleDrawerVisible}>
          <i className="fas fa-arrow-right fa-lg" />
        </span>
        <br />
        <br />
        <br />
        <DrawerFrom />
      </Drawer>
    </>
  );
};

export default DrawerComponent;
