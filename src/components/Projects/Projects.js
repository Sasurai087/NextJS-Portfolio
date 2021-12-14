import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImageLinks,
  ExternalWrapper,
} from "./ProjectsStyles";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section noPadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, source, description, tags, visit }) => (
          <BlogCard key={id}>
            {/* Images found in public/images folder */}
            <ImageLinks href={visit} target="_blank">
              <Img src={image} />
            </ImageLinks>
            <TitleContent>
              <HeaderThree isTitle>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <Hr />
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">
                <ExternalWrapper>
                  <AiFillPlayCircle size="1.8rem" />
                  Demo
                </ExternalWrapper>
              </ExternalLinks>
              <ExternalLinks href={source} target="_blank">
                <ExternalWrapper>
                  <AiFillGithub size="1.8rem" />
                  Github
                </ExternalWrapper>
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
