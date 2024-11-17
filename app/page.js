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
import Heading3 from "@/components/Typography/Heading3";
import ToggleSwitch from "@/components/ToggleSwitch";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Project from "@/components/Project";
import { useEffect, useState } from "react";
import Link from "next/link";

// Data
import experiences from "@/data/experiences.json";
import education from "@/data/education.json";
import projects from "@/data/projects.json";
import contacts from "@/data/contacts.json";
import SocialList from "@/components/SocialList";
import SubHeading from "@/components/Typography/SubHeading";
import Paragraph from "@/components/Typography/Paragraph";
import SecondaryButton from "@/components/buttons/SecondaryButton";

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
          <Container>
            <Column className="text-center">
              <Title>Full Stack Web Developer</Title>
              <SubTitle>Based in Toronto, Canada</SubTitle>
              <SocialList className="mx-auto mb-12" light={false} />
              <PrimaryButton>View My Projects</PrimaryButton>
            </Column>
          </Container>
        </Section>

        {/* Technologies */}
        <Section id="technologies">
          <Container className="items-center">
            <Column className="px-[6.75rem]">
              <Heading3>Joeward Peralta</Heading3>
              <SubHeading>
                Computer Programming & Analysis Graduate
              </SubHeading>
              <Paragraph className="mb-16">
                Full Stack Developer with 1 year of experience
                specializing in web using
                <span className="font-bold"> React</span>,
                <span className="font-bold"> Next.js</span>, and
                <span className="font-bold"> Tailwind CSS</span>.
              </Paragraph>
              <SecondaryButton>Download My Resume</SecondaryButton>
            </Column>
            <Column>
              <Image
                className="max-h-[665px] max-w-[545px] rounded-[2rem] object-cover"
                src="/Joeward Peralta Portrait.jpg"
                alt="Joeward peralta's profile picture wearing a formal dress"
                width={1000}
                height={1333}
              />
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
                className="mb-8"
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
            <Column className="space-y-12 laptop:flex laptop:gap-12 laptop:space-y-0">
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
                  <li
                    className="border-b-[3px] border-b-primary transition duration-300 ease-in-out hover:border-b-[3px] hover:border-b-secondary hover:underline-offset-4"
                    key={index}
                  >
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
