import './Testimonail.css';
import husanImg from '../memberImages/husan-img.jpg';

function Testimonail() {
    return (
        <div className="testimonail-div p-4">
            <div className="d-flex align-items-center">
                <img src={husanImg} alt="husan" />
                <div className="ml-4">
                    <h4 className="my-1">Husan Eshonqulov</h4>
                    <h5 className="my-1">Web Devoloper</h5>
                </div>
            </div>
            <p className="mt-2">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Vitae accusamus."
            </p>
        </div>
    );
}

export default Testimonail;