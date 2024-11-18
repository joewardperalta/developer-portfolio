"use client";

// Data
import experiences from "@/data/experiences.json";
import projects from "@/data/projects.json";
import testimonials from "@/data/testimonials.json";

// Components
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
import SocialList from "@/components/SocialList";
import Logo from "@/components/Logo";
import TestimonialCard from "@/components/cards/TestimonialCard";

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
        <Section className="desktop:py-[9rem]" id="hero">
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

        {/* Projects */}
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

        {/* Testimonials */}
        <Section className="bg-white" id="testimonials">
          <Container>
            <Column>
              {testimonials.map((testimony) => (
                <TestimonialCard
                  key={testimony.id}
                  quote={testimony.quote}
                  name={testimony.name}
                  position={testimony.position}
                  organization={testimony.organization}
                  logo={testimony.logo}
                />
              ))}
            </Column>
          </Container>
        </Section>

        {/* Contact */}
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

      {/*  Footer */}
      <footer className="bg-white py-8">
        <Container className="mb-10">
          <Column>
            <Logo />
          </Column>
          <Column>
            <ul className="flex justify-end gap-8 font-medium text-secondary">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#testimonials">Testimonials</Link>
              </li>
            </ul>
          </Column>
        </Container>

        <Container>
          <Column>
            <Paragraph className="text-[0.75rem] font-bold uppercase">
              Copyright 2024
            </Paragraph>
          </Column>
          <Column>
            <Paragraph className="text-end text-[0.75rem] font-bold uppercase">
              Designed & Developed by Joeward Peralta
            </Paragraph>
          </Column>
        </Container>
      </footer>
    </>
  );
}
