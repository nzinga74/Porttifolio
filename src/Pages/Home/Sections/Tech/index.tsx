import React, { useEffect } from "react";
import {
  TechSection,
  RightSide,
  LeftSide,
  Section,
  Title,
  RightDeclaration,
  RightContent,
  ImageIcon,
  RightIconView,
} from "./styles";
import { Container } from "../../../../styles";
import LottieAnimation from "./components/LottieAnimation";
import Chip from "../../../../components/Chip";

import JavascriptIcon from "../../../../assets/js.png";
import PythonIcon from "../../../../assets/python.png";
import ReactIcon from "../../../../assets/react.png";
import TYpescriptIcon from "../../../../assets/ts.png";
import { LeftSideVariants, RightSideVariants } from "./animate";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Tech: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) animation.start("animate");
  }, [inView]);

  return (
    <TechSection>
      <Container>
        <Section ref={ref}>
          <LeftSide
            variants={LeftSideVariants}
            initial="initial"
            animate={animation}
          >
            <LottieAnimation />
          </LeftSide>
          <RightSide
            variants={RightSideVariants}
            initial="initial"
            animate={animation}
          >
            <Title>Tecnologias</Title>
            <RightDeclaration>
              Eu tenho conhecimento das melhores tecnologias do mercado
            </RightDeclaration>
            <RightContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              impedit omnis adipisci doloribus ut rerum, quam illo quo facere
              alias cumque odio nemo doloremque! Earum adipisci laudantium et
              alias quia. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos impedit omnis adipisci doloribus ut rerum, quam illo
              quo facere alias cumque odio nemo doloremque! Earum adipisci
              laudantium et alias quia.
            </RightContent>
            <RightIconView>
              <Chip text="Javascript" />
              <Chip text="Typescript" />
              <Chip text="React js/Native" />
              <Chip text="Python" />
            </RightIconView>
            <RightIconView>
              <ImageIcon src={JavascriptIcon} />
              <ImageIcon src={TYpescriptIcon} />
              <ImageIcon src={PythonIcon} />
              <ImageIcon src={ReactIcon} />
            </RightIconView>
          </RightSide>
        </Section>
      </Container>
    </TechSection>
  );
};

export default Tech;
