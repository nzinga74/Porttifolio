import styled from "styled-components";

/* 
  & my interfaces
*/
interface ButtonStackProps {
  isActive: boolean;
}

export const ButtonStack = styled.div<ButtonStackProps>`
  width: 100%;
  height: 160px;
  background-color: #2d2e32;
  border-radius: 8px;
  box-shadow: rgb(18 30 52 / 7%) 0px 1px 1px;
  margin-bottom: 8px;
  cursor: pointer;
  padding: 36px;

  h3 {
    color: ${(props) => (props.isActive ? "#6ff4a5" : "#fff")};
  }
`;
export const ButtonStackTitle = styled.h3`
  color: white;
  font-weight: 300;
  transition: color 1s;
`;
export const ButtonStackContent = styled.p`
  color: #7c7d81;
  font-size: 14px;
  margin-top: 8px;
`;
