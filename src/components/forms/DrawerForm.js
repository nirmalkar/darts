import React, { useState } from "react";
import { Select, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { initFormState } from "./utils";
import { changeShareData } from "../../appRedux/action/shareAction";
import { ISharesData } from "../../constants/data/IShareData";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const DrawerFrom = () => {
  const [input, setInput] = useState({ ...initFormState });
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
    });
  };
  return (
    <Form {...layout}>
      <Form.Item rules={[{ required: true }]}>
        <Select
          defaultValue="select"
          name="iShare"
          style={{ width: 300 }}
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
          name="price"
          placeholder="Price"
          onChange={(e) => handleInputChange(e)}
          value={input.price}
          size="large"
          style={{ width: 300 }}
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]}>
        <Input
          name="quantity"
          placeholder="Quantity"
          onChange={handleInputChange}
          value={input.quantity}
          size="large"
          style={{ width: 300 }}
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]}>
        <Input
          name="investedAmount"
          placeholder="Invested Amount"
          onChange={(e) => handleInputChange(e)}
          value={input.investedAmount}
          size="large"
          style={{ width: 300 }}
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={(e) => submitData(e)}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default DrawerFrom;
