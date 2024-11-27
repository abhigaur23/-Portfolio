import React from 'react';
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Home = () => {
  const [role] = useTypewriter({
    words: ['React Frontend Developer'],
    loop: true,  
  });
  return (
    <section className='Home'>
    <div className='Home'>
      <div className='Home_Content'>
        <p className='greet'>Hello,I'M</p>
        <h1 className="name">Abhishek Gaur</h1>
        <p className='role '>{role}<span className='cursor'><Cursor /></span></p>
        <div className='Links mt-4'>
        </div>
        <div className='social_link mt-5'>
          <a href='mailto:gaurabhi7890@gmail.com' className='Social mx-3' target='blank'><FaEnvelope/></a>
          <a href='https://www.linkedin.com/in/abhishek-gaur-8a02b0259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='Social mx-3' target='blank'><FaLinkedinIn/></a>
          <a href='https://github.com/abhigaur23' className='Social mx-3' target='blank'><FaGithub /></a>
          <a href='https://www.instagram.com/gaur_abhi_23?igsh=MW1rZXZ6NGR1YXpueQ==' className='Social mx-3' target='blank'><FaInstagram/></a>

        </div>
      </div>
    </div>
    </section>
  );
};
