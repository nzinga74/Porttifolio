import React from "react";
import { MenuHeader, MenuList, MenuListItem, Section } from "./styles";
import { Container } from "../../styles";
import Logo from "../Logo";
const Menu: React.FC = () => {
  return (
    <MenuHeader>
      <Container>
        <Section
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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
