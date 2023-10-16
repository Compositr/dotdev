export default function CardFlex({ children }: React.PropsWithChildren) {
  return <div className="flex flex-row flex-wrap gap-2">{children}</div>;
}
