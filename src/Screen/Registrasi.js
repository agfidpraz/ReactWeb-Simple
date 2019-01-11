import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Register.css';
import ReactDOM from 'react-dom';
import { ReCaptcha } from 'react-recaptcha-google'
import Header from './Headereg.js';
import Footer from './Footer.js';
import {Link,Redirect,withRouter} from 'react-router-dom'
import Home from './Home';
class registrasi extends Component{
  constructor(props){
    super(props)
    this.registerhandle = this.registerhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLoadReecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
        isverified: false,
        name:'',
        email:'',
        password: '',
        alamat:'',
        no:'',
        usia:'',
        Skill:'',
        asal:'',

    }
  }
      handleChange(event) {
        this.setState({name: event.target.value});
      }

      // startregister(){

      // }
      registerhandle(){
        if(this.state.isverified){
          this.props.history.push("/Dashboard");

          
        }else{

          // alert('Please Proof You Are Human')
       //   this.props.history.push("/Hack");

           alert('Please Proof You Are Human')
        //alert(this.state.name);
        }
      }
      componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
      }
      onLoadRecaptcha() {
          if (this.captchaDemo) {
              this.captchaDemo.reset();
          }
      }
      verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        //console.log(recaptchaToken, "<= your recaptcha token")
        if(recaptchaToken){
          this.setState({
            isverified: true
          })
        }
      }
      
      render(){
        
          return(
            <div>
            <Header/>
        <body>
          <div>
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Arkademian</p>
                        <button className="btn btn-light">LOGIN</button><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Register Bootcamp</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                          <input type="text" class="form-control" placeholder="Skill *" value="" />
                                        </div>
                                        <div class="form-group">
                                          <input type="text" class="form-control" placeholder="Asal Sekolah *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked/>
                                                    <span> Male </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"/>
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                          <label>Uploud KTP/Kartu Identitas</label>
                                          <div>
                                          <input type="file" placeholder="Asal Sekolah" className="form-control-file border"></input><br/>
                                          </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Phone *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Age *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Last Education</option>
                                                <option>SD</option>
                                                <option>SMP</option>
                                                <option>SMA/SMK</option>
                                                <option>D3</option>
                                                <option>S1</option>
                                                <option>S2</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <textarea type="text" class="form-control" placeholder="Address *" value="" />
                                        </div>
                                        <div>
                                      {/* You can replace captchaDemo with any ref word */}
                                      <ReCaptcha
                                        ref={(el) => {this.captchaDemo = el;}}
                                        size="normal"
                                        data-theme="dark"            
                                        render="explicit"
                                        sitekey="6LfQR4IUAAAAAFPioJtlx1v2GeVJJ8_cRrLaa4Ww"
                                        onloadCallback={this.onLoadRecaptcha}
                                        verifyCallback={this.verifyCallback}
                                      />
                                      </div>
                                      <div>
                                      <label>               
                                        <input type="checkbox"></input>
                                        Saya Menyutujui   
                                        <a href="/"> Syarat Dan Ketentuan</a>
                                      </label>
                                      </div> 
                                        <button class="btn btn-primary btnRegister" >Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </body>
       <Footer/>
      </div>
          );
      }
}
export default registrasi;