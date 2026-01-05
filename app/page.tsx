import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/layout/Wrapper";

export default function Home() {
  return (
    <main>
      <section className="py-12">
        <Wrapper>
          <div className="mb-6">
            <Title>Junior Full Stack Developer</Title>
            <Paragraph>
              Software development student building and integrating
              production-ready full-stack web applications with React, Next.js,
              and Node.js for real client workflows.
            </Paragraph>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
