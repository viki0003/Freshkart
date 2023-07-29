import GoogleDownloadImg from "../../Assets/Images/googledownload.svg"
import './eula.css'
const Eula = () => {
    return (
        <>
            <div className="row default-banner">
                <div className="ps-5 pe-5">
                    <div className="col-lg-12 google-btn">
                        <img src={GoogleDownloadImg} alt="Google Btn" />
                    </div>
                    <div className="col-lg-12">
                        <div className="page-title pb-4 ps-3 pe-2">
                            <h1>EULA | Freshkart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container default-container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="eula-content">
                            <p>
                                This End-User License Agreement ("EULA") is a legal agreement between you and Freshkart</p>

                            <p>
                                This EULA agreement governs your acquisition and use of our Freshkart app ("app") directly from Freshkart or indirectly through a Freshkart authorized reseller or distributor (a "Reseller").</p>

                            <p>
                                Please read this EULA agreement carefully before completing the installation process and using the Freshkart app. It provides a license to use the Freshkart app and contains warranty information and liability disclaimers.</p>

                            <p>
                                If you register for a free trial of the Freshkart app, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the Freshkart app, you are confirming your acceptance of the app and agreeing to become bound by the terms of this EULA agreement.</p>

                            <p>
                                If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the app, and you must not accept this EULA agreement.</p>

                            <p>
                                This EULA agreement shall apply only to the app supplied by Freshkart herewith regardless of whether other app is referred to or described herein. The terms also apply to any Freshkart updates, supplements, Internet-based services, and support services for the app, unless other terms accompany those items on delivery. If so, those terms apply.</p>

                            <p>
                                License Grant<br />
                                Freshkart hereby grants you a personal, non-transferable, non-exclusive licence to use the Freshkart app on your devices in accordance with the terms of this EULA agreement.</p>

                            <p>
                                You are permitted to load the Freshkart app under your control. You are responsible for ensuring your device meets the minimum requirements of the Freshkart app.</p>

                            <p>You are not permitted to:</p>

                            <p>Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the app nor permit the whole or any part of the app to be combined with or become incorporated in any other app, nor decompile, disassemble or reverse engineer the app or attempt to do any such things
                                Reproduce, copy, distribute, resell or otherwise use the app for any commercial purpose
                                Allow any third party to use the app on behalf of or for the benefit of any third party<br />
                                Use the app in any way which breaches any applicable local, national or international law<br />
                                use the app for any purpose that Freshkart considers is a breach of this EULA agreement<br />
                                Intellectual Property and Ownership<br />
                                Freshkart shall at all times retain ownership of the app as originally downloaded by you and all subsequent downloads of the app by you. The app (and the copyright, and other intellectual property rights of whatever nature in the app, including any modifications made thereto) are and shall remain the property of Freshkart.</p>

                            <p>Freshkart reserves the right to grant licences to use the app to third parties.</p>

                            <p>Termination<br />
                                This EULA agreement is effective from the date you first use the app and shall continue until terminated. You may terminate it at any time upon written notice to Freshkart.</p>

                            <p>It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the app. The provisions that by their nature continue and survive will survive any termination of this EULA agreement.<br/>
                                Governing Law<br />
                                This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of india
                            </p>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Eula