import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='page-content flex-center-colum'>
          <div className='l-footer'>
            <h1>LOGO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit.
              Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.
            </p>
          </div>
          <ul className='r-footer'>
            <li>
              <h2>Social</h2>
              <ul className='box'>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
                <li>
                  <a href='#'>Pinterest</a>
                </li>
                <li>
                  <a href='#'>Dribbble</a>
                </li>
              </ul>
            </li>
            <li className='features'>
              <h2>Information</h2>
              <ul className='box h-box'>
                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Sales</a>
                </li>
                <li>
                  <a href='#'>Tickets</a>
                </li>
                <li>
                  <a href='#'>Certifications</a>
                </li>
                <li>
                  <a href='#'>Customer Service</a>
                </li>
              </ul>
            </li>
            <li>
              <h2>Legal</h2>
              <ul className='box'>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms of Use</a>
                </li>
                <li>
                  <a href='#'>Contract</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className='b-footer'>
            <p>All rights reserved by ©CompanyName 2021 </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
