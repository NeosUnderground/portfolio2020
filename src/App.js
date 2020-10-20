import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './Components/Nav/nav'
import HomePage from './Components/Home_Page/home_page'
import ContactPage from './Components/Contact_Page/contact_page'
import ResumePage from './Components/Resume_Page/resume_page'
import ServicesPage from './Components/Services_Page/services_page'
import Footer from './Components/Footer/footer'
import ScrollToTop from './Components/ScrollToTop'
import AOS from 'aos'

import './App.css';

  class App extends Component {
  
    
    componentDidMount(){
      AOS.init({
        offset: 200,
        duration: 1200,
        easing: 'ease-in-sine',
        delay: 200,
      })
    }

    
  

  render(){

    let samt = 0;
      window.addEventListener('scroll', function() {
      samt <= 10 ? samt++ : AOS.refresh();
      });
 
    return(
      <Router  basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
          <div className="App">
            <Nav/>
              <Switch>
                <HomePage path='/' exact component={HomePage}/>
                <ServicesPage path='/Services' component={ServicesPage}/>
                <ResumePage path='/Resume' component={ResumePage}/>
                <ContactPage path='/Contact' component={ContactPage}/>
              </Switch>        
            <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
