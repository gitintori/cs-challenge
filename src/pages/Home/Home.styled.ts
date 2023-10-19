import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.header`
position: fixed;
top: 50%;
left: 0;
right: 0;
transform: translateY(-50%);
width: 100%;
background-color: #808B96;
height: 300px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
font-size: 40px;
  
  p {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    color: var(--white)
  }
`;

export const SearchField = styled.input`
  width: 400px;
  height: 30px;
  padding-left: 10px;
  font-size: 17px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  outline: none;

    &::placeholder {
      color: #ABB2B9;
    }
`;

export const SearchButton = styled(Link)`
  width: 110px;
  height: 30px;
  font-size: 19px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white)
`;