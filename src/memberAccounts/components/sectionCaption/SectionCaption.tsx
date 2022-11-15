import "./SectionCaption.css";

type SectionCaptionType = {
  caption: string,
};

function SectionCaption({caption}: SectionCaptionType) {
  return (
    <div className="hr-line">
      <span>{caption}</span>
      <hr />
    </div>
  );
}

export default SectionCaption;
