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

// Data
import technologies from "@/data/technologies.json";

export default function Home() {
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
      </main>
    </>
  );
}
