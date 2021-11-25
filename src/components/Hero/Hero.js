import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        James Ohsako
        <br />
        Front-End Developer
      </SectionTitle>
      <SectionText>
        I build apps and do stuff - why should you hire me?
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        My Projects
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
