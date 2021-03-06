import React, { Component } from 'react';
import './css/Header.css';
import  dwicon from './img/Logodw.png';
import boy from './img/man1.png';
import {Redirect} from 'react-router';

class Header extends Component {

  constructor(){
    super()
    this.logoutHandle = this.logoutHandle.bind(this);
    this.state = {
      toLogin: false
    }
  }

  logoutHandle(){
    localStorage.removeItem('token')
    console.log(localStorage.getItem('token'));
    this.setState({toLogin: true})
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
          <div className="headsilab fixed-top bg-light">
            <header className="Hom-header bg-light">
                <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height: '64px'}}>
                  <a className="brand" href="/">
                    <img alt="" className="imgbran" src={dwicon}/>
                  </a> 
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown" style={{marginLeft: '200px', width: '75px'}}>
                      <span className="nav-link togldrpdn" href="#" id="navbardrop" data-toggle="dropdown">
                        <img src={boy} alt="" className="rounded-circle img-fluid imgboy"/>
                      </span>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/profile">Profile</a>
                        <span onClick={this.logoutHandle} style={{cursor: 'pointer', fontSize: '15px'}} className="dropdown-item">Logout</span>
                      </div>
                    </li>
                  </ul>
                </nav>
            </header>
          </div>
        </div>
        <div className="d-sm-none d-md-none d-lg-none d-xl-none">

          <div className="headland fixed-top bg-light">
            <header className="Hom-header bg-light">
                <nav className="container navbar navbar-light navbar-expand-sm navbar-toggleable-sm fixed-top bg-light" style={{height:"80px"}}>
                  <a className="brand" href="/">
                  <img alt="" className="img-fluid imgbran" src={dwicon}/>
                  </a>

                  {/* <!-- Toggler/collapsibe Button --> */}
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse bg-light navbar-collapse bg-light colap" id="collapsibleNavbar" >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a href='/profile' className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                      <span onClick={this.logoutHandle} style={{cursor: 'pointer'}} className="nav-link active">Logout</span>
                    </li>
                  </ul>
                </div> 
                </nav>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
