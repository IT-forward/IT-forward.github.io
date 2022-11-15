type TestimonialType = {
  name: string,
  profession: string,
  opinion: string,
  image: string,
};

function Testimonial({ name, profession, opinion, image }: TestimonialType) {
  return (
    <div>
      <img src={image} alt={name} />
      <div className="myCarousel">
        <h3>{name}</h3>
        <h4>{profession}</h4>
        <p>{opinion}</p>
      </div>
    </div>
  );
}

export default Testimonial;
