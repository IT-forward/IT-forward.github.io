import "./Testimonial.css";

function Testimonial(props: any) {
  const name = props.name;
  const profession = props.profession;
  const opinion = props.opinion;
  const image = props.image;

  return (
    <div className="testimonail-div p-4">
      <div className="d-flex align-items-center">
        <img src={image} alt="husan" />
        <div className="ml-4">
          <h4 className="my-1">{name}</h4>
          <h5 className="my-1">{profession}</h5>
        </div>
      </div>
      <p className="mt-2">{opinion}</p>
    </div>
  );
}

export default Testimonial;
