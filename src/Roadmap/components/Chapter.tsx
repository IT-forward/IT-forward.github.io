export default function Chapter({ iconComponent }: { iconComponent: JSX.Element }) {
  return (
    <div className="image-box-solid-group">
      <div className="image-box-solid"></div>
      {iconComponent}
      <div className="image-box-solid"></div>
    </div>
  );
}
