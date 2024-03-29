import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="aboutme">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>I have experience with the following items: </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Medallia Qualtrics React.js Javascript(ES6/ES7) CSS Bootstrap
            Styled-Components
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Medallia(Admin Suite) Medallia(Classic Setup) Node.js ExpressJS
            MongoDB Firebase Python
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            ProofHub GSuite SugarCRM Trello Kanban Git Github Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
