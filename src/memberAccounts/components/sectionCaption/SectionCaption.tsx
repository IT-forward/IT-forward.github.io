import "./SectionCaption.css";

type SectionCaptionType = {
  caption: string,
};

function SectionCaption({caption}: SectionCaptionType) {
  return (
    <div className="hr-line" data-testid="sectionCaption">
      <span>{caption}</span>
      <hr />
    </div>
  );
}

export default SectionCaption;
