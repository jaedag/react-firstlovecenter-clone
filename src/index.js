import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom'
import PageSection from './PageSection'
import TopNav from './TopNav'
import ConnectWithUs from './ConnectWithUs'

const App = () => {
   const sections = {    
    dhmmAudio : 
        {
            titleText: "DHMM Audio Collection",
            btnText: "DHMM Ministry Products  ",
            btnURL: "https://cdn.firstlovecenter.com/DHMM-Audio-Catalog.pdf",
            bgImage: "./images/dhmm-audio-bg.jpg",
            bodyText: "Welcome to the Dag Heward-Mills Audio Collection!\nThis collection of sound teachings and songs will transform your life!\nBrowse the catalog now.",
        },
    firstLoveCollective:
        {
            titleText: "First Love Collective",
            btnText: "Start Reading ",
            btnURL: "https://firstlovecollective.wordpress.com",
            bgImage: "./images/flc-collective-bg.jpg",
            bodyText: "Our Stories, Experiences and what God has brought us through"
        },
    firstLoveChannel:
        {
            titleText: "First Love Channel",
            btnText: "Watch Free ",
            btnURL: "https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw/videos",
            bgImage: "./images/flc-channel-bg.jpg",
            bodyText: "Your ALL ACCESS PASS to everything that is happening in First Love around the globe!"
        },
    understandingCampaign:
        {
            titleText: "Understanding Campaign",
            btnText: "Join a School Today ",
            btnURL: "",
            bgImage: "./images/understanding-campaign-bg.jpg",
            bodyText: "Do you want a deeper understanding of your Christianity and the things of God? The Understanding Campaign provides practical and biblical teachings on a myriad of biblical topics."
        },
    healingJesusTV:
        {
            titleText: "Healing Jesus TV",
            btnText: "Healing Jesus TV ",
            btnURL: "https://healingjesus.tv/online/",
            bgImage: "./images/banner-hjc-background-orange.jpg",
            bodyText: "Healing Jesus TV schedule features Christian teachings and beliefs. Our programming includes leadership training,preaching and teaching on various Christian and biblical subjects. Be inspired!"
        },
    becauseWeCan:
        {
            titleText: '<img src="images/because-we-can.png" class="img-fluid">',
            btnText: "Healing Jesus Campaign ",
            btnURL: "https://daghewardmills.org/healingjesuscampaign/",
            bgImage: "./images/because-we-can-bg.jpg",
            bodyText: "Over 11 million salvation decisions recorded and counting!"
        },
    }

//    function newTxt (text) {
//         text.split('\n').map(i => {
//             return <p>{i}</p>
//         })
//     }

    return (
    <>
        <TopNav />
        <PageSection 
            titleText = {sections.firstLoveChannel.titleText} 
            btnText = {sections.firstLoveChannel.btnText}
            btnURL = {sections.firstLoveChannel.btnURL}
            bgImage = {sections.firstLoveChannel.bgImage}   
            bodyText = {sections.firstLoveChannel.bodyText}/>
        <PageSection 
            titleText = {sections.dhmmAudio.titleText} 
            btnText = {sections.dhmmAudio.btnText} 
            btnURL = {sections.dhmmAudio.btnURL}
            bgImage = {sections.dhmmAudio.bgImage}   
            bodyText = {sections.dhmmAudio.bodyText}/>
        <PageSection 
            titleText = {sections.firstLoveCollective.titleText} 
            btnText = {sections.firstLoveCollective.btnText}
            btnURL = {sections.firstLoveCollective.btnURL} 
            bgImage = {sections.firstLoveCollective.bgImage}   
            bodyText = {sections.firstLoveCollective.bodyText}/>
        <PageSection 
            titleText = {sections.understandingCampaign.titleText} 
            btnText = {sections.understandingCampaign.btnText} 
            btnURL = {sections.understandingCampaign.btnURL}
            bgImage = {sections.understandingCampaign.bgImage}   
            bodyText = {sections.understandingCampaign.bodyText}/>
        <PageSection 
            titleText = {sections.healingJesusTV.titleText} 
            btnText = {sections.healingJesusTV.btnText} 
            btnURL = {sections.healingJesusTV.btnURL}
            bgImage = {sections.healingJesusTV.bgImage}   
            bodyText = {sections.healingJesusTV.bodyText}/>
        <PageSection 
            titleText = {sections.becauseWeCan.titleText} 
            btnText = {sections.becauseWeCan.btnText} 
            btnURL = {sections.becauseWeCan.btnURL}
            bgImage = {sections.becauseWeCan.bgImage}   
            bodyText = {sections.becauseWeCan.bodyText}/>
        <ConnectWithUs/>
    </>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));