import { NavLink } from "react-router-dom";
import AppLogo from "../../Assets/Images/FreshkartLogo.svg"
import "../Header/header.css"
const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid d-flex align-items-center justify-content-between ps-5 pe-5">
                    <NavLink class="navbar-brand" to="/">
                        <img src={AppLogo} alt="logo" />

                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">
                                    <img src={AppLogo} alt="logo" />
                                </h5>

                            </div>

                        </div>

                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header