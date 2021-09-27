import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero';
import TypeOfCompany from "./components/TypeOfCompany"
import Process from './components/Process';
import RegistrationForm from "./components/RegistrationForm"
import PricingPage from './components/PricingPage';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Term from "./components/TermsCondition";
import Error404 from "./components/Error404";
import Counter from './components/Counter';
import IndividualCompany from './components/IndividualCompany';
import Refund from './components/Refund';
import Privacy from './components/Privacy';
import Disclaimer from './components/Disclaimer';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode >
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Hero />
            <TypeOfCompany />
            <Process />
            <RegistrationForm />
            <Counter />
            <PricingPage />
            {/* <DocReq /> */}
            <FAQ />
            <Footer />
          </Route>
          {/* toc */}
          <Route path="/Sole-Proprietor"><IndividualCompany name="Sole-Proprietor" /></Route>
          <Route path="/Partnership-Firm"><IndividualCompany name="Partnership-Firm" /></Route>
          <Route path="/Limited-Liability-Partnership"><IndividualCompany name="Limited-Liability-Partnership" /></Route>
          <Route path="/One-Person-Company"><IndividualCompany name="One-Person-Company" /></Route>
          <Route path="/Private-Limited-Company"><IndividualCompany name="Private-Limited-Company" /></Route>
          <Route path="/Public-Limited-Company"><IndividualCompany name="Public-Limited-Company" /></Route>
          {/* term */}
          <Route path="/Term-and-Conditions" component={Term} />
          <Route path="/Privacy-Policy" component={Privacy} />
          <Route path="/Refund-Policy" component={Refund} />
          <Route path="/Disclaimer" component={Disclaimer} />

          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>


  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*
thing to make
2 navbar highlight on scroll
4 write content in all section*
5 contact form*
7 launch
8 chat bot
*/
