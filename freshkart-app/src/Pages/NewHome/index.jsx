import GoogleDownloadImg from "../../Assets/Images/googledownload.svg"
import fourth_banner from '../../Assets/Images/fourth_banner.svg'
import g12 from '../../Assets/Images/g12.svg'
import g15 from '../../Assets/Images/g15.svg'
import "./new_home.css"

const NewHome = () => {
    return (
        <>
            <div className="container">
                <div className="row home-banner align-items-center">
                    <div className="col-lg-6">
                        <div className="home-banner-content">
                            <p>Your daily dose of fresh fruits, veggies & groceries, </p>
                            <h1>delivered at your doorstep.</h1>
                            <img src={GoogleDownloadImg} alt="Google Btn" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={g15} alt="Home Banner" className="w-100" />
                    </div>
                </div>
            </div>
            <div className="home-hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-section-text">
                                <p>It takes us</p>
                                <h2><span>5 mins</span> to reach you</h2>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img src={g12} alt="vechile" className="w-100" />
                        </div>
                        <div className="col-lg-4">

                            <div className="location-list">
                                <ul>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            Gurgaon</div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            Noida</div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            Delhi</div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            Ghaziabad</div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            Faridabad</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-5">
                            <img src={HeroImage} alt="vechile" className="w-100" />
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="img_section">
                <img src={fourth_banner} alt="Home Banner" className="w-100" />

            </div>


            <div className="">

                <div className="footer-app-bg">
                    <div className="card_spacing">
                        <div className="card_decoration">
                            <h2 className="text_decoration text-center">Join the Waitlist</h2>
                            <p className="text_decoration_paragraph text-start ">Get early access to our app before everyone else, and special offers for early adopters.*</p>
                            <p className="text_decoration_paragraph text-center paragraph_content">How can we reach you?</p>
                            <div className="input-decoration">
                                <input type="text" placeholder="Email/Phone" className="text-center" />
                            </div>
                            <div className="button">
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewHome