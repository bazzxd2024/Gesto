import logoImage from './gesto-logo.webp'
import React from 'react';
import './EnrollmentReport.css';
import candidateImage from './sayil-getco.jpg'
import './bts.css'
import { useLocation } from 'react-router-dom';




const Report = () => {
    const location = useLocation()
    let { obj } = location.state
    console.log(obj)
    return (
        <div>
            <div className='report-comp-logo'>
                <img className='logo-img' src={logoImage} alt="company image" />
            </div>
            <section className="account-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div style={{ color: "#000", fontSize: "15px" }}>
                                <center> <h2>ENROLLMENT VERIFICATION REPORT</h2></center>
                            </div>

                            <div className='logo-container' style={{marginTop:"20px",marginBottom:"20px"}}>
                                <img src={obj.IMAGE} width="100" height="100" style={{marginLeft:"46%"}}/> <br></br>

                            </div>

                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" >
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tr>
                                                <td width="20">&nbsp;</td>

                                                <td width="527" ><table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0">
                                                    <tr>
                                                        <td>
                                                            <table width="80%" border="0" cellPadding="0" cellSpacing="0" className="table table-striped table-theme-1 table-bordered">
                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Registration Number</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.ENROLLMENT}</td>

                                                                </tr>
                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Program</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.PROGRAM}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Batch</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.SPECIALIZATION}</td>
                                                                </tr>


                                                                <tr>
                                                                    <td width="527px"><strong>Candidate Name: </strong></td>
                                                                    <p style={{ paddingLeft: "10px", marginTop: "10px" }}>{obj.CANDIDATE_NAME} </p>
                                                                </tr>

                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Candidate Status</strong></td>

                                                                    <td style={{ paddingLeft: "10px" }}>{obj.CANDIDATE_STATUS}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Father's Name</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.FATHER_NAME}</td>

                                                                </tr>
                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Date Of Birth</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.DOB}</td>

                                                                </tr>

                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Gender</strong></td>

                                                                    <td style={{ paddingLeft: "10px" }}>{obj.GENDER}</td>

                                                                </tr>

                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Year Of Study</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.SESSION}</td>

                                                                </tr>
                                                                <tr>
                                                                    <td height="33" style={{ paddingLeft: "10px" }}><strong>Country</strong></td>
                                                                    <td style={{ paddingLeft: "10px" }}>{obj.COUNTRY}</td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table></td>

                                                <td width="20">&nbsp;</td>
                                            </tr>
                                        </table>    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
export default Report