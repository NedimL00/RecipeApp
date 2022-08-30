import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <section>
      <div className='container'>
        <div className="about-container">
          <img src='https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'/>
          <div className='about-text'>
            <h2>About Recipe App</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos aliquam dolorum eos ea quia. Earum, tempore distinctio laborum possimus magnam id similique iure quia, delectus, sed nulla praesentium. Eligendi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non molestiae sed et aliquam repellendus vitae, magni animi, ad fuga minima tempora voluptates suscipit repellat eaque saepe inventore accusantium quaerat debitis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt mollitia voluptas ipsum error enim consequatur nostrum dolor dicta fugit possimus autem distinctio quis aperiam fugiat tempore explicabo, placeat quidem quisquam.</p>
            <div className='social-icons'>
            <a href="#"><FaFacebook className="social-icon"  /></a>
            <a href="#"><FaTwitter className="social-icon" /></a>
            <a href="#"><FaGoogle className="social-icon" /></a>
            <a href="#"><FaGithub className="social-icon" /></a>
            </div>
            <Link to='/' className='btn about-page-btn'>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About