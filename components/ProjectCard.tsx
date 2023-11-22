import Image from "next/image";

export default function ProjectCard({
  href,
  name,
  description,
  imageSrc,
  w,
  h,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="no-underline hover:text-compositr group transition-all odd:hover:-rotate-2 hover:rotate-2 duration-300"
    >
      <div className="border rounded-lg p-4 flex items-center gap-4 hover:border-compositr transition-colors">
        <div className="p-2">
          <Image src={imageSrc} alt="Image" width={w} height={h} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg underline transition-colors group-hover:text-compositr m-0 ">
            {name}
          </h3>
          <span className="">{description}</span>
        </div>
      </div>
    </a>
  );
}

interface ProjectCardProps {
  href: string;
  name: string;
  description: string;
  imageSrc: string;
  w?: number;
  h?: number;
}
