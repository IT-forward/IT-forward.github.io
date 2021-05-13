import '../LandingPage/LandingPage.css';
import headerImg from './LandingPageImages/header-image.svg';
import brandLogo from './LandingPageImages/Pay IT Forward logo.jpg';
import featuresImg from './LandingPageImages/features-img.svg';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';

function LandingPage() {
    return (
        <div id="body">
            <div id="header">
                <div className="container-xl">
                    <nav className="navbar navbar-expand-md sticky-top">

                        <a className="navbar-brand" id="brand-logo" href="#">
                            {/* <img src={brandLogo} className="img-fluid" id="brand-logo-img" /> */}
                            <span>Pay IT Forward</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <GoThreeBars />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                            <ul className="navbar-nav" id="nav-links">
                                <li className="nav-item">
                                    <a href="#" className="nav-link" id="nav-anchor-1">Navigation</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" id="nav-anchor-2">Navigation</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" id="nav-anchor-3">Navigation</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" id="nav-anchor-4">Navigation</a>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <div id="description">

                        <div className="row">
                            <div className="col-md-6">
                                <h1 id="desc-heading">Lorem ipsum dolor sit amet consectetur</h1>
                                <p id="desc-paragraph">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt non explicabo dolorum molestias
                                </p>
                                <button className="btn btn-lg btn-danger" id="desc-btn">Get Started</button>
                            </div>

                            <div className="col-md-6">
                                <img src={headerImg} className="img-fluid" alt="description" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div id="features">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={featuresImg} className="img-fluid" alt="feature image" />
                        </div>

                        <div className="col-md-6">
                            <div id="features-desc">
                                <h2>We Provide Many Features You Can Use</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi pariatur, animi facilis quas eius quia fuga totam!
                                </p>
                                <ul className="list-unstyled">
                                    <li><AiFillCheckCircle className="check-circle" />feature 1</li>
                                    <li><AiFillCheckCircle className="check-circle" />feature 2</li>
                                    <li><AiFillCheckCircle className="check-circle" />feature 3</li>
                                    <li><AiFillCheckCircle className="check-circle" />feature 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div id="footer-cap">Open Enterprise</div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 mt-3">
                                    <a href="#" id="footer-link-1" className="text-decoration-none">Docs</a>
                                </div>
                                <div className="col-xl-3 col-md-6 mt-3">
                                    <a href="#" id="footer-link-2" className="text-decoration-none">GitHub</a>
                                </div>
                                <div className="col-xl-3 col-md-6 mt-3">
                                    <a href="#" id="footer-link-3" className="text-decoration-none">Twitter</a>
                                </div>
                                <div className="col-xl-3 col-md-6 mt-3">
                                    <a href="#" id="footer-link-4" className="text-decoration-none">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );




    // return (
    //     <div className="" id="body">
    //         <div id="header">
    //             <div className="d-flex justify-content-between" id="navbar">
    //                 <div className="d-flex align-items-center" id="brand-logo">
    //                     Pay IT Forward
    //                 </div>
    //                 <ul className="nav justify-content-end" id="nav-links">
    //                     <li className="nav-item">
    //                         <a className="nav-link" id="nav-anchor-1" href="#">Navigation 1</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" id="nav-anchor-2" href="#">Navigation 2</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" id="nav-anchor-3" href="#">Navigation 3</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" id="nav-anchor-4" href="#">Navigation 4</a>
    //                     </li>
    //                 </ul>
    //             </div>

    //             <div id="description">
    //                 <div className="row">
    //                     <div className="col-6" id='desc-text'>
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

    //                     <div className="col-6" id="desc-img">
    //                         <img src={headerImg} alt="header image" />
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