import React, { Component } from 'react';
import './css/Home.css';
import daftar from './img/daftardanlengkapi.png';
import Header from './headerlanding';
import Footer from './footerLanding';
import lengkapi from './img/mulaibelajar.png';
import diskusi from './img/diskusionline.png';
import quiz from './img/kerjakanquiz.png';
import kerja from './img/howitworks.png';
import mentor from './img/mentorpro.png';
import teknologi from './img/teknologi-terupdate.png';
import Timer from './timer';
import nodejs from './img/node.png';
import js from './img/js.png';
import icoreact from './img/react.png';
import icomysql from './img/mysql.png';
import icogit from './img/git.png';
import ketitik from './img/ketitik.png';
import sirclo from './img/sirclo.png';
import clap from './img/clap.png';
import kofera from './img/kofera.png';
import prosehat from './img/prosehat.png';
import telkomindonesia from './img/telkom-indonesia.png';
import tokopedia from './img/tokopedia.png';
import schema from './img/schema.png';
import emago from './img/emago.png';
import jeager from './img/jeager.png';
import rekeningku from './img/rekeningku.png';
import bagidata from './img/bagidata.png';
import telecreative from './img/telecreative.png';
import truemoney from './img/true-money.png';
import HomeVideo from './HomeVideo';
import Slider from './slider';

