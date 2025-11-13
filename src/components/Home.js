/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Home.css";
// import Login from "./Login";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home(){
    const [showMore, setShowMore] = useState(false);
    const images = [
    "/images/banner1.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner8.jpg",
    "/images/banner9.jpg",
    "/images/banner10.jpg",
    "/images/banner11.jpg",
    "/images/banner12.jpg",
    "/images/banner13.jpg",
    "/images/banner14.jpg",
  ];
      const links = [
        { label: "Register Complaint of Unauthorized Transaction", url: "https://crcf.sbi.bank.in/ccf/home/unauth?key1=444", newTag: true },
        { label: "QMS (e-Appointment)", url: "https://qms.sbi.bank.in/" },
        { label: "RBI Retail Direct portal", url: "https://rbiretaildirect.org.in" },
        { label: "Block ATM Card", url: "https://retail.sbi.bank.in/retail/blockatmcardintermediate.htm" },
        { label: "Banking Forms", url: "https://retail.sbi.bank.in/npersonal/reg_forms.html" },
        { label: "Doorstep Banking", url: "https://www.psballiance.com/doorstep-banking.html" },
        { label: "SBI General Insurance Document Download", url: "https://www.sbigeneral.in/portal/downloads" },
        { label: "SBI FasTag", url: "https://fastag.sbi.bank.in/" },
        { label: "SBI Salary Account", url: "https://sbi.bank.in/web/salary-account" },
        { label: "NRI Services", url: "https://sbi.bank.in/web/nri/home" },
        { label: "CYBER CRIME HELPLINE", url: "https://cybercrime.gov.in/" },
        { label: "SBI Securities", url: "https://www.sbisecurities.in/" },
        { label: "SBI Express Remit", url: "https://remit.sbi/" },
        { label: "SBI Mutual Fund", url: "https://www.sbimf.com/en-us/quick-invest?arn_code=ARN12195" },
        { label: "SBI Life Insurance", url: "https://www.sbilife.co.in" },
        { label: "SBI Card", url: "http://www.sbicard.com/" },
        { label: "OnlineSBI Global", url: "https://www.onlinesbiglobal.com/" },
        { label: "Foreign Travel/EZ-Pay/Gift Cards", url: "https://prepaid.sbi.bank.in/" },
        { label: "SBI General Insurance", url: "http://www.sbigeneral.in" },
        { label: "Cash Management Product", url: "https://cmp.sbi.bank.in/" },
        { label: "State Bank Loyalty Rewardz", url: "https://rewardz.sbi.bank.in/" },
        { label: "GSTN Updation", url: "https://onlinesbi.sbi.bank.in/documents/GSTN_Transactions_Updation_Process.pdf" },
        { label: "eSBTR Challan Generation", url: "https://esbtr.sbi.bank.in/ESBTR1/OnlineRegistration" },
        { label: "Noida Metro Card", url: "https://retail.sbi.bank.in/sbijava/retail/html/faq_noida_metro.html" },
        { label: "Nagpur Metro Card", url: "https://retail.sbi.bank.in/sbijava/retail/html/faq_nagpur_metro.html" },
        { label: "Loan Repayment via Digital Mode (ePay)", url: "https://www.sbiepay.sbi/secure/billpayment/checkout?m=0eb754aa77d0dea8efa1cbccd31c2a4f652e6b138a688d57d86837c685660446&u=0eb754aa77d0dea8efa1cbccd31c2a4f652e6b138a688d57d86837c685660446" },
        { label: "Linking of PAN with Aadhaar", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar" },
        { label: "Current Account", url: "https://sbi.bank.in/web/business/sme/current-accounts" },
        { label: "Aadhaar Seeding Service: BASE", url: "https://sbi.bank.in/web/personal-banking/misc/bharat-aadhaar-seeding-enabler" },
        { label: "Fair Lending Practice Code", url: "https://onlinesbi.sbi.bank.in/documents/Yono_Business_Fair_Practice_Lending_Code.pdf" },
      ];
    
      const visibleLinks = showMore ? links : links.slice(0, 12);
return(
    <><div className="logo-section">
        <div className="row">
            <div className="col-md-8">
                <img className="main-logo"
                    src="https://images.seeklogo.com/logo-png/30/1/sbi-new-logo-png_seeklogo-304943.png"
                    alt="SBI Logo" />
            </div>
            <div className="col-md-3 main-content">
                <a href="#mainContent">Skip to main content</a>
            </div>
            <div className="col-md-1 sbi-right-logo">
               {/* <div class="logo"> */}
                <img alt="SBI Logo" src="https://retail.onlinesbi.sbi/sbijava/retail/images/sbi_logo.png"/>
                <div class="sbi-online-text">ONLINE</div>
                {/* </div> */}
            </div>
        </div>

    </div>
         {/* ---------------------------------navbar----------------------- */}
        <div class="navbar">
            <a href="#">Services</a>
            <a href="#">FAQ</a>
            <a href="#">Corporate Website</a>
            <a href="#">SBIePay Lite <span class="small-text">(SBMOPS)</span></a>
            <a href="#">Donations</a>
            <a href="#">SB Collect</a>
            <a href="#">Videos</a>
            <a href="#">mCash</a>
            <a href="#">Apply for SB/ Current Account <span class="small-text">New</span></a>
            <a href="#">SBI Unipay</a>
            <a href="#">SBI Loans <span class="small-text">New</span></a>
            <div class="hindi-btn">हिंदी</div>
        </div>
        {/* ---------------------------HeaderAlert------------------------- */}
         <div className="row">
        <div className="col-lg-12 col-md-12">
    <div className="header-alert logo-section">
          <span className="blink-color">
              If slowness is observed during Login Page loading, please refresh the page for better experience.
          </span>
          <div className="para-color">
              SBI never asks for confidential information such as PIN and OTP from customers.
              Please beware of fraudulent calls.
          </div>
      </div>
      
      </div>
     
      </div>
       <div className="marquee-card">
         <marquee>
              mCASH (Sending &amp; Claiming) facility will not be available in OnlineSBI &amp; YONO Lite after 30.11.2025. Please use alternate mode of transactions such as UPI, IMPS, NEFT, RTGS etc. for transfer of money to third party beneficiaries.&nbsp;&nbsp;|&nbsp;&nbsp;SBI announces migration of OnlineSBI website to new URL onlinesbi.sbi.bank.in.&nbsp;&nbsp;|&nbsp;&nbsp;Customers can now deposit Income Tax/Corporate Taxes using all Bank Debit Cards and Credit Cards under State Bank Payment Gateway&nbsp;&nbsp;|&nbsp;&nbsp;Mandatory Profile password change after 365 days introduced for added security&nbsp;&nbsp;|&nbsp;&nbsp;	
                Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre.&nbsp;&nbsp;|&nbsp;&nbsp;SBI never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details.
          </marquee>
      </div>
      {/*------------------------------- Login sections----------------------- */}
      <div
      id="bankingBoxes" className="row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-4 text-center" >
      {/* ---------------- PERSONAL BANKING ---------------- */}
      <div className="col px-1 p-0">
        <div className=" h-100 border-0 shadow-sm banking">
          <div className="banking_section card-body d-flex flex-column align-items-center justify-content-center text-center" style={{background:" rgb(248, 248, 248);"}}>
            
            {/* Header */}
            <div className="mb-2 mt-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9815/9815472.png"
                alt="Personal Banking Icon"
                className="mb-2"
                style={{ width: "50px", height: "50px" }}
              />
              <h1 className="m-0">
                <a
                  href="https://retailsbibank.netlify.app/"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="text-primary">PERSONAL<span style={{color:'black'}}> BANKING</span></h5>
                </a>
              </h1>
            </div>

            {/* Login Button */}
            <div className="login mb-3 align-items-center justify-content-center">
              <a
                href="https://retailsbibank.netlify.app/"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="me-2">LOGIN</span>
                <img src="/images/arrow.png" alt="Login Arrow" style={{ width: "15px" }} />
              </a>
            </div>
             <div>
              <p>&nbsp;</p>
             </div>
            {/* Quick Links */}
            <div className="w-100">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {[
                  { img: "/images/register.png", label: "New User Registration / Activation", href: "#newUserModal", modal: true },
                  { img: "/images/faq.png", label: "How Do I", href: "help_personal.html" },
                  { img: "/images/cust_care.png", label: "Customer Care", href: "https://crcf.sbi.bank.in/ccf/home/chatboat?key1=444" },
                  { img: "/images/unlock_user.png", label: "Lock & Unlock User", href: "https://retail.sbi.bank.in/preretail/lockunlockuseraccess.htm" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                     className={`d-flex align-items-center justify-content-center ${i !== 3 ? "border-right" : ""}`}
                    target={link.modal ? "" : "_blank"}
                    rel={link.modal ? "" : "noopener noreferrer"}
                    data-bs-toggle={link.modal ? "modal" : ""}
                  >
                    <img
                      src={link.img}
                      alt={link.label}
                      className="me-2"
                      style={{ width: "30px",height:"30px" }}
                    />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
              <div>
                <p>&nbsp;</p>
              </div>
            </div>
            <p className="text">
              SBI's internet banking portal provides personal banking services that give you complete control over your banking needs online.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- CORPORATE BANKING ---------------- */}
      <div className="col px-1 p-0">
        <div className=" h-100 border-0 shadow-sm">
          <div className=" card-body d-flex flex-column align-items-center banking_section justify-content-center text-center">
            
            {/* Header */}
            <div className="">
              <img
                src="/images/ybbi_corp.png"
                alt="Corporate Banking Icon"
                className="mb-2 image-margin"
                style={{ width: "130px", height: "50px" }}
              />
              <h1 className="m-0">
                <a
                  href="https://yonobusiness.sbi.bank.in/"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="text-primary">CORPORATE<span style={{color:'black'}}> BANKING</span></h5>
                </a>
              </h1>
            </div>

            {/* Corporate Login */}
            <div className="login login-align d-flex flex-column flex-sm-row align-items-center justify-content-center mb-3">
              <div className="dropdown me-sm-3 mb-2 mb-sm-0">
                <button
                  className=" dropdown-toggle"
                  type="button"
                  id="corporateLoginDropdown"
                  data-bs-toggle="dropdown"
                >
                  yono BUSINESS <sup className="text-danger fw-bold">New</sup>
                </button>
                <ul className="dropdown-menu text-center">
                  <li><a className="dropdown-item" href="https://yonobusiness.sbi.bank.in/yonobusinesslogin">yono BUSINESS <sup className="text-danger fw-bold">New</sup></a></li>
                  <li><a className="dropdown-item" href="https://yonobusiness.sbi.bank.in/yonobusinesslogin">Corporate</a></li>
                  <li><a className="dropdown-item" href="https://yonobusiness.sbi.bank.in/yonobusinesslogin">Supply Chain Finance</a></li>
                </ul>
              </div>

              <a
                href="https://yonobusiness.sbi.bank.in/yonobusinesslogin"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center"
              >
                LOGIN
                {/* <img src="/images/arrow.png" alt="Login Arrow" className="ms-2" style={{ width: "20px" }} /> */}
              </a>
            </div>

            {/* Description */}
            <p className="">
              <em>
                Have you tried our new simplified and intuitive business banking
                platform? Log in to{" "}
                <a href="https://yonobusiness.sbi.bank.in/" target="_blank" rel="noopener noreferrer">
                  yonobusiness.sbi.bank.in
                </a>{" "}
                to avail business banking services.
              </em>
            </p>

            {/* Corporate Quick Links */}
            <div className="iconLinks w-100">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {[
                  { img: "/images/register.png", label: "New Corporate Registration", href: "https://yonobusiness.sbi.bank.in/preonboard/landing/registration" },
                  { img: "/images/faq.png", label: "How Do I", href: "https://corp.sbi.bank.in/ybbihelp/help_corporate.html" },
                  { img: "/images/cust_care.png", label: "Customer Care", href: "https://yonobusiness.sbi.bank.in/ContactUs" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}  className={`d-flex align-items-center justify-content-center ${i !== 3 ? "border-right" : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link.img} alt={link.label} className="me-2" style={{ width: "30px",height:"30px" }} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4">
              {/* <p>&nbsp;</p> */}
            </div>
            <p className="">
              Corporate Banking application to administer and manage non-personal
              accounts online.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* --------------------------------usefull-links--------------------- */}
    <div id="useful-links" className="mt-0 pt-2 useful-links">
      <div className="row container-fluid row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {visibleLinks.map((link, i) => (
          <div className="col mb-2" key={i}>
           
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-decoration-none d-block py-1"
            >
               <span><img src="/images/icon_usefulLinks.png"></img></span>
              {link.newTag ? (
                <span className="fw-bold text-primary">
                  {link.label}
                  <sup className="text-danger ms-1">New</sup>
                </span>
              ) : (
                link.label
              )}
            </a>
          </div>
        ))}
      </div>

      <div className="text-center py-2">
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less ▲" : "More Useful Links ▼"}
        </button>
      </div>
    </div>
    {/* ----------------------------Banner Section------------------ */}
    <div className="banner-section">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            swipeable={true}
          >
            {images.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Banner ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        {/* footer section----------------------------- */}
         <footer className="footer">
      <p>© State Bank of India | All Rights Reserved</p>
      <p className="small-text">
        Site best viewed in 1280x720 resolution using Microsoft Edge / Chrome
      </p>
    </footer>
        </>
)
}
export default Home;