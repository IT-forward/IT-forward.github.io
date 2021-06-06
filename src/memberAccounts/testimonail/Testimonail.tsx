import './Testimonail.css';
import husanImg from '../memberImages/husan-img.jpg';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';


function Testimonail() {
    return (
        <div className="testimonail-div">
            <div className="d-flex align-items-center">
                <img src={husanImg} alt="husan" />
                <div className="ml-3">
                    <h4>Husan Eshonqulov</h4>
                    <h5>Web Devoloper</h5>
                </div>
            </div>
            <p>
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Vitae accusamus perspiciatis sapiente recusandae, voluptatibus."
            </p>
        </div>
    );
}

// function Testimonail() {
//     return (
//         <div className="testimonail-div">
//             <div className="testimonail-text-div">
//                 <ImQuotesLeft className="quote-icon" />
//                     &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Voluptas delectus modi voluptatibus. Veritatis molestias
//                     sint saepe! Reprehenderit deleniti consectetur suscipit. &nbsp;
//                 <ImQuotesRight className="quote-icon" />
//             </div>
//             <div className="testimonail-img-div">
//                 <img src={husanImg} alt="Husan" className="img-fluid" />
//             </div>
//         </div>
//     );
// }

export default Testimonail;