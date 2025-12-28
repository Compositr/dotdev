import ContactCard from "@/components/ContactCard";
import { LuMail } from "react-icons/lu";
import { BsDiscord, BsGithub, BsTelegram, BsTwitter } from "react-icons/bs";
import Section from "@/components/Section";
import CardFlex from "@/components/CardFlex";
import ProjectCard from "@/components/ProjectCard";
import SuroiImage from "@/public/projects/suroi.svg";
import AstrialImage from "@/public/projects/landscape-logo-white.svg"

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen sm:p-0 px-6 py-4 bg-slate-800">
      <div class="p-4 border-red-500 bg-red-200 border rounded-lg my-8">
  <h1 class="text-xl font-bold mb-2">Important Notice</h1>
  <pre>
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

Hey! This site & identity is no longer maintained. The contact links here may no longer function... this website will remain for posterity. For the last unaltered version, check out the Wayback Machine or http://archive.today/AaTKF

This will be the last message from this set of keys. They will be destroyed shortly.

Thanks for all the fun :)

2025-12-28 13:24:22+08:00
-----BEGIN PGP SIGNATURE-----

iHUEARYKAB0WIQTG+6+iQIol7mOczeeR494gEpoLSgUCaVC/DgAKCRCR494gEpoL
SkS2AP9gmrzoXXaOkHR3B1uHSxfnsKXs3SpC/JbTkzjtp5c0DwEA4CybBOvOeDnC
WH+qNYM2HvtYho2HusHdgu9vvwhJkgg=
=pLSQ
-----END PGP SIGNATURE-----

  </pre>
</div>
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className="font-bold text-transparent bg-clip-text border-b border-spacing-0 border-gray-400 bg-gradient-to-tr from-gray-500 to-white/90"
          >
            Next.js
          </a>{" "}
          with{" "}
          <a
            className="text-[#07B6D5] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcss.com"
          >
            Tailwind
          </a>
          , but I have recently also tried out <a href="https://redwoodjs.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#bf4722]">RedwoodJS</a> as a more opinionated JAM-stack-like alternative.
        </p>
        <p>
          I am currently learning <a href="https://rust-lang.org" target="_blank" rel="noopener noreferrer" className="font-bold text-[#B7410E]">Rust</a> just out of curiosity.
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
        <p>Here are some of the projects I have participated in or contributed to:</p>
        <ProjectCard
        name="Astrial.org"
        description="[WIP] Astrial hosts a variety of open source alternative services."
        href="https://astrial.org"
        imageSrc={AstrialImage}
        w={169}
        h={42}
        />
        <small><i>NB: I am no longer assoicated with the Suroi project</i></small>
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
