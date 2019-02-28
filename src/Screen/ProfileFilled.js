import React, { Component } from 'react';
import Header from './HeaderPage';
import './css/ProfileFilled.css';
import upload from './img/upload.png';
import link from './img/link.png';
import projects from './img/projects.png';
import DropboxChooser from 'react-dropbox-chooser';
import {RadioGroup,Radio} from 'react-radio-group';
import './css/Register.css';

const APP_KEY = 'jni8bfvqjntw35s';

class ProfileFilled extends Component {
    constructor(props){
        super(props)
        this.finishhandle = this.finishhandle.bind(this);
        this.pendidikanhandle = this.pendidikanhandle.bind(this);
        this.kerjahandle = this.kerjahandle.bind(this);
        this.projecthandle = this.projecthandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.moveLogin = this.moveLogin.bind(this);
        this.upload = this.upload.bind(this)
        this.onSuccess = this.onSuccess.bind(this);
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
            files: ''

        }
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
            alert('Silahkan masukkan email yang valid')
        }else if(this.state.fullname === ""){
            alert("Silahkan masukkan nama lengkap anda");
        }else if(this.state.email === ""){
            alert("Silahkan masukkan email anda");
        }else if(this.state.telpnumber === ""){
            alert("Silahkan masukkan nomor telepon anda");
        }else if(this.state.adress === ""){
            alert("Silahkan masukkan alamat anda");
        }else if(this.state.summary === ""){
            alert("Silahkan masukkan summary anda");
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

    pendidikanhandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.sekolah === "") {
            alert('Silahkan masukkan sekolah anda')
        }else if(this.state.study === ""){
            alert("Silahkan masukkan bidang study anda");
        }else if(this.state.jurusan === ""){
            alert("Silahkan masukkan jurusan anda");
        }else if(this.state.degree === ""){
            alert("Silahkan masukkan degree anda");
        }
        else{
            //init POST AXIOS
            const sekolah = this.state.sekolah;
            const study = this.state.study;
            const jurusan = this.state.jurusan;
            const degree = this.state.degree;
            const body={
                sekolah,
                study,
                jurusan,
                degree
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }
    }

    kerjahandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.perusahaan === "") {
            alert('Silahkan masukkan perusahaan pekerjaan anda')
        }else if(this.state.industri === ""){
            alert("Silahkan masukkan industri pekerjaan anda");
        }else if(this.state.title === ""){
            alert("Silahkan masukkan title pekerjaan anda");
        }else if(this.state.description === ""){
            alert("Silahkan masukkan deskripsi pekerjaan anda");
        }
        else{
            //init POST AXIOS
            const perusahaan = this.state.perusahaan;
            const industri = this.state.industri;
            const title = this.state.title;
            const description = this.state.description;
            const body={
                perusahaan,
                industri,
                title,
                description
            }
            // Axios.post('url',body).then(ress=>{
            //     this.setState({ressjson:ress})
            // })
            this.props.history.push("#");
            console.log(this.state.selectedValue);
        }
    }

    projecthandle(){
        //check all is ok
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.namaproject === "") {
            alert('Silahkan masukkan nama project anda')
        }else if(this.state.projecturl === ""){
            alert("Silahkan masukkan project url anda");
        }else if(this.state.descproject === ""){
            alert("Silahkan masukkan description project anda");
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
                                Silahkan melengkapi profile anda demi kemudahan kami dalam menyalurkan kerja dan administrasi
                            </p>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="container section">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="persegiprofile">
                                    <div class="row" style={{marginBottom:'30px'}}>
                                        <p class="col-1 parttext">Profil</p>
                                        <p class="col-12 required">
                                            <span class="star">
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
                                            <div style={{padding:'20px 0px 20px 20px'}}>
                                                <p class="gender">Gender</p>
                                                {/* <form>
                                                    <label class="radio-inline radiogender">
                                                        <input class="optgendermale" type="radio" name="optradio" checked/>Male
                                                    </label>
                                                    <label class="radio-inline radiogender">
                                                        <input class="optgenderfemale" type="radio" name="optradio"/>Female
                                                    </label>
                                                </form> */}
                                            </div>
                                            <div style={{padding:'20px 0px 20px 20px'}}>
                                                <p class="dateofbirth">Tanggal Lahir</p>
                                                    <div class="row">
                                                        <div class="col-sm-3 col-md-2">
                                                            <p class="datebirth">
                                                                Date
                                                            </p>
                                                        </div>
                                                        <div class="col-sm-3 col-md-2">
                                                            <p class="datebirth">
                                                                Month
                                                            </p>
                                                        </div>
                                                        <div class="col-sm-3 col-md-2">
                                                            <p class="datebirth">
                                                                Year
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <select name="date" class="col-1 custom-select mb-3 optdate">
                                                            <option selected>01</option><option>02</option><option>03</option>
                                                            <option>04</option>
                                                            <option>05</option>
                                                            <option>06</option>
                                                            <option>07</option>
                                                            <option>08</option>
                                                            <option>09</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                            <option>13</option>
                                                            <option>14</option>
                                                            <option>15</option>
                                                            <option>16</option>
                                                            <option>17</option>
                                                            <option>18</option>
                                                            <option>19</option>
                                                            <option>20</option>
                                                            <option>21</option>
                                                            <option>22</option>
                                                            <option>23</option>
                                                            <option>24</option>
                                                            <option>25</option>
                                                            <option>26</option>
                                                            <option>27</option>
                                                            <option>28</option>
                                                            <option>29</option>
                                                            <option>30</option>
                                                            <option>31</option>
                                                        </select>
                                                        
                                                        <select name="month" class="col-1 custom-select mb-3 optdate">
                                                            <option selected>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                            <option>04</option>
                                                            <option>05</option>
                                                            <option>06</option>
                                                            <option>07</option>
                                                            <option>08</option>
                                                            <option>09</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                        </select>

                                                        <select name="year" class="col-1 custom-select mb-3 optdate">
                                                            <option selected>2000</option>
                                                            <option>1999</option>
                                                            <option>1998</option>
                                                            <option>1997</option>
                                                            <option>1996</option>
                                                            <option>1995</option>
                                                            <option>1994</option>
                                                            <option>1993</option>
                                                            <option>1992</option>
                                                            <option>19991</option>
                                                            <option>1990</option>
                                                            <option>12</option>
                                                        </select>
                                                    </div>
                                            </div>
                                            {/* <div style={{padding:'20px 0px 20px 20px'}}>
                                                <form>
                                                    <label class="radio-inline" style={{paddingRight:'20px'}}>
                                                        <input type="radio" name="optradio" checked/>Male
                                                    </label>
                                                    <label class="radio-inline">
                                                        <input type="radio" name="optradio"/>Female
                                                    </label>
                                                </form>
                                            </div> */}
                                            {/* <div>
                                                <form class="row">
                                                    <div class="form-group col-1">
                                                        <label for="Date">Date</label>
                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                        <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                                            <div>
                                                <form className="text-left" style={{marginLeft: '20px'}}>
                                            <div class="form-group">
                                                <form className="text-left" style={{marginLeft: '20px'}}action="">
                                                    <div class="custom-control custom-radio custom-control-inline" style={{paddingRight: '100px'}}>
                                                        <input type="radio" defaultChecked class="custom-control-input" onChange={this.handleValue} selectedValue={this.state.selectedValue}  id="lakilaki" name="gender" value="Laki-Laki" placeholder="Laki-Laki"/>
                                                        <label class="custom-control-label" for="lakilaki">Laki-Laki</label>  
                                                        
                                                    </div>
                                                    <div class="custom-control custom-radio custom-control-inline">
                                                        <input type="radio"class="custom-control-input" onChange={this.handleValue} selectedValue={this.state.selectedValue} class="custom-control-input" id="perempuan" name="gender" value="Perempuan"/>
                                                        <label class="custom-control-label" for="perempuan">Perempuan</label>
                                                    </div> 
                                                    
                                                </form>
                                            </div>
                                            <div>
                                                <label for="tgl">Tanggal Lahir</label>
                                                <form class="row" id="tgl" style={{marginLeft: '0'}}>
                                                    <div class="form-group col-2">
                                                        <select class="form-control text-center" id="exampleFormControlSelect1">
                                                            <option value="" selected disabled hidden>Date</option>
                                                            <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-2">
                                                        <select class="form-control text-center" id="exampleFormControlSelect1">
                                                            <option value="" selected disabled hidden>Month</option>
                                                            <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                                                            <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div> */}
                                            <br/>
                                            <div>
                                                <input type="text" name="summary" 
                                                onChange={this.handleChange} value={this.state.summary} required=""/>
                                                <label>Summary</label>
                                            </div>
                                        </form>
                                            
                                            <br/>
                                        <div class="row">
                                            <p class="col-5 parttext">Riwayat Pendidikan</p>
                                            <p class="col-12 required">
                                                <span class="star">
                                                *
                                                </span>
                                                required
                                            </p>
                                        </div>
                                        <div>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block btnpendidikan" data-toggle="collapse" data-target="#tambahpendidikan"
                                            >+ Tambah Pendidikan</button>
                                        </div>
                                        <br/>  
                                        <div>
                                            <form>
                                                <div id="tambahpendidikan" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                    <p class="titleadd">Tambah Pendidikan</p>
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
                                                    <br/>
                                                    <div class="d-flex justify-content-end divbtncando">
                                                        <a href="#"><span class="btn btn-outline-danger btn-lg btnbatal">Batal</span></a>  
                                                        <a href="#"><span class="btn btn-danger btn-lg btnselesai"
                                                        onClick={this.pendidikanhandle}>Selesai</span></a>  
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                            <div class="row" style={{marginTop:'15px'}}>
                                                <span class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 schol">
                                                    <div class="col-3"></div>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        SMK Uhuy Lah
                                                    </p>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        SMA/SMK
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
                                                                        Business
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
                                                </span>
                                                <span class="col-xl-7 col-lg-7 col-md-7 col-sm-5 col-xs-5">
                                                    <span class="dateright">
                                                        Januari 2019 - Maret 2020
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Responsive Pendidikan */}
                                        <div className="d-sm-none d-md-none d-lg-none d-xl-none">
                                            <div class="row" style={{marginTop:'15px'}}>
                                                <span class="col-xs-12 schol">
                                                    <div class="col-3"></div>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        SMK Uhuy Lah
                                                    </p>
                                                    <span class="dateright">
                                                        Januari 2019 - Maret 2020
                                                    </span>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        SMA/SMK
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
                                                                        Buisness
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
                                                </span>
                                            </div>
                                        </div>

                                        <br/>
                                        <div>
                                            <br/>
                                            <p class="parttext">Pengalaman Kerja</p>
                                            <br/>
                                            <button type="button" class="btn btn-outline-danger btn-lg btn-block btnpengalaman" data-toggle="collapse" data-target="#tambahpengalamankerja"
                                            >+ Tambah Pengalaman Kerja</button>
                                        </div>
                                        <br/>
                                        <div>
                                            <form>
                                                <div id="tambahpengalamankerja" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                    <p class="titleadd">Tambah Pengalaman</p>
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
                                                        <p class="from">From</p>
                                                            <div class="row">
                                                                <div class="col-sm-3 col-md-1">
                                                                    <p class="fromfrom">
                                                                        Month
                                                                    </p>
                                                                </div>
                                                                <div class="col-sm-3 col-md-1">
                                                                    <p class="fromfrom">
                                                                        Year
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-3 col-md-1">
                                                                    <p class="until">
                                                                        To
                                                                    </p>
                                                                    <i class="fa fa-long-arrow-right arrowright"></i>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-3 col-md-1">
                                                                    <p class="fromto">
                                                                        Month
                                                                    </p>
                                                                </div>
                                                                <div class="col-sm-3 col-md-1">
                                                                    <p class="fromto">
                                                                        Year
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <br/>
                                                    <div class="d-flex justify-content-end divbtncando">
                                                        <a href="#"><span class="btn btn-outline-danger btn-lg btnbatal">Batal</span></a>  
                                                        <a href="#"><span class="btn btn-danger btn-lg btnselesai" 
                                                        onClick={this.kerjahandle}>Selesai</span></a>  
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="row" style={{marginTop:'15px'}}>
                                            <div class="col-4" style={{marginLeft:'40px'}}>
                                                <div class="col-3"></div>
                                                <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                    Programmer
                                                </p>
                                            </div>
                                            <div class="col-7">
                                                <p class="dateright">
                                                    Januari 2019 - Maret 2020
                                                </p>
                                            </div>
                                                <p className="txtexker">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada aliquet urna. Etiam non malesuada magna. Quisque eget velit sit amet mauris facilisis lacinia. Fusce mattis enim sem, sed pulvinar lectus condimentum sit amet.
                                                </p>
                                            </div>
                                                    
                                            <br/>
                                            <div>
                                                <br/>
                                                <p class="parttext">Portfolio</p>
                                                <p class="uploadlink">
                                                    Upload atau link ke portfolio yang kamu punya.
                                                </p>
                                                <br/>
                                                <div class="row">
                                                    <div class="col-6 upldlnk">

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
                                                                <button type="button" class="btn btn-outline-danger btn-lg btn-block btnupload dropbox-button">
                                                                    <span>
                                                                        <img class="iconupload" alt='' src={upload}/>
                                                                    </span>
                                                                        Upload
                                                                </button> 
                                                            </DropboxChooser>
                                                        </div>
                                                    </div>
                                                    <div class="col-6 upldlnk">
                                                    <button type="button" class="btn btn-outline-danger btn-lg btn-block btnlink" data-toggle="collapse" data-target="#link">
                                                        <span>
                                                            <img class="iconlink" alt='' src={link}/>
                                                        </span>
                                                            Link
                                                    </button>
                                                    </div>
                                                    <div>
                                                        {this.state.files && this.state.files.map((files, key) => 
                                                        <span className="d-flex text-left" style={{padding: '10px'}}>
                                                            <span class="fa fa-dropbox" aria-hidden="true" style={{color: 'blue', fontSize:'30px', paddingRight: '10px'}}></span>
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
                                                <p class="parttext">Sertifikat</p>
                                                <br/>
                                                <button type="button" onClick={this.upload} class="btn btn-outline-danger btn-lg btn-block btnsertifikat">
                                                    <span>
                                                        <img class="iconuploadsertifikat" alt='' src={upload}/>
                                                    </span>
                                                        Upload
                                                </button>
                                                <input id='selectImage' hidden type="file" onChange={this.fileSelectHandler} />
                                            </div>
                                            <br/>
                                            <div>
                                                <br/>
                                                <div class="row">
                                                <p class="col-3 parttext" 
                                                    style={{color:'black', fontWeight:'601', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.75000000em', display:'block', textAlign:'left'}}
                                                    >Skills
                                                    </p>
                                                    <button type="button" class="btn ml-auto" data-toggle="collapse" data-target="#tambahskills" 
                                                    style={{backgroundColor:'lightgrey', color:'#000', marginRight:'20px', borderRadius:'0', fontFamily:'helvetica, Arial, sans serif'}}
                                                    >Add Skill</button>
                                                </div>
                                                <div className="text-left">
                                                    <div className="dftrskl">
                                                        <span>
                                                            User Interface Design
                                                        </span>
                                                    </div>
                                                    <div className="dftrskla">
                                                        <span>
                                                            Graphic Design
                                                        </span>
                                                    </div>
                                                    <div className="dftrskla">
                                                        <span>
                                                            User Experience Design
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <form>
                                                        <div id="tambahskills" class="collapse" style={{marginRight:'80px'}}>
                                                            <p class="titleadd">Tambah Skills</p>
                                                            <div class="input-group input-group-lg text-center d-flex flex-wrap align-content-center divadskl">
                                                                <span className="fa fa-search" style={{fontSize: '30px', color: 'red', marginRight: '5px', padding: '20px'}}></span>
                                                                <span>
                                                                    <input class="input-group-prepend inputskil" type="text" name="skills" required="" placeholder="Skill (ex: Data Analysis)"/>
                                                                </span>
                                                            </div>
                                                            <p style={{textAlign:'left', color:'black', fontWeight:'100', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'.75000000em', marginLeft:'40px'}}>Kamu bisa menambahkan 10 skills lagi</p> 
                                                            <br/>
                                                            <div className="text-left" style={{marginLeft: '40px'}}>
                                                                <span className="btn btn-danger" style={{borderRadius: '50px', fontWeight: '600', margin: '0 5px 0 0'}}>Design</span>
                                                                <span className="btn btn-danger" style={{borderRadius: '50px', fontWeight: '600', margin: '0 5px 0 5px'}}>Design</span>
                                                                <span className="btn btn-danger" style={{borderRadius: '50px', fontWeight: '600', margin: '0 5px 0 5px'}}>Design</span>
                                                                <span className="btn btn-danger" style={{borderRadius: '50px', fontWeight: '600', margin: '0 0 0 5px'}}>Design</span>
                                                            </div>
                                                            <br/>
                                                            <div class="d-flex justify-content-end" style={{paddingTop:'-25px', marginRight:'-40px'}}>  
                                                                <a href="#"><button class="btn btn-danger btn-sm setuju" style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'0'}}>Tambah</button></a>  
                                                            </div>  
                                                        </div>
                                                    </form>
                                                </div>  
                                            </div>
                                            <br/>
                                            <div>
                                                <p class="parttextprojects">Projects</p>
                                                <br/>
                                                <button type="button" class="btn btn-outline-danger btn-lg btn-block btnprojects" data-toggle="collapse" data-target="#tambahproject"
                                                >+ Tambah Project</button>
                                            </div>
                                            <br/>
                                            <div>
                                                <form>
                                                    <div id="tambahproject" class="collapse" style={{margin:'0 40px 0 40px'}}>
                                                        <p class="titleadd">Tambah Project</p>
                                                        <br/>
                                                        <div>
                                                            <input type="text" name="" required="" 
                                                                onChange={this.handleChange} value={this.state.namaproject}/>
                                                            <label>Nama Project</label>
                                                        </div>
                                                        <div>
                                                            <input type="text" name="" required=""
                                                            onChange={this.handleChange} value={this.state.projecturl}/>
                                                            <label>Project URL</label>
                                                        </div>
                                                        <div>
                                                            <input type="text" name="" required="" 
                                                            onChange={this.handleChange} value={this.state.descproject}/>
                                                            <label>Description</label>
                                                        </div>
                                                        <div style={{padding:'20px 0px 20px 20px'}}>
                                                            <p class="from">From</p>
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-1">
                                                                        <p class="fromfrom">
                                                                            Month
                                                                        </p>
                                                                    </div>
                                                                    <div class="col-sm-3 col-md-1">
                                                                        <p class="fromfrom">
                                                                            Year
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-1">
                                                                        <p class="until">
                                                                            To
                                                                        </p>
                                                                        <i class="fa fa-long-arrow-right arrowright"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-3 col-md-1">
                                                                        <p class="fromto">
                                                                            Month
                                                                        </p>
                                                                    </div>
                                                                    <div class="col-sm-3 col-md-1">
                                                                        <p class="fromto">
                                                                            Year
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <br/>
                                                        <div class="d-flex justify-content-end divbtncando">
                                                            <a href="#"><span class="btn btn-outline-danger btn-lg btnbatal">Batal</span></a>  
                                                            <a href="#"><span class="btn btn-danger btn-lg btnselesai" 
                                                            onClick={this.projecthandle}>Selesai</span></a>  
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="row" style={{marginTop:'15px'}}>
                                                <div class="col-1" style={{margin:'5px 0 0 -10px'}}>
                                                    <img alt='' src={projects}/>
                                                </div>
                                                <div class="col-4" style={{marginLeft:'-25px'}}>
                                                    <div class="col-3"></div>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        Aplikasi Kopi Kenangan
                                                    </p>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        DumbWays
                                                    </p>
                                                                
                                                </div>
                                                <div class="col-7">
                                                    <p class="dateright">
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
                                            <div class="row" style={{marginTop:'30px'}}>
                                                <div class="col-1" style={{margin:'5px 0 0 -10px'}}>
                                                    <img alt='' src={projects}/>
                                                </div>
                                                <div class="col-4" style={{marginLeft:'-25px'}}>
                                                    <div class="col-3"></div>
                                                    <p style={{color:'black', fontWeight:'600', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.25000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        Aplikasi DumbWays
                                                    </p>
                                                    <p style={{color:'red', fontFamily:'helvetica, Arial, sans serif', fontSize:'1.15000000em', display:'block', textAlign:'left', marginBottom:'0'}}>
                                                        DumbWays
                                                    </p>
                                                </div>
                                                <div className="col-7">
                                                    <p class="dateright">
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
                                        <div class="d-flex justify-content-end" style={{paddingTop: '35px'}}>
                                            <a href="#"><span class="btn btn-danger btn-lg setuju" onClick={this.finishhandle} style={{fontFamily:'helvetica, Arial, sans serif', borderRadius:'5px'}}>Finish</span></a>  
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
    }
  }
  export default ProfileFilled;