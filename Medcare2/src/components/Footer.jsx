import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us at :</p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            className="mylinks"
            src="https://th.bing.com/th?id=ODLS.f176c120-c989-4954-89d5-7e700c6badfd&w=32&h=32&o=6&cb=s3&pid=1.2"
            alt="Twitter"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            className="mylinks"
            src="https://th.bing.com/th?id=ODLS.7d3063c3-cd17-4792-8d4f-4e98c892a389&w=32&h=32&o=6&cb=s1&pid=1.2"
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            className="mylinks"
            src="https://th.bing.com/th?id=ODLS.2c4a26df-86f7-4b62-8221-97f8afb20165&w=32&h=32&o=6&cb=s2&pid=1.2"
            alt="Instagram"
          />
        </a>
      </div>
      <hr />
      <p className="copyright">
        © Copyright 2024. Medcare Group. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
