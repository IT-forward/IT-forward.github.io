type SeparatedInfoRowType = {[prop: string]: string};

function SeparatedInfoRow({prop, value}: SeparatedInfoRowType) {
  return (
    <div className="d-inline-block" data-testid="separatedInfoRow-div">
      <span className="font-weight-bold mr-2">{prop}:</span> {value}
    </div>
  );
}

export default SeparatedInfoRow;
