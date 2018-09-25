/* This is a footer file which will be common in every page */
import React from 'react';

const styles = {
  position: 'fixed',
  bottom: '0',
  width: '100 %',
  /* Set the fixed height of the footer here */
  height: '60px',
  lineHeight: '60px' /* Vertically center the text there */,
};
const Footer = () => (
  <footer className="footer flex-fill" style={styles}>
    <div className="container">
      <span className="text-muted">Developed by labrats with love. </span>
    </div>
  </footer>
);

export default Footer;
