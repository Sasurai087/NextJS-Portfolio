import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaSteam } from "react-icons/fa";
import Button from "../../styles/GlobalComponents/Button";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SocialIconsContainer>
        <LinkList>
          <LinkColumn>
            <LinkTitle>
              Email:{" "}
              <LinkItem href="mailto:james.ohsako@gmail.com">
                james.ohsako@gmail.com
              </LinkItem>
            </LinkTitle>

            <LinkItem
              href="https://docs.google.com/document/d/1yXDkSQ4O3N45FjFEH0tfqD-q77yhxfidcUzBkJ6VcAc/edit?usp=sharing"
              target="_blank"
            >
              <Button>Resume</Button>
            </LinkItem>
          </LinkColumn>
        </LinkList>
        {/* <CompanyContainer>
          <Slogan>Innovating stuff</Slogan>
        </CompanyContainer> */}

        <SocialContainer>
          <SocialIcons href="https://github.com/Sasurai087">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/johsako">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://steamcommunity.com/id/sasurai087">
            <FaSteam size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
