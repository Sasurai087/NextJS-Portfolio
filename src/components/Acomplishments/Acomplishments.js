import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  EducationText,
} from "./AcomplishmentsStyles";

export const data = [
  {
    number: "Web Developer Bootcamp",
    text: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
  {
    number: "Modern Javascript Bootcamp Course",
    text: "https://www.udemy.com/course/javascript-beginners-complete-tutorial/",
  },
  {
    number: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    text: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    number: "Modern React with Redux",
    text: "https://www.udemy.com/course/react-redux/",
  },
  {
    number: "Complete JavaScript Course 2022: From Zero to Expert!",
    text: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Education</SectionTitle>

    <EducationText>University</EducationText>
    <Boxes>
      <Box key="csulb">
        <BoxNum>Bachelor of Arts in Communication Studies</BoxNum>
        <BoxText href="https://www.csulb.edu/" target="_blank">
          California State University of Long Beach
        </BoxText>
      </Box>
    </Boxes>

    <EducationText>Online Courses</EducationText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText href={card.text} target="_blank">
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
