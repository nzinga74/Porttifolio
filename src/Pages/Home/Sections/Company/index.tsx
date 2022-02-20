import React from "react";
import {
  CompanySection,
  Title,
  ContentSection,
  ContentText,
  ContentView,
  ContentIconView,
  StarView,
} from "./styles";
import { Container } from "../../../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
const Company: React.FC = () => {
  return (
    <>
      <CompanySection>
        <Container>
          <ContentSection>
            <Title>Empresas</Title>
            <ContentView>
              <div>
                <StarView>
                  <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                  <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                  <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                  <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                  <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                </StarView>
                <ContentText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  fuga voluptatibus! At perspiciatis aut cupiditate, sequi iure
                  minima quasi reiciendis ut dolores debitis ratione, quaerat
                  facere ipsum itaque iusto perferendis!
                </ContentText>
              </div>
              <ContentIconView>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  size={"3x"}
                  width={100}
                  color="#7c7d81"
                  height={100}
                />
              </ContentIconView>
            </ContentView>
          </ContentSection>
        </Container>
      </CompanySection>
    </>
  );
};
export default Company;