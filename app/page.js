"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Column from "@/components/Column";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SubTitle from "@/components/Typography/SubTitle";
import Title from "@/components/Typography/Title";
import Image from "next/image";
import Section from "@/components/Section";
import Heading from "@/components/Typography/Heading";
import TechCard from "@/components/cards/TechCard";
import ToggleSwitch from "@/components/ToggleSwitch";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Project from "@/components/Project";
import { useEffect, useState } from "react";
import Link from "next/link";

// Data
import technologies from "@/data/technologies.json";
import experiences from "@/data/experiences.json";
import education from "@/data/education.json";
import projects from "@/data/projects.json";
import contacts from "@/data/contacts.json";

export default function Home() {
  const [
    experienceAndEducationContent,
    setExperienceAndEducationContent,
  ] = useState([]);

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
          <Container className="desktop:items-center desktop:gap-36">
            <Column>
              <div className="mb-10 tablet:mb-[-51px] desktop:mb-0">
                <Title>Full-Stack Web Developer</Title>
                <SubTitle>— Based in Toronto, Canada</SubTitle>
                <PrimaryButton>Get my resume</PrimaryButton>
              </div>
            </Column>
            <Column>
              <Image
                className="h-[23.75rem] w-full rounded-default object-cover tablet:ml-auto tablet:h-[31.5625rem] tablet:w-[26.625rem] desktop:h-[40.75rem] desktop:w-full"
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
              <ul className="grid grid-cols-3 justify-center gap-6 tablet:flex tablet:flex-wrap tablet:gap-x-12 tablet:gap-y-8">
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
              <Heading className="tablet:text-left">
                Experience
              </Heading>
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
            <Column className="space-y-6 tablet:space-y-12">
              {experienceAndEducationContent.map((content, index) => (
                <ExperienceCard
                  key={index}
                  img={content.img}
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

        <Section id="projects">
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

        <Section id="contacts">
          <Container>
            <Column>
              <Heading>Contacts</Heading>
            </Column>
          </Container>
          <Container>
            <Column>
              <ul className="flex w-full justify-between text-secondary tablet:text-[2rem] tablet:leading-normal">
                {contacts.map((contact, index) => (
                  <li className="" key={index}>
                    <Link href={contact.link} target="_blank">
                      {contact.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>
          </Container>
        </Section>
      </main>

      <footer className="px-24 py-4">
        <Container>
          <Column>
            <p className="text-center text-xs text-secondary">
              © Joeward Peralta 2024. All rights reserved.
            </p>
          </Column>
        </Container>
      </footer>
    </>
  );
}
