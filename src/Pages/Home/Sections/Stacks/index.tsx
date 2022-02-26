import React from "react";
import {
  StackSection,
  StackSideLeft,
  StackSideRight,
  StackSider,
  StackSideRightContent,
  StackSideRightTitle,
  RightDeclaration,
  RightContent,
} from "./styled";
import { Container } from "../../../../styles";
import { motion } from "framer-motion";
import StackButton from "./components/StackButton";
const Stacks: React.FC = () => {
  return (
    <StackSection>
      <Container>
        <StackSider>
          <StackSideLeft
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <StackButton />
            <StackButton />
          </StackSideLeft>
          <StackSideRight
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            <StackSideRightContent>
              <StackSideRightTitle>
                Ola meu nome é Nzinga António!
              </StackSideRightTitle>
              <RightDeclaration>
                Estamos fazer nossa vida sem pais ricos, somente com a força de
                vontade
              </RightDeclaration>
              <RightContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                dolores cum soluta temporibus suscipit aspernatur dolore tempora
                sint delectus dolor ea repellat molestias alias. Laudantium
                optio voluptatem harum nesciunt quis! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est, dolores cum soluta temporibus
                suscipit aspernatur dolore tempora sint delectus dolor ea
                repellat molestias alias. Laudantium optio voluptatem harum
                nesciunt quis!
              </RightContent>
            </StackSideRightContent>
          </StackSideRight>
        </StackSider>
      </Container>
    </StackSection>
  );
};
export default Stacks;
