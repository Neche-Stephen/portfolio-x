import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://twitter.com/CUbawike' target='_blank' rel="noreferrer">
      <BsTwitter />
    </a>
    <a href='https://web.facebook.com/ubawike.chinecherem' target='_blank' rel="noreferrer">
      <FaFacebookF />
    </a>
    <a href='https://www.linkedin.com/in/chinecherem-ubawike/' target='_blank' rel="noreferrer">
      <BsLinkedin />
    </a>
  </div>
);

export default SocialMedia;
