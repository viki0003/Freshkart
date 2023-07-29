import { NavLink } from "react-router-dom";
import GoogleDownloadImg from "../../Assets/Images/googledownload.svg"
import './privacy.css'
const PrivacyPolicy = () => {
    return (
        <>
            <div className="row default-banner">
                <div className="ps-5 pe-5">
                    <div className="col-lg-12 google-btn">
                        <img src={GoogleDownloadImg} alt="Google Btn" />
                    </div>
                    <div className="col-lg-12">
                        <div className="page-title pb-4 ps-3 pe-2">
                            <h1>Privacy Policy | Freshkart App</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container default-container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="privacy-content">
                            <p>
                                At Freshkart, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Freshkart and how we use it.</p>

                            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                            <p>  Log Files</p>
                            <p>Freshkart follows a standard procedure of using log files. These files log visitors when they use app. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the app, tracking users' movement on the app, and gathering demographic information.
                            </p>
                            <p> Our Advertising Partners</p>
                            <p>  Some of advertisers in our app may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
                            </p>
                            <p> Google</p>
                            <p> <NavLink to="https://policies.google.com/technologies/ads">
                                https://policies.google.com/technologies/ads
                            </NavLink></p>
                            <p> Privacy Policies</p>
                            <p> You may consult this list to find the Privacy Policy for each of the advertising partners of Freshkart.</p>

                            <p> Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Beacons that are used in their respective advertisements and links that appear on Freshkart. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on this app or other apps or websites.
                            </p>
                            <p>  Note that Freshkart has no access to or control over these cookies that are used by third-party advertisers.
                            </p>
                            <p> Third Party Privacy Policies</p>
                            <p> Freshkart's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                            </p>
                            <p>  Children's Information</p>
                            <p> Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            </p>
                            <p>Freshkart does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our App, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                            </p>
                            <p> Online Privacy Policy Only</p>
                            <p> This Privacy Policy applies only to our online activities and is valid for visitors to our App with regards to the information that they shared and/or collect in Freshkart. This policy is not applicable to any information collected offline or via channels other than this app.
                            </p>
                            <p> Consent</p>
                            <p> By using our app, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default PrivacyPolicy