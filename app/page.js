"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Column from "@/components/Column";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Image from "next/image";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import TechCard from "@/components/TechCard";
import ToggleSwitch from "@/components/ToggleSwitch";
import ExperienceCard from "@/components/ExperienceCard";
import Project from "@/components/Project";
import { useEffect, useState } from "react";

// Data
import technologies from "@/data/technologies.json";
import experiences from "@/data/experiences.json";
import education from "@/data/education.json";
import projects from "@/data/projects.json";

export default function Home() {
  const [experienceAndEducationContent, setExperienceAndEducationContent] =
    useState([]);

  useEffect(() => {
    // set the default content for the experience section
    if (experiences) {
      setExperienceAndEducationContent(experiences);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* Hero */}
        <Section id="hero">
          <Container>
            <Column className="mb-10">
              <Title>Full-Stack Web Developer</Title>
              <SubTitle>— Based in Toronto, Canada</SubTitle>
              <PrimaryButton>Get my resume</PrimaryButton>
            </Column>

            <Column className="h-[380px]">
              <Image
                className="rounded-default h-full w-full object-cover"
                src="/Joeward Peralta Portrait.jpeg"
                width={2000}
                height={2000}
                alt="Joeward peralta portrait wearing a formal beige turtle neck"
                priority
              />
            </Column>
          </Container>
        </Section>

        {/* Technologies */}
        <Section id="technologies">
          <Container>
            <Column>
              <Heading>Technologies</Heading>
            </Column>
          </Container>

          <Container>
            <Column>
              <ul className="grid grid-cols-3 justify-center gap-6">
                {technologies.map((tech, index) => (
                  <li key={index}>
                    <TechCard title={tech.title} img={tech.img} />
                  </li>
                ))}
              </ul>
            </Column>
          </Container>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <Container>
            <Column>
              <Heading>Experience</Heading>
            </Column>

            <Column>
              <ToggleSwitch
                firstButtonTitle="Experience"
                secondButtonTitle="Education"
                firstButtonOnClick={() =>
                  setExperienceAndEducationContent(experiences)
                }
                secondButtonOnClick={() =>
                  setExperienceAndEducationContent(education)
                }
              ></ToggleSwitch>
            </Column>
          </Container>

          <Container>
            <Column className="space-y-6">
              {experienceAndEducationContent.map((content, index) => (
                <ExperienceCard
                  key={index}
                  title={content.title}
                  startDate={content.date.start}
                  role={content.role}
                  endDate={content.date.end}
                  bullets={content.bullets}
                />
              ))}
            </Column>
          </Container>
        </Section>

        <Section>
          <Container>
            <Column>
              <Heading>Personal Projects</Heading>
            </Column>
          </Container>
          <Container>
            <Column className="space-y-12">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  startDate={project.startDate}
                  endDate={project.endDate}
                  tags={project.tags}
                  link={project.link}
                />
              ))}
            </Column>
          </Container>
        </Section>
      </main>
    </>
  );
}
