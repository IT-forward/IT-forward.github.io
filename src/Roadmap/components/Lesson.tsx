export default function Lesson({
  icon,
  title
}: {
  icon: JSX.Element;
  title: string;
}) {
  return (
    <div className="image-box">
      <a href="https://google.com" target="_blank" rel="noreferrer">
        {icon}
        <p>{title}</p>
      </a>
    </div>
  );
}
