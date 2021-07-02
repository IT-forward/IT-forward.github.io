export default function Lesson({
  icon,
  title
}: {
  icon: JSX.Element;
  title: string;
}) {
  return (
    <div className="image-box">
      <div>

        {icon}
        <p>{title}</p>
      
      </div>
    </div>
  );
}
