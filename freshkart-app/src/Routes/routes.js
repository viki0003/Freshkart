import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from '../Components/Layout/layout';
import Home from '../Pages/Home';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicyApp';
import PrivacyPolicyWebsite from '../Pages/PrivacyPolicy/PrivacyPolicyWebsite';
import Disclaimer from '../Pages/Disclaimer';
import Freshkart from '../Pages/EULA';
import NewHome from '../Pages/NewHome';
import TermsConditions from '../Pages/Terms_and_conditions';



const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy-app" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy-website" element={<PrivacyPolicyWebsite />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path='/freshkart' element={<Freshkart />} />
          <Route path='/newhome' element={<NewHome />} />
          <Route path='/terms-and-conditions' element={<TermsConditions />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default Routing