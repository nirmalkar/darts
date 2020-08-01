import React, { useState, useEffect, useContext } from "react";
import { Select, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { DrawerContext } from "../../contexts/DrawerContext";
import { initFormState } from "./utils";
import { changeShareData } from "../../appRedux/action/shareAction";
import { ISharesData } from "../../constants/data/IShareData";

const { Option } = Select;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const DrawerFrom = () => {
  const [input, setInput] = useState({ ...initFormState });
  const { isDrawerVisible } = useContext(DrawerContext);

  useEffect(() => {
    setInput({ ...initFormState });
  }, [isDrawerVisible]);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    dispatch(changeShareData({ ...input }));
  };
  const onShareSelect = (value) => {
    ISharesData.map((share) => {
      if (share.id === value) {
        setInput({
          ...share,
          id: value,
        });
      }
      return share;
    });
  };
  return (
    <Form {...layout}>
      <Form.Item rules={[{ required: true }]}>
        <Select
          defaultValue="select"
          name="iShare"
          value={input.id}
          onChange={onShareSelect}
          size="large"
        >
          <Option value="1">ADDR</Option>
          <Option value="2">MFEM</Option>
          <Option value="3">JPEM</Option>
          <Option value="4">KEMQ</Option>
          <Option value="5">KLDW</Option>
          <Option value="6">KOIN</Option>
        </Select>
      </Form.Item>
      <Form.Item rules={[{ required: true }]}>
        <Input
          style={inputStyles}
          name="price"
          placeholder="Price"
          onChange={(e) => handleInputChange(e)}
          value={input.price}
          size="large"
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]}>
        <Input
          style={inputStyles}
          name="quantity"
          placeholder="Quantity"
          onChange={handleInputChange}
          value={input.quantity}
          size="large"
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]}>
        <Input
          style={inputStyles}
          name="investedAmount"
          placeholder="Invested Amount"
          onChange={(e) => handleInputChange(e)}
          value={input.investedAmount}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button
          style={btnStyles}
          size="large"
          block
          onClick={(e) => submitData(e)}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const btnStyles = {
  backgroundColor: "rgb(231,255,253)",
  borderRadius: "3px",
  color: "rgb(5,155,129)",
  border: "none",
};
const inputStyles = {
  backgroundColor: "#F1F1F1",
  borderRadius: "3px",
  border: "none",
};
export default DrawerFrom;
