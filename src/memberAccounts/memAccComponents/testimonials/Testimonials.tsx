import { Row, Col, Carousel } from "react-bootstrap";
import Testimonial from "../testimonial/Testimonial";

function Testimonials(props: any) {
  const testimonials = props.testimonialsInfo;
  let row = [];

  for (const property in testimonials) {
    const name = testimonials[property].name;
    const profession = testimonials[property].profession;
    const opinion = testimonials[property].opinion;
    const image = testimonials[property].image;

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
  }

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
