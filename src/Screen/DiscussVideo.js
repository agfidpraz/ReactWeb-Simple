import React,{Component}from 'react'
import  '../Screen/css/DiscussVideo.css'
import './css/VideoPlayer.css'
class DiscussVideo extends Component{
    constructor(){
        super()
        this.showreply = this.showreply.bind(this)
        this.showbtn = this.showbtn.bind(this)
        this.state={
            showreply:false,
            jumlahlike:"1.8rb",
            showbtn:false, 
            comment:[
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"myusername",comment:"How To Fast Learning ?",reply:""},
                {id:"1",photo:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",commented:"commented 5 days ago",username:"yourusername",comment:"Just Try Anytime",reply:"myusername"}
            ]
        }
    }
    showreply(){
        this.setState({show:!this.state.showreply})
    }
    showbtn(){
        this.setState({show:!this.state.showbtn})
    }
    render(){
        return(
            <div style={{marginTop:"-30px"}} >
                <h5 className="disscuss-vd-gd">
                    Diskusi 
                </h5>
                <div  >
                    <div className="row" id="post-review-box" >
                        <div className="img-cmt-gd img-cmt-cl">
                                <img  className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" style={{borderRadius:"50px"}}/>
                        </div>
                        <div className="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                            <input onClick={this.showreply} className="input-cmt-gd input-cmt-cl" placeholder="Write A Comment"></input>
                            <div id="btn" style={{display: this.state.show ? 'block' : 'none'}}>
                                <button className="btn btn-outline-primary submit-cmt-gd submit-cmt-cl" > Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.comment.map((item,key)=>{
                    // if else .map
                    if(item.reply!==""){
                    return(
                        <div className="row" style={{marginTop:"30px"}}> 
                            <div className="img-cmt-gd img-cmt-cl">
                                <div className="thumbnail">
                                    <img alt="profileimage" className="img-responsive user-photo" src={item.photo} style={{borderRadius:"50px"}}/>
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <strong>{item.username}</strong> <span className="text-muted">{item.commented}</span><br/>
                                        
                                        <span className="text-muted">{"Reply To " + item.reply}</span>
                                    </div>
                                    <div className="panel-body sh-cmt-gd sh-cmt-cl">
                                        <div className="row" >
                                        </div>
                                        <label >{item.comment}</label>
                                        <div className="row">
                                            <div style={{marginLeft:"15px",marginRight:"10px"}}>
                                                <i className="btn fa fa-thumbs-up"style={{marginTop:"-6px",marginLeft:"-13px"}}></i>
                                            </div>
                                            <div style={{marginRight:"10px"}}>
                                                <i className="btn fa fa-thumbs-down fa-flip-horizontal" style={{marginTop:"-6px",marginLeft:"-25px"}}></i>
                                            </div>
                                            <div style={{marginLeft:"1px"}}>
                                                <span onClick={this.showreply} className="btn" style={{marginTop:"-6px",marginLeft:"-25px"}}>Reply</span>

                                            </div>
                                        </div>
                                        {/* true false ? */}
                                        <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                        {/* end true false ? */}
                                            <div className="row" id="post-review-box" style={{marginTop:"30px"}} >
                                                <div className="img-cmt-gd img-cmt-cl">
                                                        <img alt="profileimage" className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                                                </div>
                                                <div class="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                    <input onClick={this.showreply} className="input-rpl-qz-gd input-rpl-qz-cl" placeholder="Write A Comment"></input>
                                                    <button className="btn btn-outline-primary submit-rpl-qz-gd submit-rpl-qz-cl" > Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <br/> */}
                        </div>
                    )}else{
                        return(
                            <div className="row" style={{marginTop:"30px"}}> 
                            <div className="img-cmt-gd img-cmt-cl">
                                <div className="thumbnail">
                                    <img alt="profileimage" class="img-responsive user-photo" src={item.photo} style={{borderRadius:"50px"}}/>
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <strong>{item.username}</strong> <span class="text-muted">{item.commented}</span><br/>
                                    </div>
                                    <div className="panel-body sh-cmt-gd sh-cmt-cl">
                                        <div className="row" >
                                        </div>
                                        <label >{item.comment}</label>
                                        <div className="row">
                                        <div style={{marginLeft:"15px",marginRight:"10px"}}>
                                                <i className="btn fa fa-thumbs-up"style={{marginTop:"-6px",marginLeft:"-13px"}}></i>
                                            </div>
                                            <div style={{marginRight:"10px"}}>
                                                <i className="btn fa fa-thumbs-down fa-flip-horizontal" style={{marginTop:"-6px",marginLeft:"-25px"}}></i>
                                            </div>
                                            <div style={{marginLeft:"1px"}}>
                                                <span onClick={this.showreply} className="btn" style={{marginTop:"-6px",marginLeft:"-25px"}}>Reply</span>

                                            </div>
                                        </div>
                                        {/* true false ? */}
                                        <div id="reply" style={{display: this.state.show ? 'block' : 'none'}}>
                                        {/* end true false ? */}
                                            <div className="row" id="post-review-box" style={{marginTop:"30px"}} >
                                                <div className="img-cmt-gd img-cmt-cl">
                                                        <img alt="profileimage" className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{borderRadius:"50px"}}/>
                                                </div>
                                                <div className="col-md-auto col-s-9 dv-input-cmt-gd dv-input-cmt-cl">
                                                    <input onClick={this.showreply} className="input-rpl-qz-gd input-rpl-qz-cl" placeholder="Write A Comment"></input>
                                                    <button className="btn btn-outline-primary submit-rpl-qz-gd submit-rpl-qz-cl" > Submit</button>
                                                </div>
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <br/> */}
                        </div>
                        )
                    }
                })}
                
            </div>
        )
    }
}
export default DiscussVideo;