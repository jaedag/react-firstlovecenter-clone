import React from 'react'

const TopNav = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg fixed-top" style={{backgroundColor: 'black'}}>
            <a className="navbar-brand" href="./index.html"><img src="./images/flc-logo-small.png" style={{width: '80px'}} alt="First Love Church Logo"/></a>
            <button className ="navbar-toggler" type="button" style={{border:'none'}}
                    data-toggle="collapse" data-target="#myTogglerNav"
                    aria-controls="myTogglerNav"
                    aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="myTogglerNav">
                    <div className="navbar-nav mx-auto nav-fill w-100">
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./jesus.html">Jesus</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./index.html#about-flc">Who We Are</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./flc-global-locations.html">Global</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="https://www.myfirstlovemusic.com">Music</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./flc-ministries.html">Get Involved</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./index.html#conferences">Events</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="https://daghewardmillsbooks.org/new/">Books</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./index.html#testimonies">Our Stories</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./index.html#connect">Connect</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./index.html#locate-flc">Location</a>
                        <a className="nav-item nav-link font-weight-bold align-self-center" href="./index.html#dhmmaudio">Media</a>
                    </div>
                </div>
        </nav>
	)
}

export default TopNav