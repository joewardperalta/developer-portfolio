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
              <Link href="#projects">
                <PrimaryButton>View My Projects</PrimaryButton>
              </Link>
            </Column>
          </Container>
        </Section>

        {/* About */}
        <Section className="bg-white" id="about">
          <Container className="flex-col-reverse items-center tablet:flex-row">
            <Column className="mt-[1.5rem] tablet:mt-0 tablet:pr-[4.25rem] laptop:px-[5.75rem] desktop:px-[7.25rem]">
              <Heading3>Joeward Peralta</Heading3>
              <SubHeading>Full Stack Developer</SubHeading>
              <Paragraph className="text-gray mb-8">
                One year of experience in web development,
                specializing in technologies like
                <span className="text-secondary"> React</span>,
                <span className="text-secondary"> Next.js</span>,
                <span className="text-secondary"> Node.js</span>,
                <span className="text-secondary"> Tailwind CSS</span>,
                and MongoDB, and currently enhancing my skills in
                UI/UX design to craft intuitive, accessible
                interfaces.
              </Paragraph>
              <SecondaryButton>Download My Resume</SecondaryButton>
            </Column>
            <Column>
              <Image
                className="rounded-[1.125rem] object-cover"
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
            <Column className="space-y-[3.5rem] tablet:space-y-[5rem] laptop:space-y-[8.375rem]">
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
                  links={experience.links}
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
            <Column className="space-y-[3.5rem] tablet:space-y-[5rem] laptop:space-y-[8.375rem]">
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
              <Heading className="text-[4rem] !font-bold !text-primary tablet:text-[7.5rem] laptop:text-[11rem] desktop:text-[12.5rem]">
                Let&apos;s Talk
              </Heading>
            </Column>
          </Container>
          <Container>
            <Column>
              <ul className="flex flex-col items-center justify-center gap-9 laptop:flex-row">
                <li>
                  <Link
                    className="flex items-center gap-[1rem] rounded-full border border-primary px-8 py-5 text-[1rem] leading-[1.2] text-primary tablet:text-[1.125rem]"
                    href="mailto:joeward_peralta@outlook.com"
                  >
                    <Image
                      className="h-5 w-5 tablet:h-6 tablet:w-6"
                      src="/images/email.png"
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
      <footer className="space-y-12 bg-white py-8">
        <Container className="mb-10 space-y-8 laptop:space-y-0">
          <Column className="flex flex-col gap-8 tablet:flex-row tablet:items-center tablet:justify-between">
            <Logo />
            <ul className="flex flex-wrap gap-4 font-medium text-secondary tablet:flex-nowrap tablet:gap-8 laptop:justify-end">
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
          <Column className="flex flex-col gap-4 text-[0.75rem] font-bold uppercase tablet:flex-row tablet:items-center tablet:justify-between">
            <p>Copyright 2024</p>
            <p>Designed & Developed by Joeward Peralta</p>
          </Column>
        </Container>
      </footer>
    </>
  );
}
