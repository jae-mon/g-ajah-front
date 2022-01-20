import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
/* Icons installed from https://icons.getbootstrap.com/ */


class Top extends React.Component {
    render() {
      return (
        <div id="first-section">
          <div id="logo">
              <h1>SDG</h1>
          </div>
          <div id="main-content">
              <h1 id="main-heading">Coming Soon</h1>
              <p id="main-text">SDG Health Education Mobile App aims to encourage people to adopt<br />
                  and sustain health promoting lifestyles and practices.</p>
              
              <div id="buttons">
                <p id="tiny-text">Coming Soon On</p>
                <Button type="button" id="button-google" className="btn btn-outline-secondary">
                <i class="bi bi-google" width="48" height="48"></i>
                  
                  <p className="store-text">Google Play</p>
                </Button>

                <Button type="button" id="button-apple" className="btn btn-outline-secondary">
                <i class="bi bi-apple" id="apple-icon"></i>
                
  
                  <p className="store-text">App Store</p>
                </Button>
              </div>
              
          </div>
      </div>
      );
    }
  }

// ========================================

ReactDOM.render(
    <Top />,
    document.getElementById('root')
  );
  