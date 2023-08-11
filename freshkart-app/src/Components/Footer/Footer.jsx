import { NavLink } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <hr />
                <div className="d-flex align-items-center gap-2 justify-content-center">
                    <span className="footer-links">
                        <NavLink to="/terms-and-conditions"> Terms & Conditions</NavLink>
                    </span>
                    <span>|</span>
                    <span className="footer-links">
                        <NavLink to="/privacy-policy-app"> Privacy Policy </NavLink>
                    </span>
                    <span>|</span>
                    <span className="footer-links">
                        <NavLink to="/eula-agreement"> EULA Agreement </NavLink>
                    </span>
                </div>
                <div className="copyright-text mt-2 text-center">

                    (c) . Freshkart Pvt, Ltd. 2023
                </div>
            </footer>
        </>
    );
};

export default Footer