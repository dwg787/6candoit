import React from "react";
import styled from "styled-components";

const CustomButton = (props) => {
  return <Button onClick={() => props.onClick()}>{props.children}</Button>;
};

const Button = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #3a6bfe;
`;

export default CustomButton;
