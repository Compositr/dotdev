import ContactCard from "@/components/ContactCard";
import { LuMail } from "react-icons/lu";
import { BsDiscord, BsGithub, BsTelegram, BsTwitter } from "react-icons/bs";
import Section from "@/components/Section";
import CardFlex from "@/components/CardFlex";
import ProjectCard from "@/components/ProjectCard";
import SuroiImage from "@/public/projects/suroi.svg";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen sm:p-0 px-6 bg-slate-800">
      <div className="prose prose-invert mt-8">
        <h1>
          Hey, I&apos;m <span className="text-compositr">Compositr</span>!
        </h1>
        <p>
          I am a self taught fullstack web dev, although I do dabble in other
          stuff from time to time. I use{" "}
          <a
            className="text-[#3178C6] font-bold"
            href="https://typescriptlang.org"
            target="_blank"
          >
            TypeScript
          </a>{" "}
          as my language of choice.
        </p>
        <p>
          For web development I usually use{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            className="font-bold text-transparent bg-clip-text border-b border-spacing-0 border-gray-400 bg-gradient-to-tr from-gray-500 to-white/90"
          >
            Next.js
          </a>{" "}
          with{" "}
          <a
            className="text-[#07B6D5] font-bold"
            target="_blank"
            href="https://tailwindcss.com"
          >
            Tailwind
          </a>
          .
        </p>
      </div>
      <Section title="Contact">
        <CardFlex>
          <ContactCard
            href="mailto:compositr@compositr.dev"
            icon={<LuMail />}
            title="compositr@compositr.dev"
          />
          <ContactCard
            href="https://discord.com/users/330539533546422272"
            icon={<BsDiscord />}
            title="@compositr"
          />
          <ContactCard
            href="https://t.me/Compositr"
            icon={<BsTelegram />}
            title="@Compositr"
          />
        </CardFlex>
      </Section>
      <Section title="Social">
        <CardFlex>
          <ContactCard
            href="https://github.com/Compositr"
            icon={<BsGithub />}
            title="Compositr"
          />
          <ContactCard
            href="https://twitter.com/Compositr"
            icon={<BsTwitter />}
            title="@Compositr"
          />
        </CardFlex>
      </Section>
      <Section title="Projects">
        <ProjectCard
          name="HasangerGames/suroi-wiki"
          description="Official wiki for the 2D shooter game suroi.io"
          href="https://wiki.suroi.io"
          imageSrc={SuroiImage}
          w={169}
          h={42}
        />
        <p>More coming soon™</p>
      </Section>
    </main>
  );
}
