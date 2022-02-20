import { FC } from "react";
import Header from "../../components/Header";
import Stacks from "./Sections/Stacks";
import Company from "./Sections/Company";
import Tech from "./Sections/Tech";
const Home: FC = () => {
  return (
    <>
      <Header />
      <Stacks />
      <Company />
      <Tech />
    </>
  );
};
export default Home;
