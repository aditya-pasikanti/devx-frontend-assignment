import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Footer from '../container/footer/Footer';
import Home from '../components/home/Home';
import Campus from '../components/campus/Campus';
import TechForward from '../components/techforward/TechForward';
import Connectivity from '../components/connectivity/Connectivity';
import InspirationalSpaces from '../components/inspirationalspaces/InspirationalSpaces';
import Sustainability from '../components/sustainability/Sustainability';
import BeyondWork from '../components/beyondwork/BeyondWork';
import Testimonals from '../components/testimonals/Testimonals';
import ContactUs from '../components/contactus/ContactUs';
import Events from '../components/events/Events';
import OtherDetails from '../components/otherdetails/OtherDetails';
import MediaCenter from '../components/mediacenter/MediaCenter';
import Brookfield from '../components/brookfield/Brookfield';
import TermsConditions from '../components/termsandconditions/TermsConditions';
import PrivacyPolicy from '../components/privacypolicy/PrivacyPolicy';


const PageRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/campus" element={<Campus />} />
                    <Route exact path="/connectivity" element={<Connectivity />} />
                    <Route exact path="/techforward" element={<TechForward />} />
                    <Route exact path="/inspirationalspaces" element={<InspirationalSpaces />} />
                    <Route exact path="/sustainability" element={<Sustainability />} />
                    <Route exact path="/beyondwork" element={<BeyondWork />} />
                    <Route exact path="/testimonals" element={<Testimonals />} />
                    <Route exact path="/contactus" element={<ContactUs />} />
                    <Route exact path="/events" element={<Events />} />
                    <Route exact path="/otherdetails" element={<OtherDetails />} />
                    <Route exact path="/mediacenter" element={<MediaCenter />} />
                    <Route exact path="/brookfield" element={<Brookfield />} />
                    <Route exact path="/termsandconditions" element={<TermsConditions />} />
                    <Route exact path="/privacyandpolicy" element={<PrivacyPolicy />} />
                </Routes>
                
                <Footer />
            </Router>
        </div>
    )
}

export default PageRoutes