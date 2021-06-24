function SeparatedInfoRow(props: any) {
  const emphasis = props.emphasis;
  const value = props.value;

  return (
    <div className="d-inline-block">
      <span className="font-weight-bold mr-2">{emphasis}:</span> {value}
    </div>
  );
}

export default SeparatedInfoRow;
