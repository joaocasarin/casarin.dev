import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

const About = () => (
    <div className="about center">
        <h1>
            Hi, I am <span className="about__name">Joao Casarin.</span>
        </h1>

        <p className="about__desc">
            I am a fullstack developer, who enjoys building things that make a difference. I am
            currently working at Eldorado as a software integration analyst. I like writing clean,
            reusable code, and I am always looking for new ways to improve my skills.
        </p>

        <div className="about__contact center">
            <a
                href="https://drive.google.com/drive/folders/1e13yjmpf_hL3JeigRBq_Cr8Wv6XU0380?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                <button type="button" className="btn btn--outline">
                    Resume
                </button>
            </a>

            <a
                href="https://github.com/joaocasarin"
                aria-label="github"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
            >
                <GitHubIcon />
            </a>

            <a
                href="https://www.linkedin.com/in/joaocasarin/"
                aria-label="linkedin"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon />
            </a>
        </div>
    </div>
);

export default About;
