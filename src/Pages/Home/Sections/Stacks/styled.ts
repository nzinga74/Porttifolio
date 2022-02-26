import styled from "styled-components";

import { motion } from "framer-motion";
export const StackSection = styled.section`
  width: 100%;
  padding-bottom: 5px;
  background-color: #25262a;
`;
export const StackSider = styled.div`
  width: 100%;
  display: flex;
  padding-top: 100px;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    padding: 50px 60px;
  }
`;
export const StackSideRight = styled(motion.div)`
  width: 60%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const StackSideRightContent = styled.div`
  padding: 130px;
  padding-top: 30px;
  @media only screen and (max-width: 800px) {
    padding: 0px;
    padding-top: 30px;
  }
`;
export const StackSideLeft = styled(motion.div)`
  width: 40%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const StackSideRightTitle = styled.h2`
  color: white;
  font-size: 29px;
  font-weight: 300;
`;
export const RightDeclaration = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 300;
  margin-top: 48px;
  line-height: 1.5;
`;
export const RightContent = styled.p`
  color: #7c7d81;
  font-size: 14px;
  margin-top: 20px;
  line-height: 1.5;
`;
