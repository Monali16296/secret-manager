import React from 'react';
import './SecretLink.css';

interface SecretLinkProps {
  link: string;
}

const SecretLink: React.FC<SecretLinkProps> = ({ link }) => (
  <div className="secret-link-container">
    <strong>One-Time Link:</strong>
    <div><a href={link}>{link}</a></div>
  </div>
);

export default SecretLink; 