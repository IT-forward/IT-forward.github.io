import './Testimonials.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Testimonial from '../testimonial/Testimonial';

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
  return (
    <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {
            testimonialsInfo.map(tes => <Testimonial {...tes} />)
          }
        </Carousel>
  );
}

export default Testimonials;
