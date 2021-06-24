import { Row, Col, Carousel } from "react-bootstrap";
import Testimonial from "../testimonial/Testimonial";

type TestimonialsType = {
  testimonialsInfo: Array<TestimonialType>;
};
type TestimonialType = {
  name: string;
  profession: string;
  image: string;
  opinion: string;
};

function Testimonials(props: TestimonialsType) {
  const testimonials = props.testimonialsInfo;
  let row: any = [];

  testimonials.forEach((testimonial) => {
    const name = testimonial.name;
    const profession = testimonial.profession;
    const opinion = testimonial.opinion;
    const image = testimonial.image;

    row.push(
      <Col>
        {
          <Testimonial
            name={name}
            profession={profession}
            opinion={opinion}
            image={image}
          />
        }
      </Col>
    );
  });

  return (
    <div>
      <Carousel className="mb-5" interval={2000}>
        <Carousel.Item>
          <Row xs={1} md={2} lg={3}>
            {row}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
