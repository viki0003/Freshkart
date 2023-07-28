import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <hr />
                <div className="d-flex align-items-center gap-2 justify-content-center">
                    <span className="footer-links">
                        <NavLink> Terms & Conditions</NavLink>
                    </span>
                    <span>|</span>
                    <span className="footer-links">
                        <NavLink>  Privacy Policy </NavLink>
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