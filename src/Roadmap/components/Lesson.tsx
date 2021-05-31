export default function Lesson({
  icon,
  title,
  path,
}: {
  icon: JSX.Element;
  title: string;
  path: string;
}) {
  return (
    <div className="image-box">
      <a href={path} target="_blank" rel="noreferrer">
        {icon}
        <p>{title}</p>
      </a>
    </div>
  );
}
