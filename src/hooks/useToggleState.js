import { useState } from "react";

const useToggleState = (initialVal) => {
  const [state, setState] = useState(initialVal);
  const onToggle = () => {
    setState(!state);
  };
  return [state, onToggle];
};

export default useToggleState;
