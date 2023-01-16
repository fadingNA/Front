import React from "react";
import './work.scss';
import {motion} from "framer-motion";
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {images} from "../../constants";

const works = [
    {
        title: 'MicroArt Services',
        position: 'SMT-Operator',
        description: 'Assisted QA inspector with first article inspections. Audited kits delivered from inventory',
        imgURL: images.microart,
    },
    {
        title: 'Imperfect FreshEats',
        position: 'Supervisor',
        description:  'Trained new staff, monitored business operation, ensured food safety and solved problems',
        imgURL: images.imper,
    },
    {
        title: 'MadMex Fresh Mexican Grill',
        position: 'Supervisor',
        description:  'Follow up and ensured resolution for customer needed. Assistant manager',
        imgURL: images.madmex,
    },
    {
        title: 'National Housing Authority',
        position: 'Editor',
        description: 'Reviewed and evaluated the content and re-arranged footages appropiate sequences',
        imgURL: images.nha
    }
]
const Work = () => {
    return (

        <div id="work" className="app__works app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 3}}
                className="app__header-info">
                <div className="app__works-badge">
                    <div className="badge-cmp app__flex">
                        <span>
                            🕶
                        </span>
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, type: 'tween'}}
                            style={{marginLeft: 20}}
                            className={"text-center p-10"}>
                            <h1 className="head-text">
                                Work Experiences
                            </h1>

                        </motion.div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="app__profiles">
                        {works.map((about, i) => (
                            <motion.div
                                whileInView={{opacity: 1}}
                                whileHover={{scale: 1.1}}
                                transition={{duration: 0.5, type: 'tween'}}
                                className="app__profile-item"
                                key={about.title + i}>
                                <a href={about.linkUrl} target="_blank" rel="noopener">
                                    <img src={about.imgURL} alt={about.title}/>

                                </a>
                                <h2 className="bold-text2" style={{marginTop: 20,}}>{about.title}</h2>
                                <p className="bold-text2" style={{marginTop: 10}}>{about.description}</p>
                            </motion.div>))}
                    </div>
                </div>
                <br/>

                <br/>
                <br/>
            </motion.div>

        </div>
    )
}

export default Work;