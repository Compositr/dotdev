import { ReactNode } from "react";

export default function ContactCard({ icon, href, title }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="no-underline hover:text-compositr transition-all odd:hover:-rotate-2 hover:rotate-2 duration-300"
    >
      <div className="border rounded-lg p-4 flex items-center gap-2 hover:border-compositr transition-colors">
        <div className="h-full w-full">{icon}</div>
        <div>
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
}

interface ContactCardProps {
  icon: ReactNode;
  href: string;
  title: string;
}
