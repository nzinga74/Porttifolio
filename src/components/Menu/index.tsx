import React from "react";
import { MenuHeader, MenuList, MenuListItem } from "./styles";
const Menu: React.FC = () => {
  return (
    <MenuHeader>
      <MenuList>
        <MenuListItem>Serviços</MenuListItem>
        <MenuListItem>Empresas</MenuListItem>
        <MenuListItem>Trabalhos</MenuListItem>
        <MenuListItem>Contactos</MenuListItem>
      </MenuList>
    </MenuHeader>
  );
};
export default Menu;
