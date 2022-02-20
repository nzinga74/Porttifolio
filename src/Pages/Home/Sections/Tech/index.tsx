import React from "react";
import { TechSection, RightSide, LeftSide, Section, Title } from "./styles";
import { Container } from "../../../../styles";
import LottieAnimation from "./components/LottieAnimation";
const Tech: React.FC = () => {
  return (
    <TechSection>
      <Container>
        <Section>
          <LeftSide>
            <LottieAnimation />
          </LeftSide>
          <RightSide>
            <Title>Tecnologias</Title>
          </RightSide>
        </Section>
      </Container>
    </TechSection>
  );
};

export default Tech;
