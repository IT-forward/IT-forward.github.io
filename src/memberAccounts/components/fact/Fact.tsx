import "./Fact.css";

type FactType = {
  icon: JSX.Element,
  nums: string,
  type: string,
}

function Fact({icon, nums, type}: FactType) {
  return (
    <div className="d-inline-block">
      <div className="d-flex align-items-center">
        <div className="icon-div mr-3">
          <div className="icon">{icon}</div>
        </div>
        <div>
          <div className="font-weight-bold student-number">{nums}</div>
          <div>{type}</div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
