export default function RoadmapRow({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <div className="image-box-group">{children}</div>;
}
