import React, { useRef, useState } from "react";
import "./EnrollmentVerification.css";
import logoImage from "./gesto-logo.webp";
import { studentData } from "./constant/constant";
import { useNavigate } from "react-router-dom";
import EmailIcon from "./emailIcon"; // Adjust the path based on where your files are located
import Loader from "./loader";

const EnrollmentVerification = () => {
  let obj;
  const inputRef = useRef({});
  const navigate = useNavigate();

  return (
    <div className="enrollment-page">
      <div className="header">
        {/* <div className="contact">
          <p>+123 012 034 056</p>
        </div> */}
        <div className="email" style={{ marginTop: "8px", marginLeft: "30px" }}>
          <p style={{ cursor: "pointer" }}>
            <span style={{ marginLeft: "2px" }}>
              <EmailIcon />
            </span>
            <a
              href="mailto:support@infogestohyderabad.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              support@infogestohyderabad.com{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="logo-navbar">
        <div className="company-image">
          <img className="logo-img" src={logoImage} alt="Company image" />
        </div>

        {/* <div>
                    <nav className="navbar">
                        <ul>
                            <li><a href="https://www.gestoacademy.com/">Home</a></li>
                            <li><a href="">The Institute</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Specialization</a></li>
                            <li><a href="#">Accreditation</a></li>
                            <li><a href="#">Student Corner</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div> */}
      </div>

      <div className="enrollment-verify">
        <div style={{ width: "100%" }}>
          <p className="enroll-caption"> ENROLLMENT VERIFICATION </p>
        </div>
      </div>
      <div className="mid-area ">
        <div className="enrollment-report">
          <h2 className="form-header">ENROLLMENT VERIFICATION REPORT</h2>
          <div className="form-body">
            <p>
              <b>VERIFICATION PROCESS</b>
              <br />
              Are you a third party needing to verify a Candidate Education
              credentials?
              <br />
              <br />
              Following options are available.
              <br />
              Online Enrolment Verification Profile GESTO students can Provide
              Student Name &amp; Registration Number to the third parties (i.e.
              login details) to verify the information in Official Institution
              Web Page. Third Party Can Verify All the Candidate Details Like
              Examination Records / Enrollment Records / Curriculum Records Etc.
              Email Verification If the above options do not meet the request
              need, or you need to request additional student information Please
              Send your request, together with a completed Set of Student
              Educational Credential and signed copy to:
              support@infogestohyderabad.com. Buffer Waiting Time of the
              Institution to Revert to the Third Parties Will be From 24 Hours
              and Last Upto 72 Hours. Exempting Public &amp; National Holidays
            </p>
          </div>
        </div>
        <div className="enroll-form">
          <div className="">
            <div className="title">Enrollment Verification</div>
          </div>
          <div className="verification-form">
            <div className="form-group">
              {/* <label>Student Name</label> */}
              <input
                onChange={(e) => {
                  inputRef.current.name = e.target.value;
                }}
                type="text"
                placeholder="Student Name"
              />
            </div>
            <div className="form-group">
              {/* <label>Enrollment No</label> */}
              <input
                onChange={(e) => {
                  inputRef.current.enrollnum = e.target.value;
                }}
                type="text"
                placeholder="Registration Number"
              />
            </div>
            <div className="button-group">
              <button
                className="verify-btn"
                onClick={() => {
                  if (!inputRef.current?.name || !inputRef.current?.enrollnum) {
                    alert("Please fill the form");
                  } else if (
                    studentData.find(
                      (item) => item.ENROLLMENT === inputRef?.current?.enrollnum
                    )
                  ) {
                    obj = studentData.find(
                      (item) => item.ENROLLMENT === inputRef?.current?.enrollnum
                    );
                    navigate("/loader");
                    setTimeout(() => {
                      navigate("/report", { state: { obj } });
                    }, 2000);
                  } else {
                    alert("No data found with given information.");
                  }
                }}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <footer className="footer">
        <div className="footer-content">
          <div className="enroll">
            <div className="footer-desc">
              <p>
                Students hone their skills in the industry. We thrive to make
                our courses extensive, highly interactive and delivered by
                experienced faculty
              </p>
            </div>
            <div className="enroll-btn">
              <button
                className="enr-btn"
                onClick={() => {
                  navigate("/enroll-student");
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
          <div className="reach-us">
            <h3>Reach Us</h3>
            <div className="email">support@infogestohyderabad.com</div>
          </div>
          <div className="address">
            <h3>Address</h3>
            <p>
              {" "}
              D-No-1-8-613, Prakash Nagar, <br></br>
              (Opp.to Old Begumpet Airport) <br></br>
              Begumpet, Hyderabad, Telangana 500016
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="copyright">
          © 2024 Designed and Developed by GESTO. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default EnrollmentVerification;
