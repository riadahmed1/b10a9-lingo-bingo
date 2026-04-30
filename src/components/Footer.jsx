import React from 'react';

const Footer = () => {
  return (
    <footer className="flex-col bg-neutral">
      <div className='footer sm:footer-horizontal text-neutral-content p-10 mt-10'>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <hr className='w-11/12 mx-auto text-gray-400'/>
        <p className='text-center text-gray-400 py-2'>&copy;copyright <span className='font-bold'>2026</span>. all right reserved by Riad Ahmed</p>
    </footer>
  );
};

export default Footer;