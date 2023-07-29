import GoogleDownloadImg from "../../Assets/Images/googledownload.svg"
import '../PrivacyPolicy/privacy.css'
const Disclaimer = () => {
    return (
        <>
            <div className="row default-banner">
                <div className="ps-5 pe-5">
                    <div className="col-lg-12 google-btn">
                        <img src={GoogleDownloadImg} alt="Google Btn" />
                    </div>
                    <div className="col-lg-12">
                        <div className="page-title pb-4 ps-3 pe-2">
                            <h1>Disclaimer | Freshkart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container default-container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="privacy-content">
                            <p>
                                We are doing our best to prepare the content of this app. However, Freshkart cannot warranty the expressions and suggestions of the contents, as well as its accuracy. In addition, to the extent permitted by the law, Freshkart shall not be responsible for any losses and/or damages due to the usage of the information on our app.
                                By using our app, you hereby consent to our disclaimer and agree to its terms.</p>

                            <p>Any links contained in our app may lead to external sites are provided for convenience only. Any information or statements that appeared in these sites or app are not sponsored, endorsed, or otherwise approved by Freshkart. For these external sites, Freshkart cannot be held liable for the availability of, or the content located on or through it. Plus, any losses or damages occurred from using these contents or the internet generally.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Disclaimer