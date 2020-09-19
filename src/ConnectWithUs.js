import React from 'react'

const ConnectWithUs = () => {
	return (
        <div id="connect" className = "container-fluid align-items-center pb-5" style={{background: 'url(./images/footer-bg.jpg) no-repeat center', backgroundSize: 'cover'}}>
            <div className="container-fluid pb-3">
                <div className="row">
                    <div className="col align-self-center mt-5"><h2 className="text-light font-weight-bold text-center" style= textShadow: '0px 0px 5px #000000'>Connect With Us</h2></div> 
                </div>
                <div className="row">
                    <div className="col align-self-center"><p className="text-light text-center mb-4" style={{textShadow: '0px 0px 5px #000000'}}>Catch the latest sermon from the First Love Center</p> </div>
                </div>
                <div className="row row-cols-3 d-flex justify-content-center">
                    <div className="col d-flex align-self-center justify-content-center">
                        <a href="https://podcasts.apple.com/gh/podcast/dag-heward-mills/id681758807">
                            <button type="button" className="btn btn-outline-light btn-lg text-nowrap" style="margin:0 auto;">iOS<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                              </svg></svg>
                            </button>
                        </a>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src="./images/podcast-art-flc.png" style="align-self:center; width: 250px;" className="img-fluid" />
                    </div>
                    <div className="col d-flex align-self-center justify-content-center">
                        <a href="https://play.google.com/store/apps/details?id=com.app.xjewnebtfugbhpjarqkdcmoirtclvifuhpzgyawsk&hl=en">
                            <button type="button" className="btn btn-outline-light text-nowrap btn-lg" style="margin:0 auto;">Android<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                              </svg></button>
                        </a>
                    </div> 
                </div>
                <div className="row mt-5">
                    <div className="col align-self-center"><h4 className="text-light font-weight-bold text-center" style="text-shadow: 0px 0px 5px #000000;">Connect With Us Online</h4></div>
                </div>
                <div className="row">
                    <div className="col align-self-center"><p className="text-light text-center" style="text-shadow: 0px 0px 5px #000000;">@firstlovecenter</p></div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="https://www.facebook.com/firstlovecenter"><img src="./images/icon-fb.png" className="img-fluid" style= {{width:'100px'}} /></a>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <a href="https://twitter.com/FirstLoveCenter"><img src="./images/icon-twitter.png" className="img-fluid" style= {{width:'100px'}} /></a>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <a href="https://www.instagram.com/firstlovecenter/"><img src="./images/icon-ig.png" className="img-fluid text-right" style= {{width:'100px'}} /></a>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <a href="https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw"><img src="./images/icon-youtube.png" className="img-fluid" style= {{width:'100px'}} /></a>
                    </div>
                </div>         
            </div>
        </div>
        
	)
}

export default ConnectWithUs