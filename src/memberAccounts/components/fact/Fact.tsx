import "./Fact.css";

function Fact(props: any) {
  const icon = props.icon;
  const numbers = props.nums;
  const type = props.type;

  return (
    <div className="d-inline-block">
      <div className="d-flex align-items-center">
        <div className="icon-div mr-3">
          <div className="icon">{icon}</div>
        </div>
        <div>
          <div className="font-weight-bold student-number">{numbers}</div>
          <div>{type}</div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
