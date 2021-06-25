import "./Testimonial.css";

type TestimonialType = {
  name: string,
  profession: string,
  opinion: string,
  image: string,
};

function Testimonial({name, profession, opinion, image}: TestimonialType) {
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
