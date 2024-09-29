// src/components/EmailIcon.js
import React from "react";
import { MdEmail } from "react-icons/md"; // Using an icon from react-icons

const EmailIcon = () => (
  <MdEmail
    style={{
      color: "gray",
      fontSize: "20px",
      position: "relative",
      top: "5px",
      marginRight: "5px",
    }}
  />
);

export default EmailIcon; // Ensure you export the component
