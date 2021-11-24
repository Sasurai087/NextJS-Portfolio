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
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I build apps and do stuff - why should you hire me?
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Projects
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
