export default function Section({
  children,
  title,
}: {
  title: string;
} & React.PropsWithChildren) {
  return (
    <section className="mt-8 prose prose-invert w-full">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
