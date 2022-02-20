import React from "react";

import { Container } from "../../styles";
import { FooterSection, CopyRight, Section } from "./styles";
import Logo from "../Logo";
import SocialIcon from "../SocialIcon";
const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <Section>
          <Logo />
          <CopyRight> 2021@ Todos direitos reservados </CopyRight>
          <SocialIcon />
        </Section>
      </Container>
    </FooterSection>
  );
};

export default Footer;
