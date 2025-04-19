import React from "react";
import "./AboutUs.css";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>
          Welcome to MedCare, where we make healthcare accessible, convenient,
          and seamless for everyone. Whether you're looking to book appointments
          at clinics, hospitals, or schedule routine checkups, our platform
          simplifies the process, ensuring you get the care you need quickly and
          efficiently.
        </p>
        <p>
          Our main focus is to provide an exceptional online experience for
          patients. From scheduling appointments to receiving your medical
          reports, everything is just a few clicks away. We understand the
          importance of timely access to health information, so we ensure that
          your reports are delivered digitally, saving you time and hassle.
        </p>
        <p>
          Additionally, we offer online consulting services, connecting you with
          experienced healthcare professionals from the comfort of your home.
          Our goal is to bridge the gap between patients and healthcare
          providers, making quality medical care available to everyone.
        </p>
        <h3>Our Journey</h3>
        <p>
          MedCare was founded by Irshadul Haque, an engineering student, as a
          college project aimed at improving healthcare access through
          technology. What started as a passion project has now evolved into a
          platform dedicated to transforming the way people experience
          healthcare.
        </p>
        <p>
          We are committed to continuously enhancing our services to ensure you
          receive the best possible care, with convenience and reliability at
          the core of everything we do.
        </p>
      </div>
  );
};

export default AboutUs;
