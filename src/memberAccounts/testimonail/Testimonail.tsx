import './Testimonail.css';
import husanImg from '../memberImages/husan-img.jpg';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

function Testimonail() {
    return (
        <div className="testimonail-div">
            <div className="testimonail-text-div">
                <ImQuotesLeft className="quote-icon" />
                    &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas delectus modi voluptatibus. Veritatis molestias
                    sint saepe! Reprehenderit deleniti consectetur suscipit. &nbsp;
                <ImQuotesRight className="quote-icon" />
            </div>
            <div className="testimonail-img-div">
                <img src={husanImg} alt="Husan" className="img-fluid" />
            </div>
        </div>
    );
}

export default Testimonail;