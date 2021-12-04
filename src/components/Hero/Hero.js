import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        James Ohsako
        <br />
        Front-End Developer
      </SectionTitle>
      <SectionText>
        Hello and welcome to my portfolio!
        <br />
        Click the button below to go directly to my works.
      </SectionText>

      <Link passHref href="#projects">
        <Button>My Projects</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
