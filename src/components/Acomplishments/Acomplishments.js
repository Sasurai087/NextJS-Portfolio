import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { accomplishments } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}+</BoxText>
          </Box>
        ))}
      </Boxes>
    </SectionTitle>
  </Section>
);

export default Acomplishments;
