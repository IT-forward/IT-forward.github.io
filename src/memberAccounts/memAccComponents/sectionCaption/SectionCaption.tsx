import "./SectionCaption.css";

function SectionCaption(props: any) {
  const caption = props.caption;
  return (
    <div className="hr-line">
      <span>{caption}</span>
      <hr />
    </div>
  );
}

export default SectionCaption;
