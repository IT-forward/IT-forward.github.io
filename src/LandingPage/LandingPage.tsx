import '../LandingPage/LandingPage.css';
import headerImg from './LandingPageImages/header-image.svg';
import featuresImg from './LandingPageImages/features-img.svg';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';

function LandingPage() {
    return (
        <div id="body">
            <nav id="nav-bg" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a href="" className="navbar-brand">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home-section">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#explore-head-section">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#create-head-section">Create</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#share-head-section">Share</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="row">
                <div className="col mt-5">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minima consequuntur eum, fugit sapiente eligendi!</p>
                </div>

                <div className="col mt-5">
                    <img src={headerImg} />
                </div>
            </div>
        </div>
    );









    // return (
    //     <div className="" id="body">
    //         <div className="" id="header">
    //             <div className="row" id="navbar">
    //                 <div className="col-md-6 col-sm-12">
    //                     <div className="" id="brand-logo">
    //                         Pay IT Forward
    //                     </div>
    //                 </div>
    //                 <div className="col-md-6 col-sm-12">
    //                     <ul className="nav justify-content-md-end" id="nav-links">
    //                         <li className="nav-item">
    //                             <a className="nav-link px-0" id="nav-anchor-1" href="#">Navigation 1</a>
    //                         </li>
    //                         <li className="nav-item">
    //                             <a className="nav-link px-0" id="nav-anchor-2" href="#">Navigation 2</a>
    //                         </li>
    //                         <li className="nav-item">
    //                             <a className="nav-link px-0" id="nav-anchor-3" href="#">Navigation 3</a>
    //                         </li>
    //                         <li className="nav-item">
    //                             <a className="nav-link px-0" id="nav-anchor-4" href="#">Navigation 4</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>

    //             <div id="description">
    //                 <div className="row">
    //                     <div className="col-md-6 col-sm-12" id='desc-text'>
    //                         <div>
    //                             <h1 id="desc-heading">
    //                                 Lorem ipsum dolor sit consectetur
    //                             </h1>
    //                         </div>

    //                         <div>
    //                             <p id="desc-paragraph">
    //                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                                 Impedit laudantium enim, quidem odio qui architecto suscipit
    //                             </p>
    //                         </div>
    //                     </div>

    //                     <div className="col-md-6 col-sm-12">
    //                         <img src={headerImg} alt="header image" id="desc-img" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <div id="features">
    //             <div className="row">
    //                 <div className="col-6" id="features-img">
    //                     <img src={featuresImg} alt="features image" />
    //                 </div>

    //                 <div className="col-6" id="features-text">
    //                     <h2>
    //                         We Provide Many Features You Can Use
    //                     </h2>

    //                     <p>
    //                         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //                         At quia nihil dolorem perferendis ab ad.
    //                     </p>

    //                     <ul className="list-unstyled">
    //                         <li><AiFillCheckCircle className="check-circle" /> feature 1</li>
    //                         <li><AiFillCheckCircle className="check-circle" /> feature 2</li>
    //                         <li><AiFillCheckCircle className="check-circle" /> feature 3</li>
    //                         <li><AiFillCheckCircle className="check-circle" /> feature 4</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="footer">
    //             <div className="row">
    //                 <div className="col-6" id="footer-cap">
    //                     Open Enterprise
    //                 </div>

    //                 <div className="col-6">
    //                     <ul className="list-unstyled my-0">
    //                         <li className="d-inline-block" id="footer-link-1">Documentation</li>
    //                         <li className="d-inline-block" id="footer-link-2">GitHub</li>
    //                         <li className="d-inline-block" id="footer-link-3">Twitter</li>
    //                         <li className="d-inline-block" id="footer-link-4">Contact us</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default LandingPage;