import React, { Component } from 'react';
import Header from './HeaderPage';
import './css/ProfileFilled.css';
import './css/button.css';
import upload from './img/upload.png';
import link from './img/link.png';
import projects from './img/projects.png';
import DropboxChooser from 'react-dropbox-chooser';
import {RadioGroup,Radio} from 'react-radio-group';
import {store} from '../store';
import axios from 'axios';
import './css/Register.css';

// DropBox Key for Upload
const APP_KEY = 'jni8bfvqjntw35s';

class ProfileFilled extends Component {
    constructor(props){
        super(props)
        this.finishhandle = this.finishhandle.bind(this);
        this.educationhandle = this.educationhandle.bind(this);
        this.workhandle = this.workhandle.bind(this);
        this.projecthandle = this.projecthandle.bind(this);
        this.addSkills = this.addSkills.bind(this);
        this.btnAdddesign = this.btnAdddesign.bind(this);
        this.btnAddfront = this.btnAddfront.bind(this);
        this.btnAddback = this.btnAddback.bind(this);
        this.btnAddweb = this.btnAddweb.bind(this);
        this.btnAddmobile = this.btnAddmobile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.upload = this.upload.bind(this)
        this.onSuccess = this.onSuccess.bind(this);
        this.handlearrayproject = this.handlearrayproject.bind(this);
        this.state = {
            isverified: false,
            fullname:'',
            email:'',
            telpnumber:'',
            adress:'',
            summary:'',
            emailValid: true,
            ressjson:'',
            checked: false,
            selectedValue: '',
            sekolah: '',
            study: '', 
            jurusan: '',
            gelar: '',
            perusahaan: '',
            industri: '',
            title: '',
            description: '',
            namaproject: '',
            projecturl: '',
            descproject: '',
            image:null,
            files: '',
            addSkill: '',
            skills: [],
            work_experience: [],
            monthFrWrk: '',
            yearFrWrk: '',
            monthToWrk: '',
            yearToWrk: '',
            monthFrEdu: '',
            yearFrEdu: '',
            monthToEdu: '',
            yearToEdu: '',
            educations: [],
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3333/skills', { 'headers': { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}} )
        .then(res=>{
            this.setState({skills:res.data.data})
            console.log(this.state.skills)
        })
        axios.get('http://localhost:3333/work_experiences', { 'headers': { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}} )
        .then(ress=>{
            this.setState({work_experience:ress.data.data})
            console.log(this.state.work_experience)
        })
        axios.get('http://localhost:3333/educations', { 'headers': { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}} )
        .then(ressp=>{
            this.setState({educations:ressp.data.data})
            console.log(this.state.educations)
        })
    }
    setGender(event) {
        console.log(event.target.value);
    }
    onSuccess(value){
        this.setState({files: value});
        console.log(this.state.files);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    finishhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
            alert('Silakan masukkan email yang valid')
        }else if(this.state.fullname === ""){
            alert("Silakan masukkan nama lengkap anda");
        }else if(this.state.email === ""){
            alert("Silakan masukkan email anda");
        }else if(this.state.telpnumber === ""){
            alert("Silakan masukkan nomor telepon anda");
        }else if(this.state.adress === ""){
            alert("Silakan masukkan alamat anda");
        }else if(this.state.summary === ""){
            alert("Silakan masukkan summary anda");
        }
        else{
            //init POST AXIOS
            const fullname = this.state.fullname;
            const email = this.state.email;
            const telpnumber = this.state.telpnumber;
            const adress = this.state.adress;
            const summary = this.state.summary;
            const body={
                fullname,
                email,
                telpnumber,
                adress,
                summary
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }        
        
    }

    handlearrayproject(){
        var id="1"; 
        var projectname="Aplikasi Kopi Kenangan";
        var projecturl="";
        var projectdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada aliquet urna. Etiam non malesuada magna. Quisque eget velit sit amet mauris facilisis lacinia. Fusce mattis enim sem, sed pulvinar lectus condimentum sit amet.";
            
        var id="2"; 
        var projectname="Aplikasi DumbWays";
        var projecturl=""; 
        var projectdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada aliquet urna. Etiam non malesuada magna. Quisque eget velit sit amet mauris facilisis lacinia. Fusce mattis enim sem, sed pulvinar lectus condimentum sit amet.";
            var newProject = [
                id,projectname,projecturl,projectdesc 
            ]
            this.setState({
                arrayproject: [...this.setState.arrayproject.newProject]
            })
        }


    handleChecked(){
        this.setState({
            checked: true
        })
    }
    fileUploadHandler = () => {
        if (this.state.image) {
          console.log(this.state.image, this.props.userId);
          const fd = new FormData();
          fd.append('avatar', this.state.image, this.state.image.name);
          this.props.addAvatar({ avatar: fd, userId: this.props.userId });
        }
    };
    fileSelectHandler = (e) => {
        this.setState({
          image: e.target.files[0],
        });
    };
    handleValue(value) {
        this.setState({selectedValue: value});
        console.log(this.state.selectedValue);
    }
    upload() {
        document.getElementById("selectImage").click()
    }

    educationhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.sekolah === "") {
            alert('Silakan masukkan sekolah anda')
        }else if(this.state.study === ""){
            alert("Silakan masukkan bidang study anda");
        }else if(this.state.jurusan === ""){
            alert("Silakan masukkan jurusan anda");
        }else if(this.state.degree === ""){
            alert("Silakan masukkan degree anda");
        }
        else{
            //init POST AXIOS
            const user_id = 1;
            const school_name = this.state.sekolah;
            const field = this.state.study;
            const degree = this.state.degree;
            const from = this.state.yearFrEdu + '-' + this.state.monthFrEdu + '-' + '17';
            const to = this.state.yearToEdu + '-' + this.state.monthToEdu + '-' + '17';
            const body={
                user_id,
                degree,
                school_name,
                field,
                from,
                to
            }
            axios.post('http://localhost:3333/education',body, { 'headers': { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}}).then(rees=>{
                console.log(rees)
                // this.setState({ressjson:ress})
            })
        }
    }

    workhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.perusahaan === "") {
            alert('Silakan masukkan perusahaan pekerjaan anda')
        }else if(this.state.industri === ""){
            alert("Silakan masukkan industri pekerjaan anda");
        }else if(this.state.title === ""){
            alert("Silakan masukkan title pekerjaan anda");
        }else if(this.state.description === ""){
            alert("Silakan masukkan deskripsi pekerjaan anda");
        }
        else{
            //init POST AXIOS
            const user_id = 1;
            const company_name = this.state.title;
            const work_description = this.state.description;
            const from = this.state.yearFrWrk + '-' + this.state.monthFrWrk + '-' + '17';
            const to = this.state.yearToWrk + '-' + this.state.monthToWrk + '-' + '17';
            const body={
                user_id,
                company_name,
                work_description,
                from,
                to
            }
            axios.post('http://localhost:3333/work_experience', body, { 'headers': { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}}).then(resp=>{
                console.log(resp);
            })
        }
    }

    projecthandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.namaproject === "") {
            alert('Silakan masukkan nama project anda')
        }else if(this.state.projecturl === ""){
            alert("Silakan masukkan project url anda");
        }else if(this.state.descproject === ""){
            alert("Silakan masukkan description project anda");
        }
        else{
            //init POST AXIOS
            const namaproject = this.state.namaproject;
            const projecturl = this.state.projecturl;
            const descproject = this.state.descproject;
            const body={
                namaproject,
                projecturl,
                descproject
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }
    }
    addSkills(){
        //check all is ok
        if (this.state.addSkill === "") {
            alert('Silakan masukkan Skill anda')
        }
        else{
            //init POST AXIOS
            const name = this.state.addSkill;
            const user_id = 1;
            const body={
                name,
                user_id
            }
            axios.post('http://localhost:3333/skill', body, { 'headers': { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}}).then(resss=>{
                console.log(resss)
            });
        }
    }
    btnAdddesign(value){
        this.setState({addSkill: 'Design'})
    }
    btnAddfront(value){
        this.setState({addSkill: 'Front End'})
    }
    btnAddweb(value){
        this.setState({addSkill: 'Web Dev'})
    }
    btnAddback(value){
        this.setState({addSkill: 'Back End'})
    }
    btnAddmobile(value){
        this.setState({addSkill: 'Mobile Dev'})
    }
    moveLogin(){
        this.props.history.push("/");
    }

    render() {
      return (
    <div>
        <Header/>
        <body>
            <div className="pgpro">
                <div className="container">
                    <div className="text-title">
                        <div className="text-center bootcamp" style={{padding:'75px 0 0 0'}}>
                            <h1 className="joinbootcamp">
                                Terimakasih telah mengikuti bootcamp online ini
                            </h1>
                            <p className="profilebootcamp">
                                Silakan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="container section">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="persegiprofile">
                                    <div className="row" style={{marginBottom:'30px'}}>
                                        <p className="col-1 parttext">Profil</p>
                                        <p className="col-12 required">
                                            <span className="star">
                                            *</span>required
                                        </p>
                                    </div>
                                        <form>
                                            <div>
                                                <input type="text" name="fullname" 
                                                onChange={this.handleChange} value={this.state.fullname} required=""/>
                                                <label>Nama Lengkap</label>
                                            </div>
                                            <div>
                                                <input type="text" name="email" 
                                                onChange={this.handleChange} value={this.state.email} required=""/>
                                                <label>Email</label>
                                            </div>
                                            <div>
                                                <input type="text" name="telpnumber" 
                                                onChange={this.handleChange} value={this.state.telpnumber} required=""/>
                                                <label>Nomor Ponsel</label>
                                            </div>
                                            <div>
                                                <input type="text" name="adress" 
                                                onChange={this.handleChange} value={this.state.adress} required=""/>
                                                <label>Alamat</label>
                                            </div>
                                            <span style={{margin:'20px 0px 20px 20px'}}>
                                                <p className="gender">Gender</p>
                                                <span className="row">
                                                    <span className="col-xl-2 col-lg-2 col-md-2 text-left">
                                                        <label className="radio d-inline-flex rdobtn">Male
                                                            <input type="radio" value="male" name="gender"/>
                                                            <span className="checkround"></span>
                                                        </label>
                                                    </span>
                                                    <span className="col-xl-2 col-lg-2 col-md-2 text-left">
                                                        <label className="radio d-inline-flex rdobtn">Female
                                                            <input type="radio" value="male" name="gender"/>
                                                            <span className="checkround"></span>
                                                        </label>
                                                    </span>
                                                </span>
                                            </span>
                                            <div style={{padding:'0px 0px 20px 20px'}}>
                                                <p className="dateofbirth">Tanggal Lahir</p>
                                                    <div className="row">
                                                        <div className="col-sm-3 col-md-2">
                                                            <p className="datebirth" style={{marginLeft:'-20px'}}>
                                                                Date
                                                            </p>
                                                            <br/>
                                                        </div>
                                                        <div className="col-sm-3 col-md-2">
                                                            <p className="datebirth" style={{marginLeft:'52px'}}>
                                                                Month
                                                            </p>
                                                            <br/>
                                                        </div>
                                                        <div className="col-sm-3 col-md-2">
                                                            <p className="datebirth" style={{marginLeft:'130px'}}>
                                                                Years
                                                            </p>
                                                            <br/>
                                                        </div>
                                                    </div>
                                                        <div className="row">
                                                            <select name="date" className="col-1 custom-select col-sm-2 optdate"
                                                            style={{textAlign:'left'}}>
                                                                <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                <option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option>
                                                                <option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option>
                                                                <option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option>
                                                                <option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option>
                                                                <option value="31">31</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'142px', fontSize:'24px'}}></span>
                                                            
                                                            <select name="month" className="col-1 custom-select col-sm-2 optdate"
                                                            style={{textAlign:'left'}}>
                                                                <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                <option value="11">11</option><option value="12">12</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'380px', fontSize:'24px'}}></span>

                                                            <select name="year" className="col-1 custom-select col-sm-2 optdate"
                                                            style={{textAlign:'left'}}>
                                                                <option value="2005" selected>2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option>
                                                                <option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option>
                                                                <option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option>
                                                                <option value="1989">1989</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1985">1985</option>
                                                                <option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'618px', fontSize:'24px'}}></span>
                                                        </div>
                                                    </div>
                                                <br/>
                                            <div>
                                                <input type="text" name="summary" 
                                                onChange={this.handleChange} value={this.state.summary} required=""/>
                                                <label>Summary</label>
                                            </div>
                                        </form>
                                            
                                            <br/>
                                        <div className="row">
                                            <p className="col-5 parttext">Riwayat Pendidikan</p>
                                            <p className="col-12 required">
                                                <span className="star">
                                                *
                                                </span>
                                                required
                                            </p>
                                        </div>
                                        <div>
                                            <br/>
                                            <button type="button" className="btndngr btn btn-outline btn-lg btn-block btnpendidikan" data-toggle="collapse" data-target="#addeducation"
                                            >+ Tambah Pendidikan</button>
                                        </div>
                                        <br/>  
                                        <div>
                                            <form>
                                                <div id="addeducation" className="collapse" style={{margin:'0 40px 0 40px'}}>
                                                    <p className="titleadd">Tambah Pendidikan</p>
                                                    <br/>
                                                    <div>
                                                        <input type="text" name="sekolah" 
                                                        onChange={this.handleChange} value={this.state.sekolah} required=""/>
                                                        <label>Sekolah</label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="study" 
                                                        onChange={this.handleChange} value={this.state.study} required=""/>
                                                        <label>Bidang Study</label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="jurusan" 
                                                        onChange={this.handleChange} value={this.state.jurusan} required=""/>
                                                        <label>Jurusan</label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="degree" 
                                                        onChange={this.handleChange} value={this.state.degree} required=""/>
                                                        <label>Degree</label>
                                                    </div>
                                                    <div style={{padding:'20px 0px 20px 20px'}}>
                                                        <p className="from">From</p>
                                                        <div className="row">
                                                            <div className="col-sm-3 col-md-2">
                                                                <p className="fromfrom" style={{marginLeft:'-20px'}}>
                                                                    Month
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 col-md-2"
                                                            style={{marginLeft:'-5px'}}>
                                                                <p className="fromfrom" style={{marginLeft:'52px'}}>
                                                                    Years
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{marginLeft:'125px'}}>
                                                            <div className="col-sm-3 col-md-1">
                                                                <p className="until">
                                                                    To
                                                                </p>
                                                                <i className="fa fa-long-arrow-right arrowright"></i>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{marginLeft:'20px'}}>
                                                            <div className="col-sm-3 col-md-2"
                                                            style={{marginTop:'-30px', marginLeft:'100px'}}>
                                                                <p className="fromto">
                                                                    Month
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 col-md-2"
                                                            style={{marginTop:'-30px', marginLeft:'72px'}}>
                                                                <p className="fromto">
                                                                    Years
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row drpdndt">
                                                            <select name="monthFrEdu" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate">
                                                                <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                <option value="11">11</option><option value="12">12</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'122px', fontSize:'24px'}}></span>

                                                            <select name="yearFrEdu" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate">
                                                                <option value="2019" selected>2019</option>
                                                                <option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
                                                                <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
                                                                <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
                                                                <option value="2002">2002</option><option value="2001">2001</option>
                                                                <option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option>
                                                                <option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'345px', fontSize:'24px'}}></span>

                                                            <select name="monthToEdu" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate" style={{marginLeft: '0px'}}>
                                                                <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                <option value="11">11</option><option value="12">12</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'787px', fontSize:'24px'}}></span>

                                                            <select name="yearToEdu" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate" style={{marginLeft:'-15px'}}>
                                                                <option value="2019" selected>2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
                                                                <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
                                                                <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
                                                                <option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'577px', fontSize:'24px'}}></span>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="d-flex justify-content-end divbtncando">
                                                        <a href="#"><span className="btncel btn btn-lg btnbatal">Batal</span></a>  
                                                        <span ><button className="btnsel btn btn-lg btnselesai"
                                                        onClick={this.educationhandle}>Selesai</button></span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <ul className="timeline">
                                                    {this.state.educations && this.state.educations.map((edu, key) => 
                                                        <li key={key}>
                                                            <div className="row" >
                                                                <div className="col-4" style={{marginLeft:'40px'}}>
                                                                    <div className="col-3"></div>
                                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                                    {edu.school_name}
                                                                    </p>
                                                                </div>
                                                                <div className="col-7">
                                                                    <p className="dateright">
                                                                        {formatDate(edu.from)} - {formatDate(edu.to)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="container" style={{marginLeft:'25px'}}>
                                                                <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                                    {edu.degree}
                                                                </p>
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="row">
                                                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                                                <span className="pull-left fmbm">
                                                                                    Field Of Study
                                                                                </span>
                                                                            </div>
                                                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                                                <span className="pull-left fmbmb">
                                                                                    {edu.field}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 d-sm-12 col-xs-12">
                                                                        <div className="row">
                                                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                                                <span className="pull-left fmbm">
                                                                                    Major
                                                                                </span>
                                                                            </div>
                                                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                                                <span className="pull-left fmbmb">
                                                                                    Multimedia
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Responsive Pendidikan */}
                                        <div className="d-sm-none d-md-none d-lg-none d-xl-none">
                                            <div className="row" style={{marginTop:'15px'}}>
                                            {this.state.educations && this.state.educations.map((edu, key) => 
                                                <span className="col-xs-12 schol" key={key}>
                                                    <div className="col-3"></div>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        {edu.school_name}
                                                    </p>
                                                    <span className="dateright">
                                                        {formatDate(edu.from)} - {formatDate(edu.to)}
                                                    </span>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        {edu.degree}
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                    <span className="pull-left fmbm">
                                                                        Field Of Study
                                                                    </span>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                    <span className="pull-left fmbmb">
                                                                        {edu.field}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 d-sm-12 col-xs-12">
                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                    <span className="pull-left fmbm">
                                                                        Major
                                                                    </span>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                    <span className="pull-left fmbmb">
                                                                        Multimedia
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>)}
                                            </div>
                                        </div>

                                        <br/>
                                        <div>
                                            <br/>
                                            <p className="parttext">Pengalaman Kerja</p>
                                            <br/>
                                            <button type="button" className="btndngr btn btn-outline-danger btn-lg btn-block btnpengalaman" data-toggle="collapse" data-target="#addworkexperience"
                                            >+ Tambah Pengalaman Kerja</button>
                                        </div>
                                        <br/>
                                        <div>
                                            <form>
                                                <div id="addworkexperience" className="collapse" style={{margin:'0 40px 0 40px'}}>
                                                    <p className="titleadd">Tambah Pengalaman</p>
                                                    <br/>
                                                    <div>
                                                        <input type="text" name="perusahaan" 
                                                        onChange={this.handleChange} value={this.state.perusahaan} required=""/>
                                                        <label>Perusahaan</label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="industri" 
                                                        onChange={this.handleChange} value={this.state.industri} required=""/>
                                                        <label>Industri</label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="title" 
                                                        onChange={this.handleChange} value={this.state.title} required=""/>
                                                        <label>Title</label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="description" 
                                                        onChange={this.handleChange} value={this.state.description} required=""/>
                                                        <label>Description</label>
                                                    </div>
                                                    <div style={{padding:'20px 0px 20px 20px'}}>
                                                        <p className="from">From</p>
                                                        <div className="row">
                                                            <div className="col-sm-3 col-md-2">
                                                                <p className="fromfrom" style={{marginLeft:'-20px'}}>
                                                                    Month
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 col-md-2"
                                                            style={{marginLeft:'-5px'}}>
                                                                <p className="fromfrom" style={{marginLeft:'52px'}}>
                                                                    Years
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{marginLeft:'125px'}}>
                                                            <div className="col-sm-3 col-md-1">
                                                                <p className="until">
                                                                    To
                                                                </p>
                                                                <i className="fa fa-long-arrow-right arrowright"></i>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{marginLeft:'20px'}}>
                                                            <div className="col-sm-3 col-md-2"
                                                            style={{marginTop:'-30px', marginLeft:'100px'}}>
                                                                <p className="fromto">
                                                                    Month
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 col-md-2"
                                                            style={{marginTop:'-30px', marginLeft:'72px'}}>
                                                                <p className="fromto">
                                                                    Years
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row drpdndt">
                                                            <select name="monthFrWrk" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate">
                                                                <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                <option value="11">11</option><option value="12">12</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'122px', fontSize:'24px'}}></span>

                                                            <select name="yearFrWrk" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate">
                                                                <option value="2019" selected>2019</option>
                                                                <option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
                                                                <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
                                                                <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
                                                                <option value="2002">2002</option><option value="2001">2001</option>
                                                                <option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option>
                                                                <option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'345px', fontSize:'24px'}}></span>

                                                            <select name="monthToWrk" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate" style={{marginLeft: '0px'}}>
                                                                <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                <option value="11">11</option><option value="12">12</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'787px', fontSize:'24px'}}></span>

                                                            <select name="yearToWrk" onChange={this.handleChange} className="col-1 custom-select col-sm-2 optdate" style={{marginLeft:'-15px'}}>
                                                                <option value="2019" selected>2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
                                                                <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
                                                                <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
                                                                <option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option>
                                                            </select>
                                                            <span className="fa fa-sort-desc"
                                                            style={{color:'darkgrey', position:'absolute', marginLeft:'577px', fontSize:'24px'}}></span>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="d-flex justify-content-end divbtncando">
                                                        <a href="#"><span className="btncel btn btn-lg btnbatal">Batal</span></a>  
                                                        <span><button className="btnsel btn btn-lg btnselesai" 
                                                        onClick={this.workhandle}>Selesai</button></span>  
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <ul className="timeline">
                                                    {this.state.work_experience && this.state.work_experience.map((work, key) => 
                                                    <li >
                                                        <div className="row" key={key} style={{marginTop:'15px'}}>
                                                            <div className="col-4" style={{marginLeft:'40px'}}>
                                                                <div className="col-3"></div>
                                                                <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                                    {work.company_name}
                                                                </p>
                                                            </div>
                                                            <div className="col-7">
                                                                <p className="dateright">
                                                                {formatDate(work.from)} - {formatDate(work.to)}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="txtexker">
                                                                    {work.work_description}
                                                                </p>
                                                            </div>
                                                        </div> 
                                                    </li>)}
                                                </ul>
                                            </div>
                                        </div>
                                            
                                            <br/>
                                            <div>
                                                <br/>
                                                <p className="parttext">Portfolio</p>
                                                <p className="uploadlink">
                                                    Upload atau link ke portfolio yang kamu punya.
                                                </p>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-6 upldlnk">

                                                        {/* <button onClick={this.upload} type="button" class="btn btn-outline-danger btn-lg btn-block" style={{borderRadius:'0', border:'2px solid', padding:'25px 0 25px 0', fontFamily:'helvetica, Arial, sans serif'}}
                                                        >
                                                        <i class="fa fa-cloud-upload"></i> Upload</button>
                                                        <input id='selectImage' hidden type="file" onChange={this.fileSelectHandler} /> */}
                                                        <div>
                                                            <DropboxChooser 
                                                                appKey={APP_KEY}
                                                                success={files => this.onSuccess(files)}
                                                                cancel={() => console.log('Closed')}
                                                                multiselect={true}>
                                                                <button type="button" className="btndngr btn btn-outline-danger btn-lg btn-block btnupload dropbox-button">
                                                                    <span>
                                                                        <img className="iconupload" alt='' src={upload}/>
                                                                    </span>
                                                                        Upload
                                                                </button> 
                                                            </DropboxChooser>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 upldlnk">
                                                    <button type="button" className="btndngr btn btn-outline-danger btn-lg btn-block btnlink" data-toggle="collapse" data-target="#link">
                                                        <span>
                                                            <img className="iconlink" alt='' src={link}/>
                                                        </span>
                                                            Link
                                                    </button>
                                                    </div>
                                                    <div>
                                                        {this.state.files && this.state.files.map((files, key) => 
                                                        <span className="d-flex text-left" style={{padding: '10px'}}>
                                                            <span className="fa fa-dropbox" aria-hidden="true" style={{color: 'blue', fontSize:'30px', paddingRight: '10px'}}></span>
                                                            <a href={files.link}>
                                                            <span key={key} style={{display: 'flex', flexGrow: '1', color: 'blue'}}>{files.link}</span>
                                                            </a>
                                                        </span> )}
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div>
                                            <br/>
                                                <p className="parttext">Sertifikat</p>
                                                <br/>
                                                <button type="button" onClick={this.upload} className="btndngr btn btn-outline-danger btn-lg btn-block btnsertifikat">
                                                    <span>
                                                        <img className="iconuploadsertifikat" alt='' src={upload}/>
                                                    </span>
                                                        Upload
                                                </button>
                                                <input id='selectImage' hidden type="file" onChange={this.fileSelectHandler} />
                                            </div>
                                            <br/>
                                            <div>   
                                                <br/>
                                                <div className="row">
                                                <p className="col-3 parttext" 
                                                    style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}
                                                    >Skills
                                                    </p>
                                                    {/* <button type="button" class="btn btndngr btn btn-outline ml-auto" data-toggle="collapse" data-target="#tambahskills" 
                                                    style={{marginRight:'20px', borderRadius:'0', fontFamily:'helvetica, Arial, sans serif', border:'2px solid #ff003a', outlineColor:'#ff003a'}}
                                                    >Add Skill</button> */}
                                                </div>
                                                <br/>
                                                <button type="button" className="btndngr btn btn-outline btn-lg btn-block btnpendidikan" data-toggle="collapse" data-target="#addskill"
                                                >+ Add Skill</button>
                                                <div>
                                                    <form>
                                                        <div id="addskill" className="collapse" style={{marginRight:'80px'}}>
                                                            <p className="titleadd">Tambah Skills</p>
                                                            <div className="input-group input-group-lg text-center d-flex flex-wrap align-content-center divadskl">
                                                                <span className="fa fa-search" style={{fontSize: '30px', color: '#ff003a', marginRight: '5px', padding: '20px', width:'7%'}}></span>
                                                                <span>
                                                                    <input className="input-group-prepend inputskil" type="text" onChange={this.handleChange} value={this.state.addSkill} name="addSkill" required="" placeholder="Skill (ex: Data Analysis)"/>
                                                                </span>
                                                            </div>
                                                                <p className="textunder">Kamu bisa menambahkan 10 skills lagi</p> 
                                                                <br/>
                                                                <div className="text-left" style={{marginTop: '-20px'}}>
                                                                <span className="btn btn-md design" onClick={this.btnAdddesign} style={{
                                                                    borderRadius: '50px', fontSize:'16px', fontWeight: '950', margin: '0 5px 0 0', color: '#FFF',
                                                                    fontFamily:'Montserrat', backgroundColor:'#ff003a'}}>
                                                                    <i className="fas fa-plus" style={{fontSize:'14px'}}> </i> Design</span>
                                                                <span className="btn btn-md design"  onClick={this.btnAddfront} style={
                                                                    {borderRadius: '50px', fontSize:'16px', fontWeight: '950', margin: '0 5px 0 5px', color: '#FFF', 
                                                                    fontFamily:'Montserrat', backgroundColor:'#ff003a'}}>
                                                                    <i className="fas fa-plus" style={{fontSize:'14px'}}> </i> Front End</span>
                                                                <span className="btn btn-md design" onClick={this.btnAddback} style={{
                                                                    borderRadius: '50px', fontSize:'16px', fontWeight: '950', margin: '0 5px 0 5px', color: '#FFF', 
                                                                    fontFamily:'Montserrat', backgroundColor:'#ff003a'}}>
                                                                    <i className="fas fa-plus" style={{fontSize:'14px'}}> </i>  Back End</span>
                                                                <span className="btn btn-md design" onClick={this.btnAddweb} style={{
                                                                    borderRadius: '50px', fontSize:'16px', fontWeight: '950', margin: '0 0 0 5px', color: '#FFF',
                                                                    fontFamily:'Montserrat', backgroundColor:'#ff003a'}}>
                                                                    <i className="fas fa-plus" style={{fontSize:'14px'}}> </i> Web Dev</span>
                                                                <span className="btn btn-md design" onClick={this.btnAddmobile} style={{
                                                                    borderRadius: '50px', fontSize:'16px', fontWeight: '950', margin: '0 5px 0 10px', color: '#FFF',
                                                                    fontFamily:'Montserrat', backgroundColor:'#ff003a'}}>
                                                                    <i className="fas fa-plus" style={{fontSize:'14px'}}> </i> Mobile Dev</span>
                                                            </div>
                                                            <br/>
                                                            <div className="d-flex justify-content-end" style={{paddingTop:'-25px', marginRight:'-40px'}}>  
                                                                <a href="#"><button className="btn btn-sm setuju" onClick={this.addSkills} style={{
                                                                    fontFamily:'helvetica, Arial, sans serif', borderRadius:'0', backgroundColor:'#ff003a', color: '#FFF', marginRight:'-40px'}}>Tambah</button></a>  
                                                            </div>  
                                                        </div>
                                                    </form>
                                                </div>  
                                                <div className="lskl text-left">
                                                    {this.state.skills && this.state.skills.map((skills, key) =>
                                                    <div className="dftrskla" key={key}>
                                                        <span>
                                                            {skills.name}
                                                        </span>
                                                    </div> )}
                                                </div>
                                            </div>
                                            <br/>
                                            <div>
                                                <p className="parttextprojects">Projects</p>
                                                <br/>
                                                <button type="button" className="btndngr btn btn-outline-danger btn-lg btn-block btnprojects" data-toggle="collapse" data-target="#addproject"
                                                > Tambah Project</button>
                                            </div>
                                            <br/>
                                            <div>
                                                <form>
                                                    <div id="addproject" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                        <p className="titleadd">Tambah Project</p>
                                                        <br/>
                                                        <div>
                                                            <input type="text" name="projectname" required="" 
                                                                onChange={this.handleChange} value={this.state.namaproject}/>
                                                            <label>Nama Project</label>
                                                        </div>
                                                        <div>
                                                            <input type="text" name="projecturl" required=""
                                                            onChange={this.handleChange} value={this.state.projecturl}/>
                                                            <label>Project URL</label>
                                                        </div>
                                                        <div>
                                                            <input type="text" name="projectdesc" required="" 
                                                            onChange={this.handleChange} value={this.state.descproject}/>
                                                            <label>Description</label>
                                                        </div>
                                                        <div style={{padding:'20px 0px 20px 20px'}}>
                                                            <p className="from">From</p>
                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-2">
                                                                    <p className="fromfrom" style={{marginLeft:'-20px'}}>
                                                                        Month
                                                                    </p>
                                                                </div>
                                                                <div className="col-sm-3 col-md-2"
                                                                style={{marginLeft:'-5px'}}>
                                                                    <p className="fromfrom" style={{marginLeft:'52px'}}>
                                                                        Years
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="row" style={{marginLeft:'125px'}}>
                                                                <div className="col-sm-3 col-md-1">
                                                                    <p className="until">
                                                                        To
                                                                    </p>
                                                                    <i className="fa fa-long-arrow-right arrowright"></i>
                                                                </div>
                                                            </div>
                                                            <div className="row" style={{marginLeft:'20px'}}>
                                                                <div className="col-sm-3 col-md-2"
                                                                style={{marginTop:'-30px', marginLeft:'100px'}}>
                                                                    <p className="fromto">
                                                                        Month
                                                                    </p>
                                                                </div>
                                                                <div className="col-sm-3 col-md-2"
                                                                style={{marginTop:'-30px', marginLeft:'72px'}}>
                                                                    <p className="fromto">
                                                                        Years
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="row drpdndt">
                                                                <select name="month" className="col-1 custom-select col-sm-2 optdate">
                                                                    <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                    <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                    <option value="11">11</option><option value="12">12</option>
                                                                </select>
                                                                <span className="fa fa-sort-desc"
                                                                style={{color:'darkgrey', position:'absolute', marginLeft:'122px', fontSize:'24px'}}></span>

                                                                <select name="year" className="col-1 custom-select col-sm-2 optdate">
                                                                    <option value="2019" selected>2019</option>
                                                                    <option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
                                                                    <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
                                                                    <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
                                                                    <option value="2002">2002</option><option value="2001">2001</option>
                                                                    <option value="199">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option>
                                                                    <option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option>
                                                                </select>
                                                                <span className="fa fa-sort-desc"
                                                                style={{color:'darkgrey', position:'absolute', marginLeft:'345px', fontSize:'24px'}}></span>

                                                                <select name="month" className="col-1 custom-select col-sm-2 optdate" style={{marginLeft: '0px'}}>
                                                                    <option value="01" selected>01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option>
                                                                    <option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
                                                                    <option value="11">11</option><option value="12">12</option>
                                                                </select>
                                                                <span className="fa fa-sort-desc"
                                                                style={{color:'darkgrey', position:'absolute', marginLeft:'787px', fontSize:'24px'}}></span>

                                                                <select name="year" className="col-1 custom-select col-sm-2 optdate" style={{marginLeft:'-15px'}}>
                                                                    <option value="2019" selected>2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
                                                                    <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
                                                                    <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
                                                                    <option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option>
                                                            </select>
                                                                <span className="fa fa-sort-desc"
                                                                style={{color:'darkgrey', position:'absolute', marginLeft:'577px', fontSize:'24px'}}></span>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="d-flex justify-content-end divbtncando">
                                                            <a href="#"><span className="btncel btn btn-lg btnbatal">Batal</span></a>  
                                                            <a href="#"><span className="btnsel btn btn-lg btnselesai" 
                                                            onClick={this.projecthandle} 
                                                            onClick={this.handlearrayproject}>Selesai</span></a>  
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="row" style={{marginTop:'15px'}}>
                                                <div className="col-1" style={{margin:'5px 0 0 -10px'}}>
                                                    <img alt='' src={projects}/>
                                                </div>
                                                <div className="col-4" 
                                                style={{marginLeft:'-25px'}}>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        Aplikasi Kopi Kenangan
                                                    </p>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        DumbWays
                                                    </p>
                                                                
                                                </div>
                                                <div className="col-7">
                                                    <p className="daterightmnth">
                                                        Maret 2020
                                                    </p>
                                                </div>
                                            </div>
                                            <span>
                                                <p className="txtex">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada aliquet urna. Etiam non malesuada magna. Quisque eget velit sit amet mauris facilisis lacinia. Fusce mattis enim sem, sed pulvinar lectus condimentum sit amet.
                                                </p>
                                            </span>
                                            <a href="#"><p className="seepro text-left">See Project</p></a>
                                            <div className="row" style={{marginTop:'30px'}}>
                                                <div className="col-1" style={{margin:'5px 0 0 -10px'}}>
                                                    <img alt='' src={projects}/>
                                                </div>
                                                <div className="col-4" 
                                                style={{marginLeft:'-25px'}}>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        Aplikasi DumbWays
                                                    </p>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        DumbWays
                                                    </p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="daterightmnth">
                                                        Maret 2020
                                                    </p>
                                                </div>
                                            </div>
                                            <span>
                                                <p className="txtex">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada aliquet urna. Etiam non malesuada magna. Quisque eget velit sit amet mauris facilisis lacinia. Fusce mattis enim sem, sed pulvinar lectus condimentum sit amet.
                                                </p>
                                            </span>
                                            <a href="#"><p className="seepro text-left">See Project</p></a>
                                        <div className="d-flex justify-content-end" style={{paddingTop: '35px'}}>
                                            <a href="#"><span className="btnfin btn btn-lg setuju" onClick={this.finishhandle} style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'5px', color:'#ff003a'}}>Finish</span></a>  
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>     
                
        </div>
      );
      function formatDate(date) {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        const d = new Date(date)

        const year 		= d.getFullYear()
        const monthName = monthNames[d.getMonth()]	
        const day  		= d.getDate()

        return monthName + " " + year
        }
    }
  }
  export default ProfileFilled;