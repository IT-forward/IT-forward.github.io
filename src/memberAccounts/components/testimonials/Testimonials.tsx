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

function Testimonials({testimonialsInfo}: TestimonialsType) {
  let row: JSX.Element[] = [];

  testimonialsInfo.forEach(({name, profession, opinion, image}, id) => {
    row.push(
      <Col key={id} >
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
          <Row xs={1} md={2} lg={3} data-testid="testimonials-div">
            {row}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
