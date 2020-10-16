import React from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #72DDF7;
  color: #fff;
  height: 100px;
  width: 100px;
  border-style: solid;
  border-radius: 0px;
  border-width: 5px;
  border-color: #8093F1;
  &:hover {
    background-color: #B388EB;
  }
`;

function Square(props) {
    return (
        <StyledButton onClick= {props.onClick}>
            {props.value}
        </StyledButton>
    );
}
  
export default Square;