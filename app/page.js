import PrimaryButton from "@/components/buttons/PrimaryButton";
import Column from "@/components/Column";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Image from "next/image";
import Section from "@/components/Section";

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
      </main>
    </>
  );
}
