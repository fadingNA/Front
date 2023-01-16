import React, {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {images} from "../../constants";
//import {AppWrap, MotionWrap} from '../../wrapper';
import './about.scss';
//import {urlFor, client} from '../../client';

const abouts = [
    {
        id: 1,
        title: 'Software Engineer',
        description: 'Demonstrated expertise in object oriented programming with C++ and Java',
        imgURL: images.about01,
        linkUrl: 'https://www.linkedin.com/in/nonthachai-plodthong-0882271a4/'
    },
    {
        id: 2,
        title: "Bachelor's Degree, " +
            "Public Relation",
        description: 'Create and deploy press releases, provide new business strategy support.',
        imgURL: images.about02,
        linkUrl: 'https://www.rsu.ac.th'
    },
    {
        id: 3,
        title: 'Diploma, Computer Science',
        description: 'Computational thinking, Algorithms & Data Structures, Object-Oriented-Programming',
        imgURL: images.about03,
        linkUrl: 'https://www.senecacollege.ca/home.html'
    },
    {
        id: 4,
        title: 'Former Professional Player for IDEAL.GIGABYTE, DotA 2',
        description: 'Competitive across the globe for 2 years',
        imgURL: images.about04,
        linkUrl: 'https://www.mineski.net/news/3805-mpgl-sea-team-feature-ideal-gigabyte'
    }, {
        id: 5,
        title: 'Former Professional Player for Lostboy.OZONE, DotA 2',
        description: 'Competitive across the globe for 5 years',
        imgURL: images.about05,
        linkUrl: 'https://www.facebook.com/Finiteteam/'
    }
]
const About = () => {
    //const [abouts, setAbouts] = useState([]);
    //     useEffect(() => {
    //         const query = '*[_type == "abouts"]';
    //         client.fetch(query).then((data) => {
    //             setAbouts(data);
    //         })
    //     }, []);
    return (
        <>
            <div id="about" className="app__profiles">
                {abouts.map((about, i) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + i}>
                        <a href={about.linkUrl} target="_blank" rel="noopener">
                            <img src={about.imgURL} alt={about.title}/>

                        </a>
                        <h2 className="bold-text" style={{marginTop: 20,}}>{about.title}</h2>
                        <p className="bold-text" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>))}

            </div>
        </>
    )
}
export default About;