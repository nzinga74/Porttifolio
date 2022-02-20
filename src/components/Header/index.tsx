import React from "react";
import Menu from "../Menu";
import {
  Headers,
  Container,
  HeaderSide,
  HeaderSideRight,
  HeaderSideLeft,
  HeaderCOntentTitle,
  HeaderContent,
  HeaderContentText,
  ChatLink,
  WorkProjectContent,
} from "./styles";
import LottieAnimation from "./components/LottieAnimation";
import NumberCard from "../NumberCard";
import Chip from "../Chip";
const Header: React.FC = () => {
  return (
    <>
      <Menu />
      <Headers>
        <Container>
          <HeaderSide>
            <HeaderSideLeft>
              <Chip text="FrontEnd Developer" />
              <HeaderContent>
                <HeaderCOntentTitle>
                  Talk is cheap, Show me the code
                </HeaderCOntentTitle>
                <HeaderContentText>
                  Eu desenho e arquiteto coisas bonitas e simples e me diverto
                  com isso, tenho que dizer que amo o que faço
                </HeaderContentText>
                <ChatLink>VAMOS NO OFF !</ChatLink>
                <WorkProjectContent>
                  <NumberCard number="12" content={["Anos", "Experiencia"]} />
                  <NumberCard
                    number="20"
                    content={["Projectos", "Em 5 Países"]}
                  />
                </WorkProjectContent>
              </HeaderContent>
            </HeaderSideLeft>
            <HeaderSideRight>
              <LottieAnimation />
            </HeaderSideRight>
          </HeaderSide>
        </Container>
      </Headers>
    </>
  );
};
export default Header;
