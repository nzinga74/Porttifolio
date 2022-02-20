import React from "react";
import { MenuHeader, MenuList, MenuListItem, Section } from "./styles";
import { Container } from "../../styles";
import Logo from "../Logo";
const Menu: React.FC = () => {
  return (
    <MenuHeader>
      <Container>
        <Section>
          <Logo />
          <MenuList>
            <MenuListItem>Serviços</MenuListItem>
            <MenuListItem>Empresas</MenuListItem>
            <MenuListItem>Tecnologias</MenuListItem>
            <MenuListItem>Projetos</MenuListItem>
          </MenuList>
        </Section>
      </Container>
    </MenuHeader>
  );
};
export default Menu;
