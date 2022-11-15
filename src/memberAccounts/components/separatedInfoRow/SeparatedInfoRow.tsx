type SeparatedInfoRowType = {[prop: string]: string};

function SeparatedInfoRow({prop, value}: SeparatedInfoRowType) {
  return (
    <div className="d-inline-block">
      <span className="font-weight-bold mr-2">{prop}:</span> {value}
    </div>
  );
}

export default SeparatedInfoRow;
