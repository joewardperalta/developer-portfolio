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
import Project from "@/components/Project";
import { useEffect, useState } from "react";
import Link from "next/link";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ProductCard from "@/components/cards/ProductCard";
import SubHeading from "@/components/Typography/SubHeading";
import Paragraph from "@/components/Typography/Paragraph";

// Data
import experiences from "@/data/experiences.json";
import projects from "@/data/projects.json";
import contacts from "@/data/contacts.json";
import SocialList from "@/components/SocialList";

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

        {/* About */}
        <Section className="bg-white" id="about">
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
        <Section className="bg-secondary" id="experience">
          <Container>
            <Heading className="!text-primary">Experience</Heading>
          </Container>

          <Container>
            <Column className="space-y-[8.375rem]">
              {experiences.map((experience, index) => (
                <ProductCard
                  key={experience.id}
                  image={{
                    src: experience.image.src,
                    alt: experience.image.alt,
                  }}
                  role={experience.role}
                  company={experience.company}
                  date={experience.date}
                  description={experience.description}
                  links={{
                    github:
                      "https://github.com/joewardperalta/The-Apostolic-Sanctuary-of-Canada",
                    website:
                      "https://www.apostolicsanctuarycanada.ca/",
                  }}
                  theme="dark"
                  mirror={index % 2 && true}
                />
              ))}
            </Column>
          </Container>
        </Section>

        <Section id="projects">
          <Container>
            <Column>
              <Heading>Projects</Heading>
            </Column>
          </Container>
          <Container>
            <Column className="space-y-[8.375rem]">
              {projects.map((experience, index) => (
                <ProductCard
                  key={experience.id}
                  image={{
                    src: experience.image.src,
                    alt: experience.image.alt,
                  }}
                  role={experience.role}
                  company={experience.company}
                  date={experience.date}
                  description={experience.description}
                  links={{
                    github:
                      "https://github.com/joewardperalta/The-Apostolic-Sanctuary-of-Canada",
                    website:
                      "https://www.apostolicsanctuarycanada.ca/",
                  }}
                  mirror={index % 2 && true}
                />
              ))}
            </Column>
          </Container>
        </Section>

        <Section
          className="bg-secondary desktop:py-[19rem]"
          id="contacts"
        >
          <Container>
            <Column>
              <Heading className="mb-[4.5rem] !font-bold !text-primary desktop:text-[12.5rem]">
                Let&apos;s Talk
              </Heading>
            </Column>
          </Container>
          <Container>
            <Column>
              <ul className="flex items-center justify-center gap-9">
                <li>
                  <Link
                    className="flex items-center gap-[1.125rem] rounded-full border border-primary px-9 py-6 text-[1.25rem] leading-[1.2] text-primary"
                    href="mailto:joeward_peralta@outlook.com"
                  >
                    <Image
                      src="/vectors/instagram light.svg"
                      alt="instagram icon"
                      width={32}
                      height={32}
                    />
                    joeward_peralta@outlook.com
                  </Link>
                </li>
                <SocialList />
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
