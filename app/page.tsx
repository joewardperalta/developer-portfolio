import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/layout/Wrapper";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Image from "next/image";
import Link from "next/link";
import { Folder, Download } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="py-12">
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
    </main>
  );
}
