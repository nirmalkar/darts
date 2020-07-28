import React from "react";
import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { drawerVisible } from "../../appRedux/action/drawerActions";
import DrawerFrom from "../forms/DrawerForm";

import "antd/dist/antd.css";

const DrawerComponent = () => {
  const dispatch = useDispatch();
  const { isDrawerVisible } = useSelector((state) => state.drawerVisible);

  const handleDrawerVisible = () => {
    dispatch(drawerVisible(!isDrawerVisible));
  };
  const onClose = () => {
    dispatch(drawerVisible(!isDrawerVisible));
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
