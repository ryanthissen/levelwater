import React, { Component } from 'react';
import './App.css';
import NavbarHome from './components/nav/navbar-home';
import MainImage from './components/home/main-image';
import About from './components/home/about';
import SupportImage from './components/home/support-image';
import Details from './components/home/details';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import FormNavbar from './components/forms/navbar/form-navbar';
import BasicInfoForm from './components/forms/basic-info/basic-info-form';
import RevenueCostsForm from './components/forms/revenue-costs/revenue-costs-form';
import StorageForm from './components/forms/storage/storage-form';
import PumpingDistForm from './components/forms/pumping-dist/pumping-dist-form';
import Dashboard from './components/dashboard/dashboard';

import TreatmentForm from './components/forms/treatment/treatment-form';
import SourceForm from './components/forms/source/source-form';
import FormFooter from './components/forms/form-footer/form-footer';
import Manage from './components/manage/manage';
import OauthRedirect from './components/home/oauth-redirect';




import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" component={OauthRedirect} />
        <Route exact path="/" component={NavbarHome} />
        <Route exact path="/" component={MainImage} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={SupportImage} />
        <Route exact path="/" component={Details} />

        <Route exact path="/login" component={NavbarHome} />
        <Route exact path="/login" component={MainImage} />
        <Route exact path="/login" component={About} />
        <Route exact path="/login" component={SupportImage} />
        <Route exact path="/login" component={Details} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/signup" component={NavbarHome} />
        <Route exact path="/signup" component={MainImage} />
        <Route exact path="/signup" component={About} />
        <Route exact path="/signup" component={SupportImage} />
        <Route exact path="/signup" component={Details} />
        <Route exact path="/signup" component={Signup} />



        <Route exact path="/signup/step1" component={FormNavbar}  />
        <Route exact path="/signup/step1" component={BasicInfoForm}  />
        <Route exact path="/signup/step1" component={FormFooter}  />

        <Route exact path="/signup/step2" component={FormNavbar} />
        <Route exact path="/signup/step2" component={RevenueCostsForm} />
        <Route exact path="/signup/step2" component={FormFooter}  />

        <Route exact path="/signup/step3" component={FormNavbar} />
        <Route exact path="/signup/step3" component={SourceForm} />
        <Route exact path="/signup/step3" component={FormFooter}  />



        <Route exact path="/signup/step4" component={FormNavbar} />
        <Route exact path="/signup/step4" component={TreatmentForm} />
        <Route exact path="/signup/step4" component={FormFooter}  />

        <Route exact path="/signup/step5" component={FormNavbar} />
        <Route exact path="/signup/step5" component={StorageForm} />
        <Route exact path="/signup/step5" component={FormFooter}  />

        <Route exact path="/signup/step6" component={FormNavbar} />
        <Route exact path="/signup/step6" component={PumpingDistForm} />
        <Route exact path="/signup/step6" component={FormFooter}  />

        <Route path="/dashboard" component={FormNavbar} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard" component={FormFooter} />

        <Route exact path="/manage" component={FormNavbar} />
        <Route exact path="/manage" component={Manage} />
        <Route exact path="/manage" component={FormFooter} />



        <Route exact path="/" component={Footer} />
      </div>
    </Router>
    );
  }
}

export default App;
