// Data
import profileSummary from "@/data/profileSummary.json";

// Components
import Paragraph from "@/components/ui/typography/Paragraph";
import Title from "@/components/ui/typography/Title";
import Wrapper from "@/components/ui/layout/Wrapper";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import Image from "next/image";
import Link from "next/link";
import { Folder, Download } from "lucide-react";
import SummaryCard from "@/components/ui/cards/SummaryCard";

export default function Home() {
  return (
    <main>
      <section id="home" className="py-12">
        <Wrapper>
          <div className="flex gap-9 items-center">
            <div>
              <div className="mb-6">
                <Title>Junior Full Stack Developer</Title>
                <Paragraph>
                  Software development student building and integrating
                  production-ready full-stack web applications with React,
                  Next.js, and Node.js for real client workflows.
                </Paragraph>
              </div>

              <div className="space-x-2">
                <PrimaryButton>
                  <Link href="/projects">
                    <Folder strokeWidth={2} />
                    View Projects
                  </Link>
                </PrimaryButton>
                <SecondaryButton>
                  <Link href="/resume">
                    <Download strokeWidth={2} />
                    Resume
                  </Link>
                </SecondaryButton>
              </div>
            </div>

            <div className="max-w-80">
              <Image
                className="rounded-3xl"
                src="/joewardperalta.jpg"
                alt="Author's profile picture wearing formal dress."
                width={1536}
                height={2048}
              />
            </div>
          </div>
        </Wrapper>
      </section>

      <section id="">
        <Wrapper>
          <ul className="flex gap-2">
            {profileSummary.map((summary, index) => (
              <li className="w-full" key={index}>
                <SummaryCard
                  title={summary.title}
                  description={summary.description}
                />
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>
    </main>
  );
}
