import styled, { createGlobalStyle } from "styled-components";

export const MenuHeader = styled.div`
  width: 100%;
  background-color: #2d2e32;
  padding: 20px;
  height: 70px;
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
`;
export const MenuListItem = styled.li`
  margin-right: 20px;
  font-size: 14px;
  color: #fff;
  :hover {
    color: #6ff4a5;
    cursor: pointer;
  }
`;
