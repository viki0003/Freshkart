import { NavLink } from "react-router-dom";
import AppLogo from "../../Assets/Images/FreshkartLogo.svg"
import "../Header/header.css"
const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid d-flex align-items-center justify-content-between ps-5 pe-5">
                    <NavLink class="navbar-brand" href="#">
                        <img src={AppLogo} alt="logo" />

                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">
                                    <img src={AppLogo} alt="logo" />
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className="offcanvasNavs">
                                    <ul class="navbar-nav  d-flex flex-column mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <NavLink class="nav-link active" aria-current="page" href="#">Join the Waitlist</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" href="#">We Delivery</NavLink>
                                        </li>

                                        <li class="nav-item">
                                            <NavLink class="nav-link" href="#">How it Works</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" href="#">About Us</NavLink>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" href="#">Join the Waitlist</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" href="#">We Delivery</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink class="nav-link" href="#">How it Works</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" href="#">About Us</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header