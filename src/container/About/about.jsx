import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {images} from "../../constants";
//import {AppWrap, MotionWrap} from '../../wrapper';
import './about.scss';
//import {urlFor, client} from '../../client';
const abouts = [
    {
        title: 'Software Engineer',
        description: 'Demonstrated expertise in object oriented programming with C++ and Java',
        imgURL: images.about01,
        linkUrl: 'https://www.linkedin.com/in/nonthachai-plodthong-0882271a4/'
    },
    {
        title: "Bachelor's Degree, " +
            "Public Relation",
        description: 'Create and deploy press releases, provide new business strategy support.',
        imgURL: images.about02,
        linkUrl: 'https://www.rsu.ac.th'
    },
    {
        title: 'Diploma, Computer Science',
        description: 'Computational thinking, Algorithms & Data Structures, Object-Oriented-Programming',
        imgURL: images.about03,
        linkUrl: 'https://www.senecacollege.ca/home.html'
    }
]
const About = () => {
    return (
        <>
            <div className="app__profiles">
                {abouts.map((about, i) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + i}>
                        <a href={about.linkUrl} target={"_blank"}>
                            <img src={about.imgURL} alt={about.title}/>
                        </a>
                        <h2 className="bold-text" style={{marginTop: 20,}}>{about.title}</h2>
                        <p className="bold-text" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}
export default About;