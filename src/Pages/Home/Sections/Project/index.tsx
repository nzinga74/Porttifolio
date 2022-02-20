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
import {
  faQuoteRight,
  faStar,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "../../../../components/Chip";
import Slider from "react-slick";
import { Carrouselsettings } from "../../../../constants";
const Project: React.FC = () => {
  return (
    <>
      <CompanySection>
        <Container>
          <ContentSection>
            <Title>Projetos Desenvolvidos</Title>
            <Slider {...Carrouselsettings}>
              <div>
                <ContentView>
                  <div>
                    <StarView>
                      <Chip text="TS" />
                      <Chip text="RN" />
                    </StarView>
                    <ContentText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, fuga voluptatibus! At perspiciatis aut cupiditate,
                      sequi iure minima quasi reiciendis ut dolores debitis
                      ratione, quaerat facere ipsum itaque iusto perferendis!
                    </ContentText>
                  </div>
                  <ContentIconView>
                    <FontAwesomeIcon
                      icon={faCode}
                      size={"3x"}
                      width={100}
                      color="#7c7d81"
                      height={100}
                    />
                  </ContentIconView>
                </ContentView>
              </div>
              <div>
                <ContentView>
                  <div>
                    <StarView>
                      <Chip text="TS" />
                      <Chip text="RN" />
                    </StarView>
                    <ContentText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, fuga voluptatibus! At perspiciatis aut cupiditate,
                      sequi iure minima quasi reiciendis ut dolores debitis
                      ratione, quaerat facere ipsum itaque iusto perferendis!
                    </ContentText>
                  </div>
                  <ContentIconView>
                    <FontAwesomeIcon
                      icon={faCode}
                      size={"3x"}
                      width={100}
                      color="#7c7d81"
                      height={100}
                    />
                  </ContentIconView>
                </ContentView>
              </div>
              <div>
                <ContentView>
                  <div>
                    <StarView>
                      <Chip text="TS" />
                      <Chip text="RN" />
                    </StarView>
                    <ContentText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, fuga voluptatibus! At perspiciatis aut cupiditate,
                      sequi iure minima quasi reiciendis ut dolores debitis
                      ratione, quaerat facere ipsum itaque iusto perferendis!
                    </ContentText>
                  </div>
                  <ContentIconView>
                    <FontAwesomeIcon
                      icon={faCode}
                      size={"3x"}
                      width={100}
                      color="#7c7d81"
                      height={100}
                    />
                  </ContentIconView>
                </ContentView>
              </div>
            </Slider>
          </ContentSection>
        </Container>
      </CompanySection>
    </>
  );
};
export default Project;
