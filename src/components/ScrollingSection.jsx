import React from 'react';
import './ScrollingSection.css';
import picture from './2.png'
import pic1 from './portfolioImage1.jpg'
import pic2 from './portfolioImage2.png'
import pic3 from './portfolioImage3.jpg'

export default function ScrollingSection() {
  return (
<div className='main'>
    <div className="scrolling-section">
      <div className="personal-info">
        <img className="profile-pic"src={picture} alt="pic" />
        <h2>Patrick Acheson</h2>
        <h3>Undergraduate Student</h3>
        <div className="social-media-links">
          <a href="https://www.linkedin.com/in/patrick-acheson-8153a5205/" target="_blank" rel="noopener noreferrer">Linked-In</a>
          <a href="https://app.hackthebox.com/profile/746594" target="_blank" rel="noopener noreferrer">HackTheBox</a>
          <a href="https://github.com/PatrickAcheson" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
        Hi, my name is Patrick and I am a second year Cyber Security and Forensics student at Edinburgh Napier University.
        I have a strong passion for programming, particularly in Python. I have experience using Python for various projects such as web scraping, data analysis, and automation tasks. 
        </p>
        <p>In addition to my programming skills, I am also proficient in Linux and Windows operating systems and have obtained my CCNA certification in computer networking. I am interested in ethical hacking, reverse engineering, and web development, and have experience with web exploitation and privilege escalation. I am an active member of the cybersecurity community, with profiles on platforms such as Hack The Box and TryHackMe. I am currently seeking a summer internship where I can apply my skills and knowledge in the field of cyber security.
        </p>
        <p>I am excited to continue learning and growing as a programmer and cybersecurity professional.</p>
      </div>
    </div>
  <div className="projects-section">
  <h1 className="text-center">Projects</h1>
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="card-body">
              <img src={pic1} alt="Card image" />
              <h4 className="card-title">Telegram Bot Lambda</h4>
              <p className="card-text">Basic walkthrough of the creation of a Telegram Bot using AWS services such as Lambda and API Gateway.</p>
              <div className="text-center">
                <a href="https://github.com/PatrickAcheson/telegram-bot-lambda-api-gateway" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-body">
              <img src={pic2} alt="Card image" />
              <h4 className="card-title">Quiz App</h4>
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="text-center">
                <a href="https://patrickacheson.github.io/cyber-quiz-w-js/index.html" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-body">
              <img src={pic3} alt="Card image" />
              <h4 className="card-title">Basic Bash Menu System</h4>
              <p className="card-text">A bash script that prefroces basic OS functions, copy, move and delete systen files & directorys.</p>
              <div className="text-center">
                <a href="https://github.com/PatrickAcheson/basic-bash-menu-system" className="btn btn-success">Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
  </div>
  );
}
