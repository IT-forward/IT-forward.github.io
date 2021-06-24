import "./SectionCaption.css";

type SectionCaptionType = {
  caption: string,
};

function SectionCaption(props: SectionCaptionType) {
  const caption = props.caption;
  return (
    <div className="hr-line">
      <span>{caption}</span>
      <hr />
    </div>
  );
}

export default SectionCaption;
