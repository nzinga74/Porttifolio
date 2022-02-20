import { FC } from "react";
import Header from "../../components/Header";
import Stacks from "./Sections/Stacks";
import Company from "./Sections/Company";
const Home: FC = () => {
  return (
    <>
      <Header />
      <Stacks />
      <Company />
    </>
  );
};
export default Home;