class Home extends Component {
  render() {

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 3 && currentDate.getDate() > 14) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    
    return (
            <div className="Hom-b">
                <div>
                    <Header />
                </div> 
                <body className="Hom-a" style={{marginTop: '80px', backgroundColor: "#fff", overflowX: 'hidden'}}>
                    <div>
                        <div>    
                            <div className="jumbotron jumbotron-fluid gmbrlanding" style={{height: "600px"}}>
                                <div>
                                    <h4 className="card-title text-center title">Menjadi Fullstack Mobile Developer Professional dan Disalurkan Kerja</h4>
                                    <div style={{textAlign: "center", marginTop: "50px"}}>
                                        <span className="card-text text-center isi idr">IDR</span>
                                        <span className="text-center duajt">2.000.000</span>
                                        <span className="limaratus">500.000</span>
                                    </div>
                                    <p className="text-center berakhir">Penawaran Akan Berakhir Dalam:</p>
                                    <div className="timer" >
                                        <Timer date={`${year}-03-15T00:00:00`} />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="text-center" style={{padding: "20px 0 20px 0"}}>
                                                <a href="/register" style={{fontWeight: '600' }} class="btn btn-danger reg">Daftar Sekarang</a>
                                                <a href="/silabusnew" style={{fontWeight: '600', color: '#fff'}} class="btn btn-outline-danger text-center lengkap">Lihat Silabus</a>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group">
                            <div className="text-center">
                                <h1 className="caraker">Cara Kerja</h1>
                            </div>

                            <div class="bootcamp-steps">
                                <div class="vertical-line"></div>
                                <div class="bootcamp-step-content text-center">
                                    <div class="circle-steps-bootcamp"></div>
                                    <div class="circle-steps-bootcamp1"></div>
                                    <div class="circle-steps-bootcamp2"></div>
                                    <div class="circle-steps-bootcamp3"></div>
                                    <div class="kontainer">
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid pull-right onefivzer" src={daftar}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan text-left">
                                                    <h5 className="title-cara">Daftar dan Lengkapi Profile</h5>
                                                    <span>
                                                        buat akun dan lengkapi data diri serta lakukan pembayaran untuk dana awal
                                                    </span>
                                                    <div class="d-flex justify-content-end zerone"><p style={{fontSize: '30px'}}>01</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid onefivezer" src={daftar}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan bootcamp-step-list">
                                                    <h5 className="title-cara">Daftar dan Lengkapi Profile</h5>
                                                    <span>
                                                        buat akun dan lengkapi data diri serta lakukan pembayaran untuk dana awal
                                                    </span>
                                                    <div class="d-flex justify-content-end zerone"><p style={{fontSize: '30px'}}>01</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid onefivzer" src={lengkapi}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <section class="kotakiri bootcamp-step-list">
                                                    <div class="d-flex justify-content-end zerotwo"><p style={{fontSize: '30px'}}>02</p></div>
                                                    <h5 className="title-cara">Mulai Belajar</h5>
                                                    <span>
                                                        Dipandu oleh mentor professional, anda dapat belajar melalui media video streaming yang bisa anda akses selamanya
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakiri text-left">
                                                    <div class="d-flex justify-content-end zerotwo"><p style={{fontSize: '30px'}}>02</p></div>
                                                    <h5 className="title-cara">Mulai Belajar</h5>
                                                    <span>
                                                        Dipandu oleh mentor professional, anda dapat belajar melalui media video streaming yang bisa anda akses selamanya
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="pull-left bootcamp-step-list">
                                                    <img alt="" className="img-fluid onefivzer" src={lengkapi}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid onefivzer" src={quiz}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan bootcamp-step-list">
                                                    <h5 className="title-cara">Kerjakan Quiz Mingguan</h5>
                                                    <span>
                                                        Kerjakan Mini Quiz, Weekly Quiz dan Quiz Final untuk mengasah skillmu!
                                                    </span>
                                                    <div class="d-flex justify-content-end zerone"><p style={{fontSize: '30px'}}>03</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <p class="pull-right bootcamp-step-list">
                                                    <img alt="" className="img-fluid onedivzer" src={quiz}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakanan text-left">
                                                    <h5 className="title-cara">Kerjakan Quiz Mingguan</h5>
                                                    <span>
                                                        Kerjakan Mini Quiz, Weekly Quiz dan Quiz Final untuk mengasah skillmu!
                                                    </span>
                                                    <div class="d-flex justify-content-end zerone"><p style={{fontSize: '30px'}}>03</p></div>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-lg-none d-xl-none">
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="bootcamp-step-list">
                                                    <img alt="" className="img-fluid onefivzer" src={kerja}/>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <section class="kotakiri bootcamp-step-list">
                                                    <div class="d-flex justify-content-end zerotwo"><p style={{fontSize: '30px'}}>04</p></div>
                                                    <h5 className="title-cara">Penyaluran Kerja</h5>
                                                    <span>
                                                    Kami akan menyalurkan Anda ke perusahaan rekanan kami, Berdasarkan hasil Quiz yang anda kerjakan
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                        </div>
                                        <div class="row mb-5 d-none d-lg-flex d-xl-flex">
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                                <section class="kotakiri text-left">
                                                    <div class="d-flex justify-content-end zerotwo"><p style={{fontSize: '30px'}}>04</p></div>
                                                    <h5 className="title-cara">Penyaluran Kerja</h5>
                                                    <span>
                                                        Kami akan menyalurkan Anda ke perusahaan rekanan kami, Berdasarkan hasil Quiz yang anda kerjakan
                                                    </span>
                                                </section>
                                                <section className="kotakananduo"></section>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <p class="pull-left bootcamp-step-list">
                                                    <img alt="" className="img-fluid onefivezer" src={kerja}/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="penjelasan text-center">
                                    <p style={{color: "black", fontSize: "20px", fontWeight: '600'}}>Masih Belum Paham Cara Kerjanya? Lihat Video Berikut...</p>
                                </div>
                                <div className="homevideo ">    
                                    <HomeVideo/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center tanya" ><br/>
                            <h1 className="mengapa">Mengapa Memilih Kami?</h1>
                        </div>
                        <div className="row text-center" style={{marginBottom: "50px", fontWeight: '600'}}>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid onefivzer ten" src={mentor}/>
                                {/* <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Mentor Professional</p> */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid onefivzer ten" src={kerja}/>
                                {/* <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Penyaluran Kerja</p> */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid onefivzer ten" src={teknologi}/>
                                {/* <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Teknologi Terupdate</p> */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img alt="" className="img-fluid onefivzer ten" src={diskusi}/>
                                {/* <p style={{color: "black", fontSize: "15px", padding: "20px 0 10px 0"}}>Diskusi Online</p> */}
                            </div>
                        </div>
                        <div className="row soo">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <p className="tunggu">So, Tunggu apa lagi?</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="text-center" style={{padding: "20px 90px 20px 90px"}}>
                                    <a href="/register" class="btn btn-warning reg" style={{color: '#fff', fontWeight: '600'}}>Daftar Sekarang</a>
                                    <a href="/silabusnew" class="btn btn-outline-light text-center lengkap" style={{fontWeight: '600'}}>Lihat Silabus</a>
                                </div> 
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="text-center tech">Teknologi</p>
                            </div>
                            <div className="text-center logi">
                                <span title="Node.Js"><img className="icotechnod" alt="" src={nodejs}/></span>
                                <span title="Javascript"><img className="icotechjs" alt="" src={js}/></span>
                                <span title="React"><img className="icotech" alt="" src={icoreact}/></span>
                                <span title="MySQL"><img className="icotechsql" alt="" src={icomysql}/></span>
                                <span title="GIT"><img className="icotechnod" alt="" src={icogit}/></span>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <p className="rekanusaha">Perusahaan Rekanan</p>
                            </div>
                            <div className="row text-right rekanus">
                                <span>
                                    <img alt="" className="col-lg col-md img-fluid rekan" src={ketitik}/>
                                </span>
                                <span>
                                    <img alt="" className="col-lg col-md img-fluid rekan" src={sirclo}/>
                                </span>
                                <span>
                                    <img alt="" className="col-lg col-md img-fluid rekan" src={clap}/>
                                </span>
                                <span>
                                    <img alt="" className="col-lg col-md img-fluid rekan" src={kofera}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={prosehat}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={telkomindonesia}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={tokopedia}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={schema}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={emago}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={jeager}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid rekanrek col-lg col-md" src={rekeningku}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={bagidata}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={telecreative}/>
                                </span>
                                <span>
                                    <img alt="" className="img-fluid col-lg col-md rekan" src={truemoney}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </body>
                <div>
                    <Footer />
                </div>                  
            </div>
        );
    }
}

export default Home;
