export default function Chapter({ icon }: { icon: () => JSX.Element }) {
  return (
    <div className="image-box-solid-group">
      <div className="image-box-solid"></div>
      {icon()}
      <div className="image-box-solid"></div>
    </div>
  );
}
