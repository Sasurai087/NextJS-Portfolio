import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Logo,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link passHref href="/">
        <Logo>
          <DiCssdeck size="3rem" /> James Ohsako
        </Logo>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link passHref href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link passHref href="#aboutme">
          <NavLink>About Me</NavLink>
        </Link>
      </li>

      <li>
        <Link passHref href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/Sasurai087">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/johsako/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
